import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";

const slug = "git-permission-denied-publickey";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="GitHub could not match an SSH key on your computer to your account. Your repo and your work are fine. Find the one missing piece, fix it, and test."
    >
      <h2 style={{ marginTop: 0 }}>The error</h2>
      <p>You run <code>git push</code>, <code>git pull</code> or <code>git clone</code> and see this:</p>
      <Cmd lines={[
        "git@github.com: Permission denied (publickey).",
        "fatal: Could not read from remote repository.",
        "",
        "Please make sure you have the correct access rights",
        "and the repository exists.",
      ]} />
      <p>
        The first line comes from SSH. The last three come from Git, which only knows the
        connection failed.
      </p>

      <h2>A few words first</h2>
      <ul>
        <li><strong>SSH</strong> is a secure way for your computer to talk to another computer. Git uses it when your repo address starts with <code>git@github.com:</code>.</li>
        <li><strong>An SSH key</strong> is a pair of files. The <strong>private key</strong> (for example <code>id_ed25519</code>) stays on your laptop and is never shared. The <strong>public key</strong> (the same name ending in <code>.pub</code>) goes to GitHub.</li>
        <li><strong>The SSH agent</strong> is a small helper program that holds your keys in memory and offers them when you connect.</li>
      </ul>
      <p>
        &ldquo;Permission denied (publickey)&rdquo; means your computer offered no key, or offered a key
        GitHub has never seen. It is a sign-in problem, not a problem with your code.
      </p>

      <h2>Check first (these commands change nothing)</h2>
      <Cmd lines={[
        ["git remote -v", "does the address start with git@github.com: ?"],
        ["ls ~/.ssh", "is there a key, like id_ed25519 and id_ed25519.pub?"],
        ["ssh-add -l -E sha256", "which keys is the agent offering?"],
        ["ssh -T git@github.com", "test the key with GitHub"],
      ]} />
      <p>
        If the agent has no keys, <code>ssh-add -l -E sha256</code> prints <code>The agent has no identities.</code>{" "}
        If it has one, you see a line with its fingerprint (a short code that identifies the key):
      </p>
      <Cmd lines={["256 SHA256:... you@example.com (ED25519)"]} />

      <h2>Find your cause</h2>
      <div className="tbl"><table>
        <thead><tr><th>You find</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>No key files in <code>~/.ssh</code></td><td>Create a key and add it to GitHub (next section).</td></tr>
          <tr><td>Key files exist, but the agent has no identities</td><td>Run <code>eval &quot;$(ssh-agent -s)&quot;</code>, then <code>ssh-add ~/.ssh/id_ed25519</code>.</td></tr>
          <tr><td>The agent has a key, but GitHub still says no</td><td>Open GitHub, <strong>Settings &gt; SSH and GPG keys</strong>, and compare the fingerprints. Add the missing one.</td></tr>
          <tr><td>You ran <code>sudo git push</code></td><td>Drop <code>sudo</code>. It runs as another user, who has none of your keys.</td></tr>
          <tr><td>The address is <code>yourname@github.com:...</code></td><td>Always connect as the user <code>git</code>: <code>git@github.com:...</code>.</td></tr>
          <tr><td>A company account with single sign-on (SSO)</td><td>Next to the key on GitHub, click <strong>Configure SSO</strong>, then <strong>Authorize</strong>.</td></tr>
        </tbody>
      </table></div>

      <h2>The fix: add a key to GitHub</h2>
      <p>This is the most common case: a new laptop, or a key that was never added.</p>
      <Cmd lines={[
        ["ssh-keygen -t ed25519 -C \"you@example.com\"", "Enter for the default file, then a passphrase"],
        ["cat ~/.ssh/id_ed25519.pub", "print the PUBLIC key and copy it"],
        "# GitHub: Settings > SSH and GPG keys > New SSH key > paste",
        ["ssh -T git@github.com", "test again"],
      ]} />
      <p>
        A <strong>passphrase</strong> is a password for the private key, in case the laptop is stolen.
        When the test works, GitHub replies:
      </p>
      <Cmd lines={["Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access."]} />
      <p>
        The first time, SSH asks if you trust <code>github.com</code> and shows a fingerprint. Compare it
        with GitHub&apos;s published fingerprints, then type <code>yes</code>. It only asks once.
        Now run your <code>git push</code> again.
      </p>

      <div className="callout warn">
        <p>
          <strong>Only share the file ending in <code>.pub</code>.</strong> Anyone with your private key
          can push as you. Never paste it into GitHub, a chat or a ticket.
        </p>
      </div>

      <h2>No time? Switch to HTTPS</h2>
      <p>
        HTTPS is the other way to connect, and it works on networks that block SSH. Change the
        repo&apos;s address, then let the GitHub CLI (<code>gh</code>) handle the sign-in:
      </p>
      <Cmd lines={[
        "git remote set-url origin https://github.com/you/shop-app.git",
        ["git remote -v", "check the new address"],
        ["gh auth login", "choose GitHub.com, HTTPS, log in with browser"],
        ["gh auth setup-git", "Git now asks gh for your login"],
      ]} />
      <p>
        GitHub does not accept your account password for Git. Use SSH, a <code>gh</code> login or a
        personal access token.
      </p>

      <h2>git clone permission denied (publickey)</h2>
      <p>
        Cloning shows the same error when you copy the SSH address
        (<code>git@github.com:you/repo.git</code>) on a computer that has no key on GitHub yet.
        Two ways out:
      </p>
      <ul>
        <li>Do the checks and the fix above, then clone again.</li>
        <li>Clone with the HTTPS address instead: <code>git clone https://github.com/you/repo.git</code>.</li>
      </ul>

      <h2>Related errors</h2>
      <p>
        If GitHub knows who you are but still says no, you get{" "}
        <code>Permission to OWNER/REPO.git denied to USER</code> or a <code>403</code> instead. That
        means the wrong account, or an account without write access. If the push reaches GitHub
        and is <code>rejected (fetch first)</code>, read{" "}
        <Link href="/learn/git-push-rejected-fetch-first">Fix &ldquo;git push rejected (fetch first)&rdquo;</Link>.
        Studying for the GitHub Foundations exam? See the{" "}
        <Link href="/learn/gh-900-study-plan">GH-900 study plan</Link>.
      </p>
      <p className="note">
        GitHub steps and messages checked on docs.github.com on 17 November 2026. The Git
        and <code>ssh-add</code> output above was reproduced in a test repo.
      </p>
    </Article>
  );
}

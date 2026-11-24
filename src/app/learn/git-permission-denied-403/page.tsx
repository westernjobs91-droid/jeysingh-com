import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";

const slug = "git-permission-denied-403";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="GitHub knows who you are. It just will not let that account write to this repo. The fix is about your sign-in, not your code: no reset, no force push, no new clone."
    >
      <h2 style={{ marginTop: 0 }}>The error</h2>
      <p>You run <code>git push</code> and see this:</p>
      <Cmd lines={[
        "remote: Permission to acme/shop-app.git denied to jey-personal.",
        "fatal: unable to access 'https://github.com/acme/shop-app.git/': The requested URL returned error: 403",
      ]} />
      <p>
        Read it slowly. <code>acme/shop-app</code> is the repo (owner, then name).{" "}
        <code>jey-personal</code> is the GitHub account Git signed in with. <strong>403</strong> is
        the web&apos;s code for &ldquo;I know who you are, and the answer is no.&rdquo;
      </p>

      <h2>A few words first</h2>
      <ul>
        <li><strong>A remote</strong> is the address of the copy of your repo on GitHub. It is usually called <code>origin</code>.</li>
        <li><strong>HTTPS</strong> is one of the two ways Git talks to GitHub. Your remote starts with <code>https://github.com/</code>. The other way is SSH (<code>git@github.com:</code>).</li>
        <li><strong>A credential helper</strong> is a small program that stores your GitHub login and hands it to Git, so you do not type it every time. On a Mac this is often the Keychain. It can also be the GitHub CLI, <code>gh</code>.</li>
        <li><strong>Write access</strong> means an account is allowed to push to a repo, not only read it.</li>
      </ul>
      <p>
        This is different from <code>Permission denied (publickey)</code>, where GitHub could not
        tell who you are at all. That one has its own guide:{" "}
        <Link href="/learn/git-permission-denied-publickey">Fix &ldquo;Permission denied (publickey)&rdquo;</Link>.
      </p>

      <h2>Check first (these commands change nothing)</h2>
      <Cmd lines={[
        ["git remote -v", "which repo am I pushing to?"],
        ["gh auth status", "which GitHub accounts is gh signed in to?"],
        ["git config --show-origin --get-all credential.helper", "who stores my login?"],
      ]} />
      <p><code>git remote -v</code> prints the address twice, once for fetch and once for push:</p>
      <Cmd lines={[
        "origin\thttps://github.com/acme/shop-app.git (fetch)",
        "origin\thttps://github.com/acme/shop-app.git (push)",
      ]} />
      <p>
        If you use <code>gh</code> with two accounts, <code>gh auth status</code> lists both and marks
        the one in use:
      </p>
      <Cmd lines={[
        "github.com",
        "  ✓ Logged in to github.com account jey-personal (...)",
        "  - Active account: true",
        "  ...",
        "  ✓ Logged in to github.com account jey-work (...)",
        "  - Active account: false",
      ]} />

      <h2>Find your cause</h2>
      <div className="tbl"><table>
        <thead><tr><th>You find</th><th>It means</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>The account in the error is not the one you meant (personal instead of work)</td><td>Git signed in as the wrong account</td><td>Switch account (next section).</td></tr>
          <tr><td>The account is right, but the owner never gave it access (check with them, or look for a pending invitation in your email)</td><td>That account has no write access</td><td>Ask the owner to add you, or fork and open a pull request.</td></tr>
          <tr><td>The remote has a typo or points to someone else&apos;s repo</td><td>You are pushing to the wrong place</td><td><code>git remote set-url origin</code> with the right address.</td></tr>
          <tr><td>You push with a personal access token (a long password-like code you made on GitHub)</td><td>The token cannot write to this repo, or it expired</td><td>Make a new fine-grained token with write access to this repo, and an expiry date.</td></tr>
        </tbody>
      </table></div>

      <h2>The fix: sign in as the right account</h2>
      <p>If <code>gh</code> holds your login, switch the active account, then tell Git to ask <code>gh</code>:</p>
      <Cmd lines={[
        ["gh auth switch", "with two accounts, it flips to the other one"],
        ["gh auth setup-git", "make gh the helper Git asks for a login"],
        ["git push", "try again"],
      ]} />
      <p><code>gh auth switch</code> confirms the change:</p>
      <Cmd lines={["✓ Switched active account for github.com to jey-work"]} />
      <p>
        With more than two accounts, name the one you want:{" "}
        <code>gh auth switch --user jey-work</code>.
      </p>
      <p>
        If the Mac Keychain holds the old login instead, erase it. Type the first command, then the
        two lines, then press Return on an empty line. Nothing prints when it works. Your next push
        asks you to sign in again.
      </p>
      <Cmd lines={[
        "git credential-osxkeychain erase",
        "host=github.com",
        "protocol=https",
      ]} />

      <h2>Two accounts on one laptop?</h2>
      <p>
        If you keep work and personal accounts, you can tie one repo to one account by putting the
        username in its address. Git then asks the helper for that user&apos;s login only:
      </p>
      <Cmd lines={[
        "git remote set-url origin https://jey-work@github.com/acme/shop-app.git",
        ["git remote -v", "check the new address"],
      ]} />

      <div className="callout warn">
        <p>
          <strong>Do not force push or reclone.</strong> The error happens before anything is sent.
          Your commits are safe on your laptop. Never paste a token into a chat, a ticket or a
          committed file.
        </p>
      </div>

      <h2>Using SSH?</h2>
      <p>
        Over SSH the message says the same thing, followed by{" "}
        <code>fatal: Could not read from remote repository.</code> It means the SSH key you used
        belongs to an account without access. GitHub&apos;s fix: the repo owner adds that account as
        a collaborator, or to a team with write access. Or add your key to the right account. If the
        push gets through but is <code>rejected (fetch first)</code>, read{" "}
        <Link href="/learn/git-push-rejected-fetch-first">Fix &ldquo;git push rejected (fetch first)&rdquo;</Link>.
      </p>
      <p className="note">
        GitHub steps checked on docs.github.com on 24 November 2026. The Git and <code>gh</code> output
        above was reproduced in a test repo with Git 2.43 and gh 2.89.
      </p>
    </Article>
  );
}

import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";

const slug = "git-push-rejected-fetch-first";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="Git refused your push because GitHub has commits you don't have yet. Nothing is broken and nothing is lost. Get their work first, then push again."
    >
      <h2 style={{ marginTop: 0 }}>The error</h2>
      <p>You run <code>git push</code> and see something like this:</p>
      <Cmd lines={[
        " ! [rejected]        main -> main (fetch first)",
        "error: failed to push some refs to 'github.com:you/shop-app.git'",
        "hint: Updates were rejected because the remote contains work that you do not",
        "hint: have locally. This is usually caused by another repository pushing to",
        "hint: the same ref.",
      ]} />
      <p>
        If you already fetched their commits but have not merged them, Git says
        <code> (non-fast-forward)</code> and &ldquo;the tip of your current branch is behind its
        remote counterpart&rdquo; instead. The cause and the fix are the same.
      </p>

      <h2>What it means</h2>
      <p>
        Someone pushed to the same branch after you last pulled. It might be a teammate,
        or you on another computer, or an edit you made in the GitHub website. GitHub
        will not let your push replace commits you have never seen, because that would
        delete their work. This is Git protecting the team, not a bug.
      </p>

      <h2>Check first (these commands change nothing)</h2>
      <Cmd lines={[
        ["git status", "which branch am I on? anything half done?"],
        ["git fetch", "download new commits, leave my files alone"],
        ["git log --oneline main..origin/main", "commits on GitHub that I don't have"],
        ["git log --oneline origin/main..main", "my commits that GitHub doesn't have"],
      ]} />
      <p>
        <code>main..origin/main</code> reads as &ldquo;commits in <code>origin/main</code> that
        <code> main</code> does not have yet&rdquo;. Now you know exactly what you are about to combine.
      </p>

      <h2>The fix</h2>
      <p>Bring their commits into your branch, then push:</p>
      <Cmd lines={[
        ["git pull", "fetch, then merge their work into yours"],
        ["git push", "now it goes through"],
      ]} />
      <p>
        If you prefer a straight line of history with no merge commit, use
        <code> git pull --rebase</code> instead. It puts your commits on top of theirs. Many
        teams set this as the default with <code>git config --global pull.rebase true</code>.
      </p>

      <h3>If the pull stops with a conflict</h3>
      <p>
        You and the other person changed the same lines. Git marks them in the file
        with <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code> and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.
      </p>
      <ol>
        <li>Run <code>git status</code>. It lists the files with conflicts.</li>
        <li>Open each file, keep the right lines, and delete the three marker lines.</li>
        <li>Run <code>git add</code> on each fixed file.</li>
        <li>Finish with <code>git commit</code> (after a merge) or <code>git rebase --continue</code> (after a rebase).</li>
        <li>Run <code>git push</code>.</li>
      </ol>
      <p>
        Want to back out instead? <code>git merge --abort</code> or <code>git rebase --abort</code>{" "}
        puts everything back the way it was before the pull.
      </p>

      <div className="callout warn">
        <p>
          <strong>Do not force push.</strong> <code>git push --force</code> makes the error go
          away by deleting the other person&apos;s commits from GitHub. On a shared branch
          that loses a teammate&apos;s work. Many teams block it with a branch rule.
        </p>
      </div>

      <h2>Make it happen less often</h2>
      <ul>
        <li>Pull before you start work each day, and before you push.</li>
        <li>Work on your own branch, not on <code>main</code>. Then a push only touches your branch, and your work joins <code>main</code> through a pull request.</li>
        <li>Push small and often. The fewer commits you hold back, the smaller any conflict is.</li>
      </ul>

      <h2>Other push errors that look similar</h2>
      <div className="tbl"><table>
        <thead><tr><th>You see</th><th>It means</th></tr></thead>
        <tbody>
          <tr><td><code>Permission denied (publickey)</code></td><td>GitHub doesn&apos;t have your SSH key. Check with <code>ssh -T git@github.com</code>, or use the HTTPS address.</td></tr>
          <tr><td><code>Permission to OWNER/REPO.git denied to USER</code> or <code>403</code></td><td>You are signed in as the wrong account, or that account can&apos;t write to the repo. Check with <code>gh auth status</code>.</td></tr>
          <tr><td><code>remote: Repository not found.</code></td><td>A typo in the URL, or a private repo your account can&apos;t see. Check with <code>git remote -v</code>.</td></tr>
          <tr><td><code>GH013: Repository rule violations</code></td><td>A rule blocks direct pushes to that branch, or a secret was found. Push a branch and open a pull request.</td></tr>
        </tbody>
      </table></div>
      <p>
        New to the undo side of Git? Read <Link href="/learn/git-reset-vs-revert-vs-restore">git reset vs revert vs restore</Link>.
      </p>
    </Article>
  );
}

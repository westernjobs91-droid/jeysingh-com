import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";

const slug = "git-reset-vs-revert-vs-restore";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="Three commands, three jobs. restore fixes files, reset moves your branch back, revert cancels a commit that is already shared. Pick by asking one question: did I push it?"
    >
      <h2 style={{ marginTop: 0 }}>The short answer</h2>
      <div className="tbl"><table>
        <thead><tr><th>Command</th><th>What it changes</th><th>Safe after you push?</th></tr></thead>
        <tbody>
          <tr><td><code>git restore</code></td><td>Files in your folder, or what is staged</td><td>Yes, it never touches commits</td></tr>
          <tr><td><code>git reset</code></td><td>Where your branch points: it removes commits from the branch</td><td>No. Use it only on commits nobody else has</td></tr>
          <tr><td><code>git revert</code></td><td>Adds a new commit that cancels an old one</td><td>Yes. This is the safe way to undo shared work</td></tr>
        </tbody>
      </table></div>

      <h2>git restore: undo changes to files</h2>
      <Cmd lines={[
        ["git restore cart.js", "throw away unstaged edits (gone for good)"],
        ["git restore --staged cart.js", "unstage the file, keep your edits"],
        ["git restore --source=HEAD~2 cart.js", "get the file as it was 2 commits ago"],
      ]} />
      <p>
        You will also see older forms of the same thing: <code>git checkout -- file</code> and
        <code> git reset HEAD file</code>. They still work. <code>restore</code> is the clearer name.
      </p>

      <h2>git reset: move your branch back</h2>
      <p>
        Reset moves your branch to an earlier commit. The mode decides what happens to
        the changes from the commits you step back over:
      </p>
      <Cmd lines={[
        ["git reset --soft HEAD~1", "undo last commit, changes stay staged"],
        ["git reset HEAD~1", "--mixed (the default): changes stay, unstaged"],
        ["git reset --hard HEAD~1", "undo the commit AND delete the changes"],
        ["git reset --hard origin/main", "make my branch match GitHub exactly"],
      ]} />
      <div className="tbl"><table>
        <thead><tr><th>Mode</th><th>Commit</th><th>Staging area</th><th>Your files</th><th>Use when</th></tr></thead>
        <tbody>
          <tr><td><code>--soft</code></td><td>undone</td><td>kept</td><td>kept</td><td>Redo the commit differently</td></tr>
          <tr><td><code>--mixed</code></td><td>undone</td><td>cleared</td><td>kept</td><td>Choose again what to stage</td></tr>
          <tr><td><code>--hard</code></td><td>undone</td><td>cleared</td><td>deleted</td><td>Throw everything away</td></tr>
        </tbody>
      </table></div>
      <div className="callout warn">
        <p>
          Reset rewrites history. If the commits are already on GitHub, your branch and
          the team&apos;s copy no longer agree, and the only way to push is a force push that
          breaks everyone else&apos;s copy. For pushed commits, use revert.
        </p>
      </div>

      <h2>git revert: undo a pushed commit safely</h2>
      <Cmd lines={[
        ["git revert 3f9c2a1", "new commit that reverses 3f9c2a1"],
        ["git revert -m 1 8e7d6c5", "reverting a merge commit: keep parent 1"],
        ["git push", "share the fix like any other commit"],
      ]} />
      <p>
        The bad commit stays in history, and a new commit cancels it. Nobody&apos;s copy breaks,
        which is why teams use revert to roll back a bad change on a live system. On
        GitHub, a merged pull request also has a <strong>Revert</strong> button that opens a
        new pull request doing the same thing.
      </p>

      <h2>git revert vs git reset</h2>
      <p>
        Both undo a commit. The difference is what happens to history.{" "}
        <code>git reset</code> deletes the commit from your branch, as if it never happened.{" "}
        <code>git revert</code> keeps the commit and adds a new one that cancels it.
      </p>
      <div className="tbl"><table>
        <thead><tr><th></th><th><code>git reset</code></th><th><code>git revert</code></th></tr></thead>
        <tbody>
          <tr><td>Old commit</td><td>Removed from the branch</td><td>Stays in history</td></tr>
          <tr><td>New commit</td><td>None</td><td>Yes, the &ldquo;undo&rdquo; commit</td></tr>
          <tr><td>Already pushed?</td><td>Needs a force push. Avoid</td><td>Push normally. Safe</td></tr>
          <tr><td>Best for</td><td>Cleaning up local work</td><td>Rolling back shared work</td></tr>
        </tbody>
      </table></div>
      <p>
        Rule of thumb: not pushed yet, reset is fine. Already pushed, use revert.
      </p>

      <h2>&ldquo;git restore is not a git command&rdquo;</h2>
      <Cmd lines={[
        "git: 'restore' is not a git command. See 'git --help'.",
      ]} />
      <p>
        <code>git restore</code> arrived in Git 2.23 (2019). If you see this, your Git is older.
        Check with <code>git --version</code>, then update Git. Until then, the older commands do
        the same job:
      </p>
      <Cmd lines={[
        ["git checkout -- cart.js", "same as git restore cart.js"],
        ["git reset HEAD cart.js", "same as git restore --staged cart.js"],
      ]} />

      <h2>&ldquo;I think I lost it&rdquo;: git reflog</h2>
      <p>Git keeps a diary of everywhere your HEAD has been. A hard reset is usually not the end:</p>
      <Cmd lines={[
        ["git reset --hard HEAD~3", "oh no"],
        ["git reflog", "find the commit you were on"],
        "b71e004 HEAD@{0}: reset: moving to HEAD~3",
        "3f9c2a1 HEAD@{1}: commit: feat: add cart total",
        ["git reset --hard 3f9c2a1", "back. Or: git branch rescue 3f9c2a1"],
      ]} />
      <p>
        By default, reflog entries last about 90 days, but only about 30 for commits no
        branch points to any more, which is the usual case right after a reset. The
        reflog only lives on your computer. And it cannot bring back edits you never
        committed: those are gone after <code>restore</code> or <code>reset --hard</code>. Commit often.
      </p>

      <h2>Which one do I need?</h2>
      <div className="tbl"><table>
        <thead><tr><th>Situation</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Edited a file and want the original back</td><td><code>git restore file</code></td></tr>
          <tr><td>Staged the wrong file</td><td><code>git restore --staged file</code></td></tr>
          <tr><td>Typo in the last commit message (not pushed)</td><td><code>git commit --amend -m &quot;new message&quot;</code></td></tr>
          <tr><td>Forgot a file in the last commit (not pushed)</td><td><code>git add file</code>, then <code>git commit --amend --no-edit</code></td></tr>
          <tr><td>Undo the last commit, keep the work (not pushed)</td><td><code>git reset --soft HEAD~1</code></td></tr>
          <tr><td>Bad commit already pushed</td><td><code>git revert &lt;sha&gt;</code>, then push</td></tr>
          <tr><td>Committed on main by mistake (not pushed)</td><td><code>git switch -c feature/x</code>, <code>git switch main</code>, <code>git reset --hard origin/main</code></td></tr>
          <tr><td>Lost commits after a reset or a bad rebase</td><td><code>git reflog</code>, then <code>git reset --hard &lt;sha&gt;</code></td></tr>
          <tr><td>Committed a password or key</td><td>Change the password or key first. Removing it from history comes second</td></tr>
        </tbody>
      </table></div>

      <h2>The interview answer</h2>
      <p>
        &ldquo;Reset moves the branch back and rewrites history, so I only use it on commits I
        haven&apos;t shared. Revert adds a new commit that cancels the old one, so it is safe
        for anything already pushed. Restore works on files, not commits.&rdquo;
      </p>
      <p>
        Push failing after you fixed things? See <Link href="/learn/git-push-rejected-fetch-first">git push rejected (fetch first)</Link>.
      </p>
    </Article>
  );
}

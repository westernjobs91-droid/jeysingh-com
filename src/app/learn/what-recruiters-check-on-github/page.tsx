import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";
import Cmd from "@/components/Cmd";

const slug = "what-recruiters-check-on-github";
export const metadata = articleMetadata(slug);

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="I run a technical staffing firm. When a junior candidate lists Git and GitHub, I open their profile. Here is what I look at, in the order I look at it, and how to fix yours in a weekend."
    >
      <h2 style={{ marginTop: 0 }}>Two candidates, one interview</h2>
      <p>
        Two candidates. Similar resumes. Both listed &ldquo;Git and GitHub&rdquo;. Only one got the interview.
      </p>
      <p>
        <strong>Candidate A:</strong> two tutorial projects copied from a course. No READMEs.
        Every commit made the same night, all called &ldquo;update&rdquo;.
      </p>
      <p>
        <strong>Candidate B:</strong> three small projects of their own. Each had a README with a
        screenshot and how to run it. Commits spread over two months. One pull request where
        they fixed their own bug.
      </p>
      <p>
        B was not more experienced. B just made it easy to see what they could do. That is what
        your GitHub is: proof, in about 30 seconds.
      </p>

      <h2>My checklist</h2>
      <ol>
        <li><strong>3 to 6 pinned projects that are actually yours.</strong> Not forks, not a course&apos;s finished code. Small is fine. Yours is what matters.</li>
        <li><strong>A README on each one</strong> that says what it does and how to run it. A screenshot helps a lot.</li>
        <li><strong>Commits spread over weeks,</strong> not one big upload the night before you applied.</li>
        <li><strong>Clear commit messages.</strong> &ldquo;add cart total&rdquo; tells me something. &ldquo;fix&rdquo; and &ldquo;stuff&rdquo; do not.</li>
        <li><strong>Pull requests, even on solo projects.</strong> A branch, a pull request and a merge shows you know how teams work.</li>
        <li><strong>No passwords or <code>.env</code> files in the history.</strong> This one can end a review on its own.</li>
      </ol>

      <h2>Fix it in a weekend</h2>
      <h3>Saturday: clean up what you have</h3>
      <ul>
        <li>Pick your best 3 to 6 projects and pin them on your profile.</li>
        <li>Write a README for each: one line on what it does, a screenshot, and the exact commands to run it.</li>
        <li>Make old tutorial copies private, or label them clearly as course work.</li>
        <li>Check for secrets. If you ever committed a password or API key, change it at the source first. Deleting the file later does not remove it from history.</li>
      </ul>
      <h3>Sunday: show how you work</h3>
      <p>Make your next change the way a team would, even if you are the only one on the project:</p>
      <Cmd lines={[
        ["git switch -c fix/readme-typo", "a branch for one change"],
        ["git commit -am \"docs: fix setup steps in README\"", "a message that says what changed"],
        ["git push -u origin fix/readme-typo", "share the branch"],
        ["gh pr create --fill", "open a pull request, then merge it"],
      ]} />
      <p>
        Then keep a habit: commit as you go, a little at a time. Weeks of small, clear commits
        look very different from one upload.
      </p>

      <h2>What I don&apos;t care about</h2>
      <ul>
        <li><strong>The green squares on their own.</strong> Activity helps, but empty commits made to fill the grid are easy to spot.</li>
        <li><strong>Stars and followers.</strong> Nobody expects a junior candidate to have them.</li>
        <li><strong>Fancy profile decorations.</strong> A short bio, your location and how to reach you are enough.</li>
      </ul>

      <h2>Your resume says &ldquo;Git&rdquo;. Your GitHub proves it or it doesn&apos;t.</h2>
      <p>
        If you are not sure how branches, pull requests and clean history work yet, start
        with <Link href="/learn/git-reset-vs-revert-vs-restore">undoing mistakes safely</Link>, then
        work through a real team workflow. Preparing for a certification too? Here is
        a <Link href="/learn/gh-900-study-plan">GH-900 study plan</Link>.
      </p>
    </Article>
  );
}

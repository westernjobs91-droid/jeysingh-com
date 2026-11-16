import Link from "next/link";
import Article, { articleMetadata } from "@/components/Article";

const slug = "gh-900-study-plan";
export const metadata = articleMetadata(slug);

const domains = [
  ["Understand Git and GitHub basics", "25 to 30%", "Version control, Git vs GitHub, repos, commits and branches, account types, GitHub Flow, Markdown, GitHub Desktop and Mobile"],
  ["Work with GitHub repositories", "10 to 15%", "Key files (README, LICENSE, CONTRIBUTING, CODEOWNERS, SECURITY), templates, managing files, Insights"],
  ["Collaborate using GitHub", "10 to 15%", "Issues, pull requests, Discussions, templates, notifications, gists, wikis, GitHub Pages"],
  ["Apply modern development practices", "10 to 15%", "GitHub Actions, Copilot (modes, models and plans), Codespaces, dev containers, github.dev"],
  ["Manage projects with GitHub", "5 to 10%", "Projects and its layouts, fields, labels, milestones, built-in workflows, saved replies"],
  ["Understand privacy, security, and administration", "10 to 15%", "2FA and passkeys, repository and organization roles, visibility and branch protection, teams, Enterprise Managed Users, organization-wide Copilot policy"],
  ["Explore the GitHub community", "5 to 10%", "Open source and GitHub Sponsors, following and starring, Marketplace, InnerSource, forks, templates and discoverable repos"],
];

const weeks = [
  ["Week 1: Git on your own computer", "Install Git, make commits, branch, merge and fix a conflict, undo mistakes. This is the base of the biggest domain, and every later week assumes it. Do it in a terminal, not only by reading."],
  ["Week 2: GitHub repos and teamwork", "Create a repo, push to it, open issues, open and review a pull request, write Markdown, try Discussions, gists and Pages. Use a second account or a friend so you see the review from both sides."],
  ["Week 3: Actions, Copilot, Codespaces and Projects", "Run a small GitHub Actions workflow, open a codespace, compare it with github.dev, and set up a project board with fields and a workflow. Learn which Copilot plan includes what."],
  ["Week 4: Security, admin, community, then practice", "2FA, roles and permissions, branch protection, organizations, teams and enterprises, then open source, Sponsors, Marketplace and InnerSource. Then take a full practice exam, review every wrong answer, and reread those topics."],
];

export default function Page() {
  return (
    <Article
      slug={slug}
      lede="GitHub Foundations (GH-900) is a beginner exam about Git, GitHub and how teams use it. Here are the seven domains Microsoft tests, the exam facts that matter, and a four-week plan."
    >
      <h2 style={{ marginTop: 0 }}>Exam facts</h2>
      <ul>
        <li><strong>Exam:</strong> GH-900, GitHub Foundations. Booked on Microsoft Learn and delivered by Pearson VUE.</li>
        <li><strong>Time:</strong> 100 minutes. It may include interactive items, not only multiple choice.</li>
        <li><strong>Pass mark:</strong> 700 on a scale of 1 to 1,000. The score is scaled, so 700 does not mean 70% correct.</li>
        <li><strong>Before you book:</strong> try the free practice assessment and the exam sandbox, linked from the exam page.</li>
        <li><strong>Tip:</strong> book with a personal Microsoft account. A work account can lose your records when you change jobs.</li>
      </ul>
      <p className="note">
        Checked against the <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-900">official GH-900 study guide</a>{" "}
        (skills measured as of January 2026) on 16 November 2026. Microsoft can change the outline, so check it again before you book.
      </p>

      <h2>The seven domains and their weights</h2>
      <div className="tbl"><table>
        <thead><tr><th>Domain</th><th>Weight</th><th>What it covers</th></tr></thead>
        <tbody>
          {domains.map(([d, w, c], i) => (
            <tr key={d}><td>{i + 1}. {d}</td><td style={{ whiteSpace: "nowrap" }}>{w}</td><td>{c}</td></tr>
          ))}
        </tbody>
      </table></div>
      <p>
        Domain 1 alone is up to 30% of the exam, and it is mostly Git itself. If your Git
        basics are shaky, start there. The other six domains are about GitHub the
        platform: what each feature is for, and when you would pick it.
      </p>

      <h2>A four-week plan</h2>
      <p>About an hour a day. If you already use Git at work, squeeze weeks 1 and 2 into one.</p>
      {weeks.map(([h, t]) => (
        <div key={h}>
          <h3>{h}</h3>
          <p>{t}</p>
        </div>
      ))}

      <h2>How to study so it sticks</h2>
      <ul>
        <li><strong>Type every command.</strong> Reading Git does not stick. Doing it does.</li>
        <li><strong>Click through every GitHub feature at least once.</strong> Many questions ask where a setting lives or what a screen shows.</li>
        <li><strong>Learn the &ldquo;which one?&rdquo; pairs:</strong> fork vs template, issue vs Discussion, codespace vs github.dev, organization vs enterprise, labels vs milestones vs project fields.</li>
        <li><strong>Use original practice questions only.</strong> &ldquo;Dumps&rdquo; of real exam questions break Microsoft&apos;s exam rules and can get your certification revoked.</li>
        <li><strong>Re-read the outline the week before.</strong> For each line, check that you can explain it without looking.</li>
      </ul>

      <h2>Is GH-900 worth it?</h2>
      <p>
        On its own it will not get you a developer job. But it proves you know the tools
        every software team uses, it is a good first certification, and the skills are
        ones you will use daily. Pair it with a GitHub profile that shows real work. Here
        is <Link href="/learn/what-recruiters-check-on-github">what recruiters check on your GitHub</Link>.
      </p>
    </Article>
  );
}

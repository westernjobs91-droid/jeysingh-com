// Free articles under /learn. Add new ones here so the Learn page,
// the sitemap and the "related" links pick them up.
export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  topic: "Git" | "GH-900" | "AZ-104" | "Careers";
  book: "git" | "az104" | null;
  published: string; // YYYY-MM-DD
  updated: string;
  minutes: number;
};

export const articles: ArticleMeta[] = [
  {
    slug: "git-push-rejected-fetch-first",
    title: "Fix \"! [rejected] main -> main (fetch first)\"",
    description:
      "git push rejected? GitHub has commits you don't. See what changed, run git pull or git pull --rebase, then push. Keeps your work. Same fix for non-fast-forward.",
    topic: "Git", book: "git", published: "2026-11-16", updated: "2026-11-27", minutes: 5,
  },
  {
    slug: "git-reset-vs-revert-vs-restore",
    title: "git revert vs reset vs restore: which one to use",
    description:
      "git restore undoes file changes, git reset moves local commits back, git revert safely undoes a pushed commit. Real commands, one table, and the reflog rescue.",
    topic: "Git", book: "git", published: "2026-11-16", updated: "2026-11-27", minutes: 7,
  },
  {
    slug: "gh-900-study-plan",
    title: "GH-900 GitHub Foundations: exam domains and a 4-week study plan (2026)",
    description:
      "The seven GH-900 domains and their weights from Microsoft's January 2026 outline, exam facts, and a week-by-week plan for beginners.",
    topic: "GH-900", book: "git", published: "2026-11-16", updated: "2026-11-16", minutes: 6,
  },
  {
    slug: "free-az-104-labs",
    title: "12 free AZ-104 hands-on labs (with scripts and costs)",
    description:
      "Free AZ-104 labs written as workplace tickets, each with deploy, verify and cleanup scripts, tested live in Azure in November 2026, with rough costs.",
    topic: "AZ-104", book: "az104", published: "2026-11-16", updated: "2026-11-16", minutes: 5,
  },
  {
    slug: "what-recruiters-check-on-github",
    title: "What recruiters check on your GitHub profile (from a recruiter)",
    description:
      "A technical recruiter's checklist for junior developer and cloud GitHub profiles: pinned projects, READMEs, commit history, pull requests and secrets.",
    topic: "Careers", book: "git", published: "2026-11-16", updated: "2026-11-16", minutes: 5,
  },
  {
    slug: "git-permission-denied-publickey",
    title: "Fix \"git@github.com: Permission denied (publickey)\"",
    description:
      "git clone or git push fails with Permission denied (publickey)? Four safe checks find the cause, then add your SSH key to GitHub or switch to HTTPS.",
    topic: "Git", book: "git", published: "2026-11-17", updated: "2026-11-27", minutes: 6,
  },
  {
    slug: "git-permission-denied-403",
    title: "Fix \"Permission to OWNER/REPO.git denied\" (403) on GitHub",
    description:
      "Why git push says Permission to OWNER/REPO.git denied to USER with a 403, how to check which account Git used, and how to switch to the right one.",
    topic: "Git", book: "git", published: "2026-11-24", updated: "2026-11-24", minutes: 6,
  },
];

export const findArticle = (slug: string) => articles.find(a => a.slug === slug)!;

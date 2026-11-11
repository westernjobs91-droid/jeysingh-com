import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud migration notes, cheat sheets and quizzes",
  description: "Six modules of plain-English cloud migration notes with a cheat sheet and quiz for each: service models, the migration strategies, Azure App Service and managed databases.",
  alternates: { canonical: "/learn/cloud-migration" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

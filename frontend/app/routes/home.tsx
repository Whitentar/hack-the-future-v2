import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { ApiProvider, useApi } from "~/contexts/api-context";
import ProblemBadge from "~/components/problem/problem-badge";
import ProblemCard from "~/components/problem/problem-card";
import QuestSection from "~/components/layout/quest-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Merge Conflict v2" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ApiProvider>
      <header className="py-6 text-center flex flex-col items-center gap-6 mt-24">
        <h1 className="text-center text-5xl font-bold bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent h-14">
          Merge Conflict v2
        </h1>
        <p className="px-3 py-1 bg-primary rounded-full w-fit">Score: 14</p>
      </header>
      <main className="px-6">
        <QuestSection />
      </main>
    </ApiProvider>
  );
}

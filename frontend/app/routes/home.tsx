import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { ApiProvider } from "~/contexts/api-context";
import ProblemBadge from "~/components/problem/problem-badge";
import ProblemCard from "~/components/problem/problem-card";

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
        <section className="mt-24 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold mb-4">Quest</h2>
            <Button>Start Quest</Button>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            <ProblemCard problem={{
              name: "Water Quality Analysis",
              description: "Analyze water quality metrics from sensor data",
              solved: false,
              badgeUrl: "POLLUTION_CONTROL_BADGE",
              mission: [] 
            }} />
            <ProblemCard problem={{
              name: "Water Quality Analysis",
              description: "Analyze water quality metrics from sensor data",
              solved: false,
              badgeUrl: "POLLUTION_CONTROL_BADGE",
              mission: [] 
            }} />
            <ProblemCard problem={{
              name: "Water Quality Analysis",
              description: "Analyze water quality metrics from sensor data",
              solved: false,
              badgeUrl: "POLLUTION_CONTROL_BADGE",
              mission: [] 
            }} />
          </ul>
        </section>
      </main>
    </ApiProvider>
  );
}

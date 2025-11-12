import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Merge Conflict v2" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <header className="py-6 text-center flex flex-col items-center gap-6 mt-24">
        <h1 className="text-5xl font-semibold">Merge Conflict v2</h1>
        <p className="px-3 py-1 bg-primary rounded-full w-fit">Score: 14</p>
      </header>
      <main className="px-6">
        <section className="mt-24">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4">Quest</h2>
            <Button>Start Quest</Button>
          </div>
        </section>
      </main>
    </>
  );
}

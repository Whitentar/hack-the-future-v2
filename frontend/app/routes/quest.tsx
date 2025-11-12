import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quests | Merge Conflict v2" },
  ];
}

export default function Quest() {
  return (
    <main className="px-6">
      <header className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Quests</h2>
      </header>
    </main>
  );
}

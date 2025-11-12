import type {Route} from "./+types/home";
import {ApiProvider, useApi} from "~/contexts/api-context";
import QuestSection from "~/components/layout/quest-section";
import {Fish} from "~/components/ui/Fish";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Dashboard | Merge Conflict v2"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
  const { team } = useApi();

  return (
      <div className="relative w-full h-full">
          <div className="absolute inset-0 -z-10 overflow-hidden">
              <Fish size={40} top="10%" speed={12} direction="left"/>
              <Fish size={80} top="10%" speed={30} direction="left"/>
              <Fish size={50} top="40%" speed={18} direction="left"/>
              <Fish size={30} top="70%" speed={10} direction="left"/>
          </div>

          <header className="py-6 text-center flex flex-col items-center gap-6 mt-24 relative z-10">
              <h1 className="text-center text-5xl font-bold bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent h-14">
                  Merge Conflict v2
              </h1>
              <p className="-mt-2 px-3 py-1 bg-primary rounded-full w-fit">Score: {team?.score}</p>
          </header>

          <main className="px-6 relative z-10">
              <QuestSection/>
          </main>
      </div>
  );
}
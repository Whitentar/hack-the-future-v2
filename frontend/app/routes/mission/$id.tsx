// ...existing code...
import { Check } from "lucide-react";
import { useParams } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Fish } from "~/components/ui/Fish";
import { useApi } from "~/contexts/api-context";
import { useEffect, useMemo, useState } from "react";

export default function MissionDetail() {
    const { id } = useParams<{ id?: string }>();
    const { activeQuest, activeQuestStatus, submitMission } = useApi();

    const [answer, setAnswer] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [localSolved, setLocalSolved] = useState<boolean | null>(null);

    useEffect(() => {
        setFeedback(null);
        setAnswer("");
        setLocalSolved(null);
    }, [id]);

    if (activeQuestStatus === "pending") {
        return <p>Loading...</p>;
    }

    const mission = activeQuest?.problems
        .flatMap(problem => problem.mission)
        .find(mission => mission.id === id);

    const MAX_DIFFICULTY = 25;

    const remainingAttemptsNum = (() => {
        const n = parseInt(mission?.remainingAttempts ?? "0", 10);
        return Number.isNaN(n) ? 0 : n;
    })();

    if (!mission) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold">Mission Not Found</h1>
                <p className="mt-2 text-foreground/70">This mission does not exist in the current quest.</p>
            </div>
        );
    }

    const solved = localSolved ?? mission.solved;

    async function handleSubmit(e?: React.FormEvent) {
        e?.preventDefault();
        if (!answer.trim()) {
            setFeedback("Please enter an answer.");
            return;
        }
        if (submitting) return;
        setSubmitting(true);
        setFeedback(null);

        try {
            let res;
            res = await submitMission(mission!.id, answer);

            if (res?.effective) {
                setFeedback(res.message ?? "Submission received.");
                if (res.solved) {
                    setLocalSolved(true);
                }
            } else if (!res?.effective) {
                setFeedback( "Incorrect answer. Try again.");
            }
        } catch (err) {
            setFeedback("Network error. Try again.");
        } finally {
            setSubmitting(false);
        }
    }

    const difficultyPct = Math.min(100, (mission.difficulty / MAX_DIFFICULTY) * 100);
    const difficultyColor =
        mission.difficulty < 8 ? "bg-green-400/80" :
        mission.difficulty < 16 ? "bg-yellow-400/80" :
        "bg-red-400/80";

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
                  {mission.name}
              </h1>
              {solved && (
                <Badge className="-mt-2 px-3 py-1 bg-green-500/50 rounded-full w-fit">
                    <Check />
                    Solved
                </Badge>
              )}
          </header>

          <main className="px-6 relative z-10 max-w-4xl mx-auto">
              <section className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="md:col-span-2 p-6 bg-muted/30 border border-foreground/10 rounded-lg">
                      <h2 className="text-xl font-semibold">Objective</h2>
                      <p className="mt-2 text-foreground/70">{mission.objective}</p>

                      {mission.parameters ? (
                          <>
                              <h3 className="mt-4 font-medium">Parameters</h3>
                              <p className="text-foreground/70 mt-1 text-sm">{mission.parameters}</p>
                          </>
                      ) : null}

                      {mission.effect ? (
                          <>
                              <h3 className="mt-4 font-medium">Effect</h3>
                              <p className="text-foreground/70 mt-1 text-sm">{mission.effect}</p>
                          </>
                      ) : null}
                  </div>

                  <aside className="p-6 bg-muted/30 border border-foreground/10 rounded-lg flex flex-col gap-4">
                      <div>
                          <div className="text-xs text-foreground/60">Difficulty</div>
                          <div className="mt-2">
                              <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
                                  <div
                                      className={`${difficultyColor} h-3 rounded-full`}
                                      style={{ width: `${difficultyPct}%` }}
                                      aria-hidden
                                  />
                              </div>
                              <div className="text-xs text-foreground/70 mt-2">{mission.difficulty} / {MAX_DIFFICULTY}</div>
                          </div>
                      </div>

                      <div>
                          <div className="text-xs text-foreground/60">Attempts left</div>
                          <div className="text-sm font-medium mt-1">{remainingAttemptsNum}</div>
                      </div>

                      <div>
                          <div className="text-xs text-foreground/60">Status</div>
                          <div className="text-sm font-medium mt-1">{solved ? "Solved" : "Unsolved"}</div>
                      </div>
                  </aside>
              </section>

              <section className="mt-6 p-6 bg-muted/20 border border-foreground/10 rounded-lg">
                  <h3 className="font-semibold">Submit your answer</h3>
                  {solved ? (
                      <p className="mt-2 text-foreground/70">This mission is already solved. Well done!</p>
                  ) : (
                      <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
                          <input
                              aria-label="Mission answer"
                              className="flex-1 rounded-md border border-foreground/10 px-3 py-2 bg-background text-foreground"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                              placeholder="Type your answer here"
                              disabled={submitting || remainingAttemptsNum <= 0}
                          />
                          <button
                              type="submit"
                              disabled={submitting || remainingAttemptsNum <= 0}
                              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-60"
                          >
                              {submitting ? "Submitting…" : "Submit"}
                          </button>
                      </form>
                  )}

                  {feedback ? <div className="mt-3 text-sm text-foreground/70">{feedback}</div> : null}
              </section>
          </main>
      </div>
    );
}
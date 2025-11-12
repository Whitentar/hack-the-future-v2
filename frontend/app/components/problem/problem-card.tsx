import type { Problem } from "~/types/problem.type";
import ProblemBadge from "./problem-badge";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface ProblemCardProps {
    problem: Problem;
}

function ProblemCard({ problem }: ProblemCardProps) {
    const MAX_DIFFICULTY = 25;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <li className="p-4 bg-muted/30 hover:bg-accent/40 transition-colors rounded-lg border border-foreground/10
                    cursor-pointer">
                    <div className="flex justify-between items-start gap-2 pb-2">
                        <h3 className="font-semibold">{problem.name}</h3>
                        <ProblemBadge url={problem.badgeUrl} />
                    </div>
                    <p className="text-foreground/70 pb-9">{problem.description}</p>
                    <ul className="flex flex-wrap gap-2">
                        {problem.mission?.map((mission) => (
                            <li className="w-full">
                                <Badge 
                                    variant='outline' 
                                    className={`py-2 px-3 w-full ${mission.solved && "bg-green-500/10"}`}
                                >
                                    {mission.solved ? <Check /> : null}
                                    {mission.name}
                                </Badge>
                            </li>
                        ))}
                    </ul>
                </li>
            </DialogTrigger>
            <DialogContent className="bg-muted/50 border border-foreground/10 backdrop-blur-md">
                <DialogHeader>
                    <DialogTitle className="flex gap-2">
                        {problem.name}
                        <ProblemBadge url={problem.badgeUrl} />
                    </DialogTitle>
                    <DialogDescription className="text-base">
                        {problem.description}
                    </DialogDescription>
                    <div>
                        {problem.solved ? (
                            <p>This problem earned you {problem.score} points.</p>
                        ) : (
                            <p>Upon completion, you will earn {problem.score} points.</p>
                        )}
                    </div>
                    <div>
                        <h4 className="font-semibold mt-4 mb-2">Missions</h4>
                        <ul className="flex flex-col gap-3">
                            {problem.mission?.map((mission) => (
                                <a href={`/mission/${mission.id}`} key={mission.id}>
                                    <li className="p-3 bg-muted/20 border border-foreground/10 rounded-md hover:bg-primary/10 transition-colors cursor-pointer">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h5 className="font-semibold">{mission.name}</h5>
                                                    {mission.solved ? (
                                                        <Badge className="ml-2 bg-green-500/30" variant="secondary">Solved</Badge>
                                                    ) : null}
                                                </div>
                                                <p className="text-sm text-foreground/70 mt-1">{mission.objective}</p>
                                                {/* {mission.parameters ? (
                                                    <p className="text-xs text-foreground/60 mt-1"><span className="font-medium">Parameters:</span> {mission.parameters}</p>
                                                ) : null}
                                                {mission.effect ? (
                                                    <p className="text-xs text-foreground/60 mt-1"><span className="font-medium">Effect:</span> {mission.effect}</p>
                                                ) : null} */}
                                            </div>
                                            <div className="text-right shrink-0">
                                                <div className="text-xs text-foreground/60">Difficulty</div>
                                                <div className="mt-1">
                                                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-2 rounded-full
                                                                ${mission.difficulty < 8 ? "bg-green-400/80" :
                                                                mission.difficulty < 16 ? "bg-yellow-400/80" :
                                                                "bg-red-400/80"}
                                                                `}
                                                            style={{ width: `${Math.min(100, (mission.difficulty / MAX_DIFFICULTY) * 100)}%` }}
                                                        />
                                                    </div>
                                                    <div className="text-xs text-foreground/70 mt-2">{mission.difficulty} / {MAX_DIFFICULTY}</div>
                                                    <div className="text-xs text-foreground/70 mt-1">Attempts left: <span className="font-medium">{mission.remainingAttempts}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ProblemCard;
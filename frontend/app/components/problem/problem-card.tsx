import type { Problem } from "~/types/problem.type";
import ProblemBadge from "./problem-badge";
import { Badge } from "../ui/badge";
import { Check } from "lucide-react";

interface ProblemCardProps {
    problem: Problem;
}

function ProblemCard({ problem }: ProblemCardProps) {
    return (
        <li className="p-4 bg-muted/30 hover:bg-accent/40 transition-colors rounded-lg border border-amber-100/10">
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
    )
}

export default ProblemCard;
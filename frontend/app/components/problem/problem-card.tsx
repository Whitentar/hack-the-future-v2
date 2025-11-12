import type { Problem } from "~/types/problem.type";
import ProblemBadge from "./problem-badge";
import { Badge } from "../ui/badge";

interface ProblemCardProps {
    problem: Problem;
}

function ProblemCard({ problem }: ProblemCardProps) {
    return (
        <li className="p-4 bg-muted/30 hover:bg-accent/40 transition-colors rounded-lg border border-amber-100/10">
            <div className="flex justify-between items-center gap-2 pb-2">
                <h3 className="font-semibold">{problem.name}</h3>
                <ProblemBadge url={problem.badgeUrl} />
            </div>
            <p className="text-foreground/70 pb-3">{problem.description}</p>
            <ul>
                <li>
                    <Badge variant='outline'>
                        Toxin Neutralizer
                    </Badge>
                </li>
            </ul>
        </li>
    )
}

export default ProblemCard;
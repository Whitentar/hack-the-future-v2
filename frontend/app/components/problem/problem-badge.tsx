import { CircleQuestionMark, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";

function ProblemBadge({url}: {url: string}) {
    let color;
    let Icon = () => <CircleQuestionMark />;
    let title = "";

    switch(url) {
        case "POLLUTION_CONTROL_BADGE":
            color = "bg-green-500/50";
            Icon = () => <Trash2 />;
            title = "Pollution Control";
            break;
    }

    return (
        <Badge className={`${color}`}>
            <Icon />
            {title}
        </Badge>
    )
}

export default ProblemBadge;
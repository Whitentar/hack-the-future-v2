import type { Problem } from "./problem.type";

export interface Quest {
    id: string;
    teamId: string;
    closed: boolean;
    problems: Problem[];
}
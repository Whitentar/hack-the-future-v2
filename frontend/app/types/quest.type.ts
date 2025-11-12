import type { Problem } from "./problem.type";

export interface Quest {
    id: string;
    closed: boolean;
    problems: Problem[];
}
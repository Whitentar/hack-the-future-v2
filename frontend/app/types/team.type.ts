import type { Problem } from "./problem.type";

export interface Team {
    name: string;
    score: number;
    problems: Problem[];
}
export interface Mission {
    id: string;
    name: string;
    objective: string;
    parameters: string;
    difficulty: number;
    remainingAttempts: string;
    solved: boolean;
    effect: string;
}
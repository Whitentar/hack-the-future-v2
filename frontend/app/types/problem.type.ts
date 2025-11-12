import type { Mission } from "./mission.type";

export interface Problem {
    name: string;
    description: string;
    solved: boolean;
    badgeUrl: string;
    mission: Mission[]; 
}
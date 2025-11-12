import { createContext, useContext } from "react";
import type { Team } from "~/types/team.type";
import { useMutation, useQuery, type QueryStatus } from "@tanstack/react-query";
import type { Quest } from "~/types/quest.type";

interface ApiContextValue {
    team: Team | undefined;
    teamStatus: QueryStatus;
    activeQuest: Quest | undefined;
    activeQuestStatus: QueryStatus;
    refetchAll: () => void;
    submitMission: (missionId: string, answer: string) => Promise<any>;
}

const ApiContext = createContext<ApiContextValue | undefined>(undefined);

interface ApiProviderProps {
    children: React.ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
    const {
        data: team,
        status: teamStatus,
        refetch
    } = useQuery({
        queryKey: ["team"],
        queryFn: async (): Promise<Team> => {
            const response = await fetch("http://localhost:8080/api/team");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Fetched team data:", data);
            return data;
        },
    });

    const {
        data: activeQuest,
        status: activeQuestStatus,
        refetch: refetchActiveQuest
    } = useQuery({
        queryKey: ["activeQuest"],
        queryFn: async (): Promise<Quest> => {
            const response = await fetch("http://localhost:8080/api/quest");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Fetched active quest data:", data);
            return data;
        }
    });

    const submitMutation = useMutation({
        mutationFn: async (variables: { missionId: string; answer: string }) => {
            const response = await fetch(`http://localhost:8080/api/missions/${variables.missionId}/solution?result=${encodeURIComponent(variables.answer)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    });

    const submitMission = async (missionId: string, answer: string) => {
        return submitMutation.mutateAsync({ missionId, answer });
    };

    const value: ApiContextValue = {
        team,
        teamStatus,
        activeQuest,
        activeQuestStatus,
        refetchAll: () => {
            refetch();
            refetchActiveQuest();
        },
        submitMission,
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi() {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error("useApi must be used within an ApiProvider");
    }
    return context;
}
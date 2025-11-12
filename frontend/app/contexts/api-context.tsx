import { createContext } from "react";
import type { Team } from "~/types/team.type";
import { useQuery, type QueryStatus } from "@tanstack/react-query";

interface ApiContextValue {
    team: Team | undefined;
    status: QueryStatus;
    refetch: () => void;
}

const ApiContext = createContext<ApiContextValue | undefined>(undefined);

interface ApiProviderProps {
    children: React.ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
    const {
        data: team,
        status,
        refetch
    } = useQuery({
        queryKey: ["team"],
        queryFn: async (): Promise<Team> => {
            const response = await fetch("/api/team");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
    });

    const value: ApiContextValue = {
        team,
        status,
        refetch
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}
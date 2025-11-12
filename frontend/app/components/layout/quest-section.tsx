import { useApi } from "~/contexts/api-context";
import { Button } from "../ui/button";
import ProblemCard from "../problem/problem-card";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/ui/dialog";

function QuestSection() {
    const { activeQuest, activeQuestStatus } = useApi();

    activeQuestStatus === "pending" && <p>Loading...</p>;

    return (
        <section className="mt-24 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold mb-4">Active Quest</h2>
                {activeQuest?.problems ? (
                    <Button variant='outline'>End quest</Button>
                ) : (
                    <Button>Start Quest</Button>
                )}
            </div>
            <ul className="grid grid-cols-3 gap-3">
                {activeQuest?.problems.map((problem) => (
                    <ProblemCard key={problem.name} problem={problem} />
                ))}
            </ul>
        </section>
    )
}

export default QuestSection;
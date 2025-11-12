package be.kdg.be.backend.api;

import be.kdg.be.backend.application.QuestService;
import be.kdg.be.backend.infrastructure.client.dto.MissionResultDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestResultDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api")
public class QuestRestController {

    private final QuestService questService;
    private final UUID teamId;

    public QuestRestController(QuestService questService, @Value("${team-id}") String teamId) {
        this.questService = questService;
        this.teamId = UUID.fromString(teamId);
    }

    @PostMapping("/quest")
    public QuestDto createQuest() {
        return questService.createQuestByTeamId(teamId);
    }

    @GetMapping("/quest")
    public QuestDto getQuest() {
        return questService.getQuestByTeamId(teamId);
    }

    @DeleteMapping("/quest")
    public QuestResultDto deleteQuest() {
        return questService.deleteQuestByTeamId(teamId);
    }

    @PostMapping("/mission/{missionId}/solution")
    public MissionResultDto submitMission(@PathVariable UUID missionId) {
        return questService.submitMisionByMissionId(missionId);
    }
}

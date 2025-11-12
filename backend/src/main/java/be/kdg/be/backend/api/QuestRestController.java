package be.kdg.be.backend.api;

import be.kdg.be.backend.application.QuestService;
import be.kdg.be.backend.infrastructure.client.dto.MissionResultDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestResultDto;
import be.kdg.be.backend.infrastructure.client.dto.TeamDto;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api")
public class QuestRestController {

    private final QuestService questService;

    public QuestRestController(QuestService questService) {
        this.questService = questService;
    }

    @PostMapping("/quest")
    public QuestDto createQuest() {
        return questService.createQuest();
    }

    @GetMapping("/quest")
    public QuestDto getQuest() {
        return questService.getQuest();
    }

    @DeleteMapping("/quest")
    public QuestResultDto deleteQuest() {
        return questService.deleteQuest();
    }

    @PostMapping("/mission/{missionId}/solution")
    public MissionResultDto submitMission(@PathVariable UUID missionId) {
        return questService.submitMisionByMissionId(missionId);
    }

    @GetMapping("/team")
    public TeamDto getTeam() {
        return questService.getTeam();
    }
}
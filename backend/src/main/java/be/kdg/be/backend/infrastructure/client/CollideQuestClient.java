package be.kdg.be.backend.infrastructure.client;

import be.kdg.be.backend.infrastructure.client.dto.DashboardDto;
import be.kdg.be.backend.infrastructure.client.dto.MissionResultDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestResultDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.UUID;

@FeignClient(
        name = "collide-backend",
        url = "${collide-backend.url}"
)
public interface CollideQuestClient {

    // Start new quest
    @PostMapping("/teams/{teamId}/quest")
    QuestDto createQuestByTeamId(@PathVariable UUID teamId);

    // Get all quests for a team
    @GetMapping("/teams/{teamId}/quest")
    QuestDto getQuestByTeamId(@PathVariable UUID teamId);

    @DeleteMapping("/teams/{teamId}/quest")
    QuestResultDto deleteQuestByTeamId(@PathVariable UUID teamId);

    @PostMapping("/mission/{missionId}/solution")
    MissionResultDto submitMissionByMissionId(@PathVariable UUID missionId);

    @GetMapping("/dashboard")
    DashboardDto getDashboard();
}
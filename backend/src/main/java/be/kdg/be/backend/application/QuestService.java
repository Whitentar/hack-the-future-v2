package be.kdg.be.backend.application;

import be.kdg.be.backend.infrastructure.client.CollideQuestClient;
import be.kdg.be.backend.infrastructure.client.dto.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class QuestService {

    private final CollideQuestClient collideQuestClient;
    private final UUID teamId;
    private final String teamName;
    private static final Logger log = LoggerFactory.getLogger(QuestService.class);

    public QuestService(CollideQuestClient collideQuestClient, @Value("${team-id}") String teamId, @Value("${team-name}") String teamName) {
        this.collideQuestClient = collideQuestClient;
        this.teamId = UUID.fromString(teamId);
        this.teamName = teamName;
    }

    public QuestDto createQuest() {
        log.debug("Creating quest for team {}", teamId);
        QuestDto quest = collideQuestClient.createQuestByTeamId(teamId);
        log.info("Created quest {} for team {}", quest.id(), teamId);
        return quest;
    }

    public QuestDto getQuest() {
        log.debug("Fetching quest for team {}", teamId);
        QuestDto quest = collideQuestClient.getQuestByTeamId(teamId);
        log.info("Fetched quest {} for team {}", quest.id(), teamId);
        return quest;
    }

    public QuestResultDto deleteQuest() {
        log.debug("Deleting quest for team {}", teamId);
        QuestResultDto result = collideQuestClient.deleteQuestByTeamId(teamId);
        log.info("Deleted quest for team {}", teamId);
        return result;
    }

    public MissionResultDto submitMisionByMissionId(UUID missionId, String result) {
        log.debug("Submitting mission solution for mission {}", missionId);
        MissionResultDto resultDto = collideQuestClient.submitMissionByMissionId(missionId, result);
        log.info("Submitted mission solution for mission {}", missionId);
        return resultDto;
    }

    public TeamDto getTeam() {
        log.debug("Fetching team info for team {}", teamId);
        DashboardDto dashboard = collideQuestClient.getDashboard();
        TeamDto team = dashboard.teams().stream()
                .filter(t -> t.name().equals(teamName)).findFirst().orElse(null);
        log.info("Fetched team info for team {}", teamId);
        return team;
    }
}

package be.kdg.be.backend.application;

import be.kdg.be.backend.infrastructure.client.CollideQuestClient;
import be.kdg.be.backend.infrastructure.client.dto.MissionResultDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestDto;
import be.kdg.be.backend.infrastructure.client.dto.QuestResultDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class QuestService {

    private final CollideQuestClient collideQuestClient;
    private static final Logger log = LoggerFactory.getLogger(QuestService.class);

    public QuestService(CollideQuestClient collideQuestClient) {
        this.collideQuestClient = collideQuestClient;
    }

    public QuestDto createQuestByTeamId(UUID teamId) {
        log.debug("Creating quest for team {}", teamId);
        QuestDto quest = collideQuestClient.createQuestByTeamId(teamId);
        log.info("Created quest {} for team {}", quest.id(), teamId);
        return quest;
    }

    public QuestDto getQuestByTeamId(UUID teamId) {
        log.debug("Fetching quest for team {}", teamId);
        QuestDto quest = collideQuestClient.getQuestByTeamId(teamId);
        log.info("Fetched quest {} for team {}", quest.id(), teamId);
        return quest;
    }

    public QuestResultDto deleteQuestByTeamId(UUID teamId) {
        log.debug("Deleting quest for team {}", teamId);
        QuestResultDto result = collideQuestClient.deleteQuestByTeamId(teamId);
        log.info("Deleted quest for team {}",teamId);
        return result;
}

public MissionResultDto submitMisionByMissionId(UUID missionId) {
    log.debug("Submitting mission solution for mission {}", missionId);
    MissionResultDto result = collideQuestClient.submitMissionByMissionId(missionId);
    log.info("Submitted mission solution for mission {}", missionId);
    return result;
}


}

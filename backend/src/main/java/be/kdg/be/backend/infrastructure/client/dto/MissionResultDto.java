package be.kdg.be.backend.infrastructure.client.dto;

public record MissionResultDto(
        boolean effective,
        String name,
        int problemScore,
        boolean problemSolved,
        int teamScore,
        boolean missionSolved,
        String message
) {
}
package be.kdg.be.backend.infrastructure.client.dto;

import java.util.List;

public record ProblemDto(
        String name,
        String description,
        boolean solved,
        int score,
        String badgeUrl,
        List<MissionDto> missions
) {
}
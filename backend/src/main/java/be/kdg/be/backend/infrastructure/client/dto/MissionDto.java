package be.kdg.be.backend.infrastructure.client.dto;

import java.util.UUID;

public record MissionDto(
        UUID id,
        String name,
        String effect,
        String objective,
        String parameters,
        String remainingAttempts,
        int difficulty,
        boolean solved
) {
}
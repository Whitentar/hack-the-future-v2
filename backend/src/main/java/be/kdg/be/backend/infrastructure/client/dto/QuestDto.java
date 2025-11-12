package be.kdg.be.backend.infrastructure.client.dto;

import java.util.List;
import java.util.UUID;

public record QuestDto(
        UUID id,
        UUID teamId,
        boolean closed,
        List<ProblemDto> problems
) {
}
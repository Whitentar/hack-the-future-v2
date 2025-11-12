package be.kdg.be.backend.infrastructure.client.dto;

import java.util.List;

public record TeamDto(
        String name,
        int score,
        List<EffectDto> appliedEffects,
        List<ProblemDto> problems
) {
}

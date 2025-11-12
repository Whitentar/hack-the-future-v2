package be.kdg.be.backend.infrastructure.client.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record ErrorResponseDto(
        String error,
        UUID correlationId,
        LocalDateTime timestamp,
        String type
) {
}
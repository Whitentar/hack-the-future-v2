package be.kdg.be.backend.infrastructure.client.dto;

import java.util.List;

public record DashboardDto(
        List<TeamDto> teams
) {
}

package be.kdg.be.backend.infrastructure.client.exception;

import be.kdg.be.backend.infrastructure.client.dto.ErrorResponseDto;

public class NotFoundException extends ApiException {
    public NotFoundException(ErrorResponseDto errorResponse) {
        super(errorResponse);
    }
}

package be.kdg.be.backend.infrastructure.client.exception;

import be.kdg.be.backend.infrastructure.client.dto.ErrorResponseDto;

public class ConflictException extends ApiException {
    public ConflictException(ErrorResponseDto errorResponse) {
        super(errorResponse);
    }
}

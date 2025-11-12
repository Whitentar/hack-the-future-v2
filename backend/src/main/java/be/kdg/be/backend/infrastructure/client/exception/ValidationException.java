package be.kdg.be.backend.infrastructure.client.exception;

import be.kdg.be.backend.infrastructure.client.dto.ErrorResponseDto;

public class ValidationException extends ApiException {
    public ValidationException(ErrorResponseDto errorResponse) {
        super(errorResponse);
    }
}

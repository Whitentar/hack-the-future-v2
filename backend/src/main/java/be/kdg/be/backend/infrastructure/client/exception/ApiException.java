package be.kdg.be.backend.infrastructure.client.exception;

import be.kdg.be.backend.infrastructure.client.dto.ErrorResponseDto;

public class ApiException extends RuntimeException {
    private final ErrorResponseDto errorResponse;

    public ApiException(ErrorResponseDto errorResponse) {
        super(errorResponse.error());
        this.errorResponse = errorResponse;
    }

    public ErrorResponseDto getErrorResponse() {
        return errorResponse;
    }
}


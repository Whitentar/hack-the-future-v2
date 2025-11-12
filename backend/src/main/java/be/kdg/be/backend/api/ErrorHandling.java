package be.kdg.be.backend.api;

import be.kdg.be.backend.infrastructure.client.dto.ErrorResponseDto;
import be.kdg.be.backend.infrastructure.client.exception.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorHandling {

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponseDto> handleValidation(final ValidationException ex) {
        return buildResponse(ex.getErrorResponse(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<ErrorResponseDto> handleConflict(final ConflictException ex) {
        return buildResponse(ex.getErrorResponse(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorResponseDto> handleNotFound(final NotFoundException ex) {
        return buildResponse(ex.getErrorResponse(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<ErrorResponseDto> handleApiException(final ApiException ex) {
        return buildResponse(ex.getErrorResponse(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private ResponseEntity<ErrorResponseDto> buildResponse(ErrorResponseDto dto, HttpStatus status) {
        return ResponseEntity.status(status).body(dto);
    }
}
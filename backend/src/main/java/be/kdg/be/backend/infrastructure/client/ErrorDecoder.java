package be.kdg.be.backend.infrastructure.client;

import be.kdg.be.backend.infrastructure.client.dto.ErrorResponseDto;
import be.kdg.be.backend.infrastructure.client.exception.ApiException;
import be.kdg.be.backend.infrastructure.client.exception.ConflictException;
import be.kdg.be.backend.infrastructure.client.exception.NotFoundException;
import be.kdg.be.backend.infrastructure.client.exception.ValidationException;
import feign.Response;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ErrorDecoder implements feign.codec.ErrorDecoder {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public Exception decode(String methodKey, Response response) {
        try {
            if (response.body() != null) {
                ErrorResponseDto errorResponse = objectMapper.readValue(
                        response.body().asInputStream(),
                        ErrorResponseDto.class
                );

                return switch (errorResponse.type()) {
                    case "ValidationError" -> new ValidationException(errorResponse);
                    case "ConflictError" -> new ConflictException(errorResponse);
                    case "NotFoundError" -> new NotFoundException(errorResponse);
                    default -> new ApiException(errorResponse);
                };
            }
        } catch (Exception e) {
            return new RuntimeException("Unknown error from Collide API", e);
        }
        return new RuntimeException("Unknown error from Collide API");
    }
}
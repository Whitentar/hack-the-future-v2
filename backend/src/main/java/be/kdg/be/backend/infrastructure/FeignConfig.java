package be.kdg.be.backend.infrastructure;

import be.kdg.be.backend.infrastructure.client.ErrorDecoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfig {
    @Bean
    public feign.codec.ErrorDecoder errorDecoder() {
        return new ErrorDecoder();
    }
}

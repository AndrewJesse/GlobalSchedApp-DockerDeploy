package edu.wgu.d387_sample_code.controller;

import edu.wgu.d387_sample_code.messages.WelcomeMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WelcomeController implements WebMvcConfigurer {

    @GetMapping("/welcome-messages")
    public List<String> getWelcomeMessages() {
        WelcomeMessage welcomeMessageEnglish = new WelcomeMessage(Locale.US);
        WelcomeMessage welcomeMessageFrench = new WelcomeMessage(Locale.CANADA_FRENCH);
        welcomeMessageEnglish.run();
        welcomeMessageFrench.run();
        return Arrays.asList(welcomeMessageEnglish.getMessage(), welcomeMessageFrench.getMessage());
    }
}

package edu.wgu.d387_sample_code.messages; // or your chosen package

import lombok.Getter;

import java.util.Locale;
import java.util.ResourceBundle;

public class WelcomeMessage implements Runnable {
    private final Locale locale;
    @Getter
    private String message;

    public WelcomeMessage(Locale locale) {
        this.locale = locale;
    }

    @Override
    public void run() {
        ResourceBundle bundle = ResourceBundle.getBundle("translation", locale);
        message = bundle.getString("welcome");
    }

}

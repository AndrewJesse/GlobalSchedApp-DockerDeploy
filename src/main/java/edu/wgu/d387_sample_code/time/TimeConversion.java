package edu.wgu.d387_sample_code.time;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
@CrossOrigin(origins = "http://localhost:4200")
public class TimeConversion {
    public static String convertTime(ZonedDateTime time) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        String etTime = time.withZoneSameInstant(ZoneId.of("America/New_York")).format(formatter);
        String mtTime = time.withZoneSameInstant(ZoneId.of("America/Denver")).format(formatter);
        String utcTime = time.withZoneSameInstant(ZoneId.of("UTC")).format(formatter);

        return "ET: " + etTime + ", MT: " + mtTime + ", UTC: " + utcTime;
    }
}

package edu.wgu.d387_sample_code.time;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.ZonedDateTime;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TimeZoneConversionController {

    @GetMapping("/presentation")
    public String getConvertedTimes() {
        ZonedDateTime currentTime = ZonedDateTime.now();
        return TimeConversion.convertTime(currentTime);
    }
}

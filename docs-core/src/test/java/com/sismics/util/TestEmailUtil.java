package com.sismics.util;

import com.sismics.docs.core.dao.dto.UserDto;
import org.junit.Test;
import org.junit.Assert;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class TestEmailUtil {
    @Test
    public void testSendEmail() {
        String templateName = "testTemplate";
        UserDto recipientUser = new UserDto();
        recipientUser.setEmail("test@example.com");
        recipientUser.setUsername("testUser");
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("key1", "value1");
        paramMap.put("key2", "value2");

        // Since sendEmail method doesn't return anything, it's hard to test it directly.
        // Here we just call the method to see if there's any exception thrown.
        // In real world scenario, you might need to use some kind of email server mock to test it.
        EmailUtil.sendEmail(templateName, recipientUser, paramMap);
    }
}
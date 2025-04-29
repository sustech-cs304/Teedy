package com.sismics.docs.core.util.authentication;

import com.sismics.docs.core.model.jpa.User;
import com.sismics.docs.BaseTransactionalTest;
import org.junit.Test;
import static org.junit.Assert.*;

public class TestAuthenticationUtil extends BaseTransactionalTest {

    @Test
    public void testAuthenticate() {
        User validUser = AuthenticationUtil.authenticate("admin", "admin");
        assertNotNull("Valid credentials should authenticate", validUser);

        User invalidUser = AuthenticationUtil.authenticate("wrong", "wrong");
        assertNull("Invalid credentials should not authenticate", invalidUser);

        User emptyUser = AuthenticationUtil.authenticate("", "");
        assertNull("Empty credentials should not authenticate", emptyUser);
    }
}
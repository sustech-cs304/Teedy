package com.sismics.docs.core.listener.async;

import com.sismics.docs.BaseTransactionalTest;
import com.sismics.docs.core.dao.UserDao;
import com.sismics.docs.core.event.FileDeletedAsyncEvent;
import com.sismics.docs.core.model.jpa.File;
import com.sismics.docs.core.model.jpa.User;
import com.sismics.docs.core.util.TransactionUtil;
import org.junit.Assert;
import org.junit.Test;

import java.util.Date;

public class FileDeletedAsyncListenerTest extends BaseTransactionalTest {

    @Test
    public void testUpdateUser() throws Exception {
        UserDao userDao = new UserDao();
        User user = createUser("testUpdateUser");

        user.setEmail("newemail@example.com");
        user.setStorageQuota(100000L);
        user.setStorageCurrent(1000L);
        user.setTotpKey("newTotpKey");
        user.setDisableDate(new Date());

        User updated = userDao.update(user, user.getId());

        User userFromDb = userDao.getById(user.getId());
        Assert.assertEquals("newemail@example.com", userFromDb.getEmail());
        Assert.assertEquals(Long.valueOf(100000L), userFromDb.getStorageQuota());
        Assert.assertEquals("newTotpKey", userFromDb.getTotpKey());
    }

    @Test
    public void testUpdatePassword() throws Exception {
        UserDao userDao = new UserDao();
        User user = createUser("testUpdatePassword");

        user.setPassword("newPassword123");
        userDao.updatePassword(user, user.getId());

        User userFromDb = userDao.getById(user.getId());
        Assert.assertNotEquals("newPassword123", userFromDb.getPassword()); // 应该是 hash 过的
        Assert.assertTrue(userFromDb.getPassword().length() > 10); // 粗略验证
    }

    @Test
    public void testUpdateHashedPassword() throws Exception {
        UserDao userDao = new UserDao();
        User user = createUser("testUpdateHashedPassword");

        // 模拟已经加密过的密码
        String hashedPassword = "hashed_password_abc123";
        user.setPassword(hashedPassword);

        userDao.updateHashedPassword(user);

        User userFromDb = userDao.getById(user.getId());
        Assert.assertEquals(hashedPassword, userFromDb.getPassword()); // 这个不应该再 hash
    }

    @Test
    public void updateQuotaSizeKnown() throws Exception {
        User user = createUser("updateQuotaSizeKnown");
        File file = createFile(user, FILE_JPG_SIZE);
        UserDao userDao = new UserDao();
        user = userDao.getById(user.getId());
        user.setStorageCurrent(10_000L);
        userDao.updateQuota(user);

        FileDeletedAsyncListener fileDeletedAsyncListener = new FileDeletedAsyncListener();
        TransactionUtil.commit();
        FileDeletedAsyncEvent event = new FileDeletedAsyncEvent();
        event.setFileSize(FILE_JPG_SIZE);
        event.setFileId(file.getId());
        event.setUserId(user.getId());
        fileDeletedAsyncListener.on(event);
        Assert.assertEquals(userDao.getById(user.getId()).getStorageCurrent(), Long.valueOf(10_000 - FILE_JPG_SIZE));
    }

    @Test
    public void updateQuotaSizeUnknown() throws Exception {
        User user = createUser("updateQuotaSizeUnknown");
        File file = createFile(user, File.UNKNOWN_SIZE);
        UserDao userDao = new UserDao();
        user = userDao.getById(user.getId());
        user.setStorageCurrent(10_000L);
        userDao.updateQuota(user);

        FileDeletedAsyncListener fileDeletedAsyncListener = new FileDeletedAsyncListener();
        TransactionUtil.commit();
        FileDeletedAsyncEvent event = new FileDeletedAsyncEvent();
        event.setFileSize(FILE_JPG_SIZE);
        event.setFileId(file.getId());
        event.setUserId(user.getId());
        fileDeletedAsyncListener.on(event);
        Assert.assertEquals(userDao.getById(user.getId()).getStorageCurrent(), Long.valueOf(10_000 - FILE_JPG_SIZE));
    }

}

package com.sismics.util;

import org.junit.Assert;
import org.junit.Test;


public class TestJsonUtil
{
    @Test
    public void computeGravatarTest() {
        Assert.assertEquals(JsonUtil.nullable("0bc83cb571cd1c50ba6f3e8a78ef1346"), JsonUtil.nullable("0bc83cb571cd1c50ba6f3e8a78ef1346"));
    }
}

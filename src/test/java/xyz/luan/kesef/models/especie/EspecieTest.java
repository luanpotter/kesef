package xyz.luan.kesef.models.especie;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import xyz.luan.kesef.utils.EndpointTestCase;

public class EspecieTest extends EndpointTestCase {

    @Test
    public void testCreate() {
        // TODO Auto-generated method stub
        String json = post("/especies", "{}");
        Especie especie = from(json, Especie.class);

        assertNotNull(especie);
    }

}

package xyz.luan.kesef.models.product;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import xyz.luan.kesef.utils.EndpointTestCase;

public class ProductTest extends EndpointTestCase {

    @Test
    public void testCreate() {
        // TODO Auto-generated method stub
        String json = post("/products", "{}");
        Product product = from(json, Product.class);

        assertNotNull(product);
    }

}

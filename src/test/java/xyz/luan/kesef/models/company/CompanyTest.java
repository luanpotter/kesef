package xyz.luan.kesef.models.company;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import xyz.luan.kesef.utils.EndpointTestCase;

public class CompanyTest extends EndpointTestCase {

    @Test
    public void testCreate() {
        // TODO Auto-generated method stub
        String json = post("/companies", "{}");
        Company company = from(json, Company.class);

        assertNotNull(company);
    }

}

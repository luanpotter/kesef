package xyz.luan.kesef.models.company;

import io.yawp.repository.shields.Shield;

public class CompanyShield extends Shield<Company> {

    @Override
    public void defaults() {
        // TODO Auto-generated method stub
        allow();
    }

}

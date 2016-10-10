package xyz.luan.kesef.models.user;

import xyz.luan.kesef.models.company.Company;
import xyz.luan.kesef.models.especie.Especie;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/users")
public class User {

    @Id
    IdRef<User> id;

    IdRef<Company> company;

    String email;

    String displayName;
}

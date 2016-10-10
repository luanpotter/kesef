package xyz.luan.kesef.models.company;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/companies")
public class Company {

    @Id
    IdRef<Company> id;

    String domain;

    String displayName;
}

package xyz.luan.kesef.models.especie;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/especies")
public class Especie {

    @Id
    IdRef<Especie> id;

    Integer centsValue;

    Currency currency;

    Type type;
}

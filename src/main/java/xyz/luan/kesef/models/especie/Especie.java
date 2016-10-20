package xyz.luan.kesef.models.especie;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;
import io.yawp.repository.annotations.Index;

@Endpoint(path = "/especies")
public class Especie {

    @Id
    IdRef<Especie> id;

    @Index
    Integer centsValue;

    @Index
    Currency currency;

    @Index
    Type type;
}

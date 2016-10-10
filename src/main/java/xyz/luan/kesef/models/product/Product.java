package xyz.luan.kesef.models.product;

import xyz.luan.kesef.models.especie.Especie;
import xyz.luan.kesef.models.user.User;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/products")
public class Product {

    @Id
    IdRef<Product> id;

    IdRef<User> owner;

    IdRef<Especie> especie;

    Integer amount;

}

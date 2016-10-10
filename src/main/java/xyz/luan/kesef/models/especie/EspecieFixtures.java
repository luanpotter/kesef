package xyz.luan.kesef.models.especie;

import java.util.List;
import java.util.ArrayList;

public class EspecieFixtures {

    public static List<Especie> all() {
        List<Especie> es = new ArrayList<>();
        es.add(brl(100, Type.MOEDA));
        return es;
    }

    private static Especie brl(Integer amount, Type type) {
        Especie e = new Especie();
        e.currency = Currency.BRL;
        e.type = type;
        e.centsValue = amount;
	return e;
    }

}

package xyz.luan.kesef.models.especie;

import java.util.List;
import java.util.ArrayList;

public class EspecieFixtures {

    public static List<Especie> all() {
        List<Especie> es = new ArrayList<>();
        es.add(brl(5, Type.MOEDA));
        es.add(brl(10, Type.MOEDA));
        es.add(brl(25, Type.MOEDA));
        es.add(brl(50, Type.MOEDA));
        es.add(brl(100, Type.MOEDA));

	es.add(brl(200, Type.PAPEL));
	es.add(brl(500, Type.PAPEL));
	es.add(brl(1000, Type.PAPEL));
	es.add(brl(2000, Type.PAPEL));
	es.add(brl(5000, Type.PAPEL));
	es.add(brl(10000, Type.PAPEL));
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

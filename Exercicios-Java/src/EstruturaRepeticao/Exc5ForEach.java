package EstruturaRepeticao;

import java.util.Arrays;

public class Exc5ForEach {
    public static void main(String[] args) {
        String[] carros = {"fiesta", "onix", "fusca", "saveiro"};

        /*Arrays.asList(carros).forEach((carro) -> {
            System.out.println(carro);
        });*/

        Arrays.asList(carros).forEach(System.out::println);
    }
}
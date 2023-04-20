import { Image, Text, View } from "react-native";
import { principas } from "../lib/principas";

export const TelaResultado = ({ navigation }) => {
  return (
      <View style={principas.container}>
        <View style={principas.titulotext}>
          <Text style={principas.resultadopesquisa}>
            Resultados relacionados a sua pesquisa...
          </Text>
        </View>
        <View style={principas.containerboxs}>
          <View style={principas.boxs}>
            <View style={principas.imgbox1}>
              <Image
                style={principas.imgbox}
                source={require("../imagens/mesa9.jpg")}
              ></Image>
            </View>
            <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
            <Text style={principas.boxstext1}>
              Lorem Ipsum Lorem Ipsum Lorem
            </Text>
            <Text style={principas.boxstext2}>R$234,50</Text>
          </View>
          <View style={principas.boxs}>
            <View style={principas.imgbox1}>
              <Image
                style={principas.imgbox}
                source={require("../imagens/mesa9.jpg")}
              ></Image>
            </View>
            <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
            <Text style={principas.boxstext1}>
              Lorem Ipsum Lorem Ipsum Lorem
            </Text>
            <Text style={principas.boxstext2}>R$234,50</Text>
          </View>
          <View style={principas.boxs}>
            <View style={principas.imgbox1}>
              <Image
                style={principas.imgbox}
                source={require("../imagens/mesa9.jpg")}
              ></Image>
            </View>
            <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
            <Text style={principas.boxstext1}>
              Lorem Ipsum Lorem Ipsum Lorem
            </Text>
            <Text style={principas.boxstext2}>R$234,50</Text>
          </View>
          <View style={principas.boxs}>
            <View style={principas.imgbox1}>
              <Image
                style={principas.imgbox}
                source={require("../imagens/mesa9.jpg")}
              ></Image>
            </View>
            <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
            <Text style={principas.boxstext1}>
              Lorem Ipsum Lorem Ipsum Lorem
            </Text>
            <Text style={principas.boxstext2}>R$234,50</Text>
          </View>
        </View>
      </View>
  );
};

import { Image, ScrollView, Text, View } from "react-native";
import { Button, Provider, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";
import { ajudas } from "../lib/ajudas";

export const TelaSugestoes = () => {
  return (
    <ScrollView style={{ backgroundColor: "#F3ECE8" }}>
      <View style={ajudas.containerSugestoes}>
        <Image
          style={ajudas.imgsugestao}
          source={require("../imagens/pessoa-texto.png")}
        />
        <Text style={ajudas.textoajudaconta}>Compartilhe sua Sugestão</Text>
        <TextInput style={styles.input} placeholder="Escreva Aqui" />
        <Button style={styles.btt} mode="contained">
          Enviar
        </Button>
      </View>
    </ScrollView>
  );
};

import {
  Image,
  Text,
  TextInput,
  View
} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        <Text>Linha 1</Text>
        <Text>Linha 2</Text>
      </Text>

      <View>
        <Text>Linha 1</Text>
        <Text>Linha 2</Text>
      </View>

      {/* <Saudacao name="Fulano" />
      <Saudacao name="Cicrano" /> */}
      <Saudacao
        name="Teste"
        complementText=" boa noite"
        propFunction={() => { }}
      // children={<Text>children como props</Text>}
      >
        {
          (props) => <Text>Olá, {JSON.stringify(props)}</Text>
        }
      </Saudacao>

      <Image
        source={require("@/assets/images/react-logo.png")}
      />
      <Image 
        style={{
          width: 100,
          height: 100
        }}
        source={{
          uri: 'https://www.infnet.edu.br/infnet/wp-content/uploads/sites/18/2024/03/infnet-sao-jose-new.jpg'
        }}
      />

      <TextInput 
        placeholder="Digite aqui"
        keyboardType="visible-password"
      />
    </View>
  );
}

interface SaudacaoProps {
  name: string;
  complementText?: string
  number?: number
  prop1?: number | string | object
  prop2?: {
    status: string
  }
  propFunction?: (params: { name: string }) => void,
  children: React.JSX.Element | ((props: any) => React.JSX.Element)
}

const Saudacao = ({
  name,
  complementText = " Sem valor",
  children
}: SaudacaoProps) => {
  // condicao ? "retorno true" : "retorno false"
  const state = {
    status: "ACTIVE",
    value: 2
  }
  return <Text>
    Olá, {name}
    {
      typeof children === "function" ?
        children(state) : children
    }
    {/* {complementText ? complementText : " Sem valor"} */}
  </Text>
}

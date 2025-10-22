import { ButtomCustom } from "@/components/Button";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Index() {
    const [contador, setContador] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(()=> {
        // console.log("Executou o useEffect somente 1 vez")
    },[]);

    useEffect(()=> {
        // console.log(`Valor do contador ${contador}`)
        if(contador === 5){
            Alert.alert("Contador chegou")
        }
    },[contador]);
    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text style={{
            fontSize: 50
        }}>
            {contador}
        </Text>
        <ButtomCustom title="Incrementar" onPress={() => {
            // setContador(contador + 1)
            // setContador(contador + 1)
            setContador(prev => prev + 1)
            // setContador(prev => prev + 1)
        }} />

        <ButtomCustom
            title={isVisible ? "Esconder mensagem" : "Mostrar mensagem"}
            onPress={() => setIsVisible(!isVisible)}
            variant="PRIMARY"
        />
        {
            isVisible && (
                <MyComponent/>
            )
        }


    </View>
}

const MyComponent = ()=> {
    useEffect(()=>{
        console.log("Componente montado!!!");
        
        return () => {
            console.log("Componente desmontado***");
        }
    })
    return (
        <Text>Meu compoente</Text>
    )
}
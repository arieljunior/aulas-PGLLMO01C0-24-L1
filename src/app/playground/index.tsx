import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function HomePlayground() {
    const params = useLocalSearchParams();
    console.log(params);
    return <View>
        <Text>Inicio do playground</Text>
    </View>
}
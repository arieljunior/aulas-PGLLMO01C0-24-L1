import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function IconButtonHome(){
    const router = useRouter();
    return (
        <Pressable onPress={() => router.navigate('/todo-app/settings')}>
            <MaterialIcons 
                name="settings"
                size={36}
            />
        </Pressable>
    )
}
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { styles } from "./styles";
import { FloatButtonProps } from "./types";

const FloatButton = ({
    onPress
}: FloatButtonProps) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <MaterialIcons name="add" size={30} color={"white"} />
        </Pressable>
    )
}

export default FloatButton;
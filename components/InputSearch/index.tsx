import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export default function InputSearch({
    value,
    onChange,
    onClickClear,
    placeholder
}: {
    value: string,
    placeholder?: string,
    onChange: (newValue: string) => void,
    onClickClear: () => void,
}) {
    const isClearVisible = value && value.length > 0;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType="default"
            />

            {isClearVisible && (
                <Pressable
                    onPress={onClickClear}
                    style={styles.clearButton}
                >
                    <Feather name="x" size={20} color="#777" />
                </Pressable>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 15,
    },
    clearButton: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
import { ButtomCustom } from "@/components/Button";
import InputText from "@/components/InputText";
import { useTheme } from "@/contexts/theme-provider";
import { createTodo } from "@/services/todos.service";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

interface FormState {
    title: string
    description: string
}

export default function CreateTodoView() {
    const router = useRouter();
    const { themeStyle } = useTheme();
    const [formData, setFormData] = useState<FormState>({
        title: '',
        description: '',
    });

    const handleChange = useCallback((name: keyof FormState, value: String) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }, []);

    const handleSubmit = useCallback(async () => {
        const created = await createTodo({
            description: formData.description,
            title: formData.title
        });
        if (!created) {
            Alert.alert("Erro ao criar tarefa");
            return
        }
        router.navigate('/todo-app')
    }, []);



    return <View style={[
        styles.container,
        {
            backgroundColor: themeStyle.background
        }
    ]}>
        <Text style={styles.titulo}>Criar tarefa</Text>
        <InputText
            placeholder="Título da tarefa"
            value={formData.title}
            onChangeText={(text) => handleChange('title', text)}
        />

        <InputText
            placeholder="Descrição detalhada"
            multiline={true}
            numberOfLines={4}
            style={styles.descricaoInput}
            value={formData.description}
            onChangeText={(text) => handleChange('description', text)}
        />

        <ButtomCustom title="Salvar" onPress={handleSubmit} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    descricaoInput: {
        height: 100,
        textAlignVertical: 'top',
    },
});
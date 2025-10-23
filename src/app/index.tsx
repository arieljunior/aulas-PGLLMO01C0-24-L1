import { ButtomCustom } from "@/components/Button";
import { useRouter } from 'expo-router';
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
    const router = useRouter()

    const handleClickButtonPlayground = useCallback(() => {
        router.navigate('/playground?id=12&journey=home')
    }, [router]);

    const handleClickButtonTodoApp = useCallback(() => {
        router.navigate({
            pathname: '/todo-app',
            params: {
                journer: 'home'
            }
        })
    }, [router]);

    return <View style={styles.container}>

        <View style={styles.containerButtons}>
            <ButtomCustom
                title="Playground"
                onPress={handleClickButtonPlayground}
            />
            <ButtomCustom
                title="Gerenciador de Tarefas"
                onPress={handleClickButtonTodoApp}
                variant="PRIMARY"
            />

        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButtons: {
        gap: 25
    }
});
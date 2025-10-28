import { ButtomCustom } from "@/components/Button";
import { getSelectedApp, setSelectedApp } from "@/services/selected-app";
import { useRouter } from 'expo-router';
import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
    const router = useRouter()

    const handleClickButtonPlayground = useCallback(() => {
        router.replace('/playground?id=12&journey=home')
        setSelectedApp('/playground')
    }, [router]);

    const handleClickButtonTodoApp = useCallback(() => {
        router.replace({
            pathname: '/todo-app'
        });
        setSelectedApp('/todo-app')
    }, [router]);

    useEffect(()=>{
        getSelectedApp().then(app =>{
            if(app){
                router.replace(app)
            }
        })
    },[router])

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
import BottomNavigation from '@/components/BottomNavigation';
import Map from '@/components/MapView';
import { getTodoById, removeTodoById, Todo } from '@/services/todos.service';
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function ViewScreen () {
    const router = useRouter();

    const { id } = useLocalSearchParams<{ id: string }>();
    const [todo, setTodo] = useState<Todo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const handleDeleteTodo = useCallback(async () => {
        const removed = await removeTodoById(id);

        if (!removed) {
            Alert.alert("Erro", "Não foi possível remover a tarefa.");
            return;
        }

        Alert.alert("Sucesso", "Tarefa removida com sucesso.");

        router.back()
    }, [id]);

    useFocusEffect(() => {
        if (id) {
            getTodoById(id).then(todo => {
                if (!todo) return
                setTodo(todo);
            }).finally(() => setLoading(false));
        }
    });

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Carregando detalhes da tarefa...</Text>
            </View>
        );
    }
    
    if (!todo) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Tarefa não encontrada!</Text>
            </View>
        );
    }

    return (
        <BottomNavigation
            primaryButton={{
                title: "Editar",
                onPress: () => router.push(`/todo-app/edit/${todo.id}`)
            }}
            secondaryButton={{
                title: "Excluir",
                onPress: handleDeleteTodo
            }}
        >

            <Text style={styles.title}>{todo.title}</Text>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>ID:</Text>
                <Text style={styles.valueText}>{todo.id}</Text>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Título:</Text>
                <Text style={styles.valueText}>{todo.title}</Text>
            </View>

            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Descrição:</Text>
                <Text style={styles.descriptionText}>{todo.description}</Text>
            </View>
            <View>
                {todo.marker && <Map 
                    marker={todo.marker}
                    region={{
                        latitude: todo.marker.coordinator.latitude,
                        longitude: todo.marker.coordinator.longitude,
                        latitudeDelta: 0.010,
                        longitudeDelta: 0.010,
                    }} 
                />}
            </View>
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    fieldContainer: {
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#666',
    },
    valueText: {
        fontSize: 18,
        paddingHorizontal: 5,
        paddingVertical: 3,
        color: '#333',
        fontWeight: 'normal',
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 5,
        color: '#444',
    }
});

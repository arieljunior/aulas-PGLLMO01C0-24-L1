import BottomNavigation from '@/components/BottomNavigation';
import InputText from '@/components/InputText';
import { getTodoById, Todo, updateTodo } from '@/services/todos.service';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, StyleSheet, Switch, Text, View } from 'react-native';
import { LatLng } from 'react-native-maps';

import Map from '@/components/MapView';

interface MarkerPoint {
    coordinator: LatLng,
    title?: string,
    description?: string
}
interface FormState {
    title: string
    description: string
    marker?: MarkerPoint
}

export default function EditScreen() {

    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const [hasLocation, setHasLocation] = useState<boolean>(false)

    const [formData, setFormData] = useState<FormState>({
        title: '',
        description: '',
    });

    const [loading, setLoading] = useState<boolean>(true);

    const handleChange = useCallback((name: keyof FormState, value: String) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }, []);

    const handleSubmitForm = useCallback(async () => {
        const todo: Todo = {
            id,
            ...formData,
            marker: hasLocation ? formData.marker : undefined
        };

        const updated = await updateTodo(todo);

        if (!updated) {
            Alert.alert("Error", "Não foi possível atualizar a tarefa.");
            return;
        }

        Alert.alert("Sucesso", "Tarefa atualizada com sucesso.");

        router.back()
    }, [formData, hasLocation, router]);

    useEffect(() => {
        if (id) {
            getTodoById(id).then(todo => {
                if (!todo) return
                setFormData(todo);
                setHasLocation(Boolean(todo.marker))
            }).finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <BottomNavigation
            primaryButton={{
                title: "Confirmar",
                onPress: handleSubmitForm
            }}
            secondaryButton={{
                title: "Cancelar",
                onPress: () => router.back()
            }}
        >

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
            <View style={styles.settingRow}>
                <Text>
                    Adicionar marcador no mapa
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    onValueChange={() => setHasLocation(prev => !prev)}
                    value={hasLocation}
                />
            </View>
            <View>
                {hasLocation && <Map
                    editable={Boolean(formData.marker)}
                    onChangeMarkerTitle={text => setFormData(prev => ({
                        ...prev,
                        marker: {
                            ...prev.marker,
                            title: text
                        }
                    } as FormState))}
                    onChangeMarkerDescription={text => setFormData(prev => ({
                        ...prev,
                        marker: {
                            ...prev.marker,
                            description: text
                        }
                    } as FormState))}
                    marker={formData.marker}
                    region={{
                        latitude: formData.marker?.coordinator.latitude,
                        longitude: formData.marker?.coordinator.longitude,
                        latitudeDelta: 0.010,
                        longitudeDelta: 0.010,
                    }}
                    onPressMap={(event) => {
                        event.persist();
                        setFormData(prev => {
                            return {
                                ...prev,
                                marker: {
                                    ...prev.marker,
                                    coordinator: {
                                        latitude: event.nativeEvent.coordinate.latitude,
                                        longitude: event.nativeEvent.coordinate.longitude,
                                    }
                                }
                            }
                        })
                    }}
                />
                }
            </View>
        </BottomNavigation >
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
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    }
});
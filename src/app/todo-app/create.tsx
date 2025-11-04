import BottomNavigation from "@/components/BottomNavigation";
import InputText from "@/components/InputText";
import Map from '@/components/MapView';
import { requestLocation } from "@/services/get-location";
import { createTodo } from "@/services/todos.service";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert, StyleSheet, Switch, Text, View } from "react-native";
import { LatLng, MapPressEvent, Region } from 'react-native-maps';

interface FormState {
    title: string
    description: string
    marker?: MarkerPoint
}

interface MarkerPoint {
    coordinator: LatLng,
    title?: string,
    description?: string
}

const INITIAL_REGION = {
    latitude: -8.855493291654001,
    longitude: -54.04380818637636,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
}

export default function CreateTodoView() {
    const [region, setRegion] = useState<Region>(INITIAL_REGION)
    const [hasLocation, setHasLocation] = useState<boolean>(false)
    const router = useRouter();

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
            title: formData.title,
            marker: hasLocation ? formData.marker : undefined
        });
        if (!created) {
            Alert.alert("Erro","Erro ao criar tarefa");
            return
        }
        Alert.alert("Sucesso", "Tarefa criada com sucesso");

        router.back()
    }, [formData]);

    const handleChangeMarkerTitle = useCallback((text: string) => {
        setFormData(prev => ({
            ...prev,
            marker: {
                ...prev.marker,
                title: text
            }
        } as FormState))
    }, []);

    const handleChangeMarkerDescription = useCallback((text: string) => {
        setFormData(prev => ({
            ...prev,
            marker: {
                ...prev.marker,
                description: text
            }
        } as FormState))
    }, []);

    const handlePressMap = useCallback((event: MapPressEvent) => {
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
    }, []);

    useEffect(() => {
        requestLocation().then(coordinator => {
            if (coordinator) {
                setRegion((prev) => ({
                    ...prev,
                    latitude: coordinator.latitude,
                    longitude: coordinator.longitude
                }))
            }
        })
    }, []);

    return <BottomNavigation
        primaryButton={{
            title: "Salvar",
            onPress: handleSubmit
        }}
    >
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

            {
                hasLocation && <View style={{
                    flex: 1
                }}>
                    <Map
                        editable={Boolean(formData.marker)}
                        onChangeMarkerTitle={handleChangeMarkerTitle}
                        onChangeMarkerDescription={handleChangeMarkerDescription}
                        marker={formData.marker}
                        region={region}
                        onPressMap={handlePressMap}
                    />
                </View>
            }
        </View>
    </BottomNavigation>
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
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    }
});
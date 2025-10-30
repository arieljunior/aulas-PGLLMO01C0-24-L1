import { ButtomCustom } from "@/components/Button";
import InputText from "@/components/InputText";
import { useTheme } from "@/contexts/theme-provider";
import { requestLocation } from "@/services/get-location";
import { createTodo } from "@/services/todos.service";
import { LocationAccuracy, watchPositionAsync } from "expo-location";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

interface FormState {
    title: string
    description: string
}

interface LocationCoords {
    longitude: number
    latitude: number
}

export default function CreateTodoView() {
    const [location, setLocation] = useState<LocationCoords | null>(null)
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
    }, [formData]);

    const MakertCustom = () => {
        return <View style={{
            backgroundColor: 'purple',
            padding: 8,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white'
        }}>
            <Text style={{
                color: 'white',
                fontWeight: 'bold'
            }}>Meu marcador</Text>
        </View>
    }

    useEffect(() => {
        requestLocation().then(coordinator => {
            if (coordinator) {
                setLocation({
                    latitude: coordinator.latitude,
                    longitude: coordinator.longitude
                })
            }
        })
    }, []);

    useEffect(()=>{
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            distanceInterval: 1,
            timeInterval: 500
        }, (event) =>{
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude
            })
        });
    },[])

    return <View style={[
        styles.container,
        {
            backgroundColor: themeStyle.background
        }
    ]}>
        <View style={{
            flex: 1
        }}>
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

        {location && <View style={{
            flex: 1
        }}>
            <MapView
                style={{
                    flex: 1
                }}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation

            // onPress={(event) => console.log(event.nativeEvent.coordinate)}
            // onRegionChangeComplete={(region, details) => console.log(region, details)}
            >
                {/* <Marker
                    coordinate={{
                        latitude: -22.90607381779167,
                        longitude: -43.17671342250278
                    }}
                    pinColor="yellow"
                    title="Intutito INFNET"
                    description="Faculdade infnet"
                    onPress={(event) => console.log(event.nativeEvent)}
                /> */}
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }}
                    title="Localização atual"
                />
            </MapView>
        </View>}
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
import { useMemo } from "react";
import { View } from "react-native";
import MapView, { LatLng, MapPressEvent, Marker, Region } from "react-native-maps";
import InputText from "../InputText";

interface MarkerProps {
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
export default function Map({
    region,
    onPressMap,
    marker,
    editable,
    onChangeMarkerDescription,
    onChangeMarkerTitle
}: {
    region?: Partial<Region>;
    onPressMap?: (event: MapPressEvent) => void;
    onChangeMarkerTitle?: (text: string) => void;
    onChangeMarkerDescription?: (text: string) => void;
    marker?: MarkerProps;
    editable?: boolean
}) {

    const _region = useMemo(() => {
        return {
            latitude: region?.latitude || INITIAL_REGION.latitude,
            longitude: region?.longitude || INITIAL_REGION.longitude,
            latitudeDelta: region?.latitudeDelta || INITIAL_REGION.latitudeDelta,
            longitudeDelta: region?.latitudeDelta || INITIAL_REGION.longitudeDelta
        }
    }, [region]);

    return (
        <View>
            {editable && <>
                <InputText
                    placeholder="Título do marcador"
                    value={marker?.title || ''}
                    onChangeText={onChangeMarkerTitle}
                />
                <InputText
                    placeholder="Descrição do marcador"
                    value={marker?.description || ''}
                    onChangeText={onChangeMarkerDescription}
                />
            </>
            }
            <MapView
                style={{
                    height: 200
                }}
                initialRegion={_region}
                region={_region}
                showsUserLocation
                onPress={onPressMap}
            >
                {
                    marker && <Marker
                        coordinate={{
                            latitude: marker.coordinator.latitude,
                            longitude: marker.coordinator.longitude
                        }}
                        title={marker.title}
                        description={marker.description}
                    />
                }
            </MapView>
        </View>
    )
}
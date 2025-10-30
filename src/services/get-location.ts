import {
    getCurrentPositionAsync,
    LocationObjectCoords,
    requestForegroundPermissionsAsync
} from 'expo-location';

export async function requestLocation(): Promise<LocationObjectCoords | null>{
    const {
        granted
    } = await requestForegroundPermissionsAsync();

    if(granted){
        const { coords } = await getCurrentPositionAsync();
        return coords
    }

    return null
}
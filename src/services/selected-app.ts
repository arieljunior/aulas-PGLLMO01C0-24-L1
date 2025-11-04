import { KEYS_STORAGE } from '@/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Apps = '/playground' | '/todo-app'

export function setSelectedApp(app: Apps){
    AsyncStorage.setItem(KEYS_STORAGE.SELECTED_APP, app)
}

export async function getSelectedApp(): Promise<Apps | null>{
    const myApp = await AsyncStorage.getItem(KEYS_STORAGE.SELECTED_APP)
    return myApp as Apps;
}

export async function removeSelectedApp() {
    await AsyncStorage.removeItem(KEYS_STORAGE.SELECTED_APP);
}
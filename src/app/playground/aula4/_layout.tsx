import { Drawer } from 'expo-router/drawer';

export default function Aula3Drawer(){
    return (
        <Drawer>
            <Drawer.Screen
                name='index'
                options={{
                    drawerLabel: 'ìnicio',
                    title: 'ìnicio'
                }}
            />
            <Drawer.Screen
                name='dimensao_position'
                options={{
                    drawerLabel: 'Dimensão e posição',
                    title: 'Exemplos'
                }}
            />
            <Drawer.Screen
                name='useState_useEffect'
                options={{
                    drawerLabel: 'useState e useEffect',
                    title: 'Exemplos'
                }}
            />
        </Drawer>
    )
}
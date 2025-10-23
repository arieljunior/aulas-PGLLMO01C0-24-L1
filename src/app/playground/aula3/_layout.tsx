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
                name='estilizacao'
                options={{
                    drawerLabel: 'Estilização',
                    title: 'Estilização com flexbox'
                }}
            />
            <Drawer.Screen
                name='styled-components'
                options={{
                    drawerLabel: 'styled-components',
                    title: 'Componentes com styled-components'
                }}
            />
        </Drawer>
    )
}
import { View } from "react-native";
import { ButtomCustom as Button } from '../components/Button';
import Card from '../components/Card';

export default function Index() {
    return (
        <View style={{
            flex: 1,
            gap: 20,
            paddingHorizontal: 16,
            paddingVertical: 10,
        }}>
            <View style={{
                flex: 1
            }}>

                <Button
                    title="Clique aqui"
                    variant="PRIMARY"
                />
                <Button
                    title="Clique aqui"
                    variant="SECONDARY"
                />
                <Button
                    title="Clique aqui"
                />
            </View>
            <View style={{
                flex: 5
            }}>
                <Card 
                    title="Titulo teste"
                    description="Descrição teste"
                    onClickCard={()=>{}}
                    icon={{
                        name: 'airplane',
                        onClick: ()=> {}
                    }}
                />
                <Card 
                    title="Titulo teste"
                    description="Descrição teste"
                    onClickCard={()=>{}}
                    icon={{
                        name: 'pin',
                        color: 'red',
                        onClick: ()=> {}
                    }}
                />
                <Card 
                    title="Titulo teste"
                    description="Descrição teste"
                    onClickCard={()=>{}}
                />
            </View>
        </View>
    )
}
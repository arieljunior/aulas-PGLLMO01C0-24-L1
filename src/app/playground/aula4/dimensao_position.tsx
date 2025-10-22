import FloatButton from '@/components/FloatButton';
import { isTablet } from '@/utils/get-dimensions';
import { Text, View } from "react-native";

export default function Index() {
    return <View style={{
        flex: 1,
    }}>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            {isTablet() && <View style={{
                height: 100,
                width: 100,
                backgroundColor: 'red'
            }} />}
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: 'black'
            }} />
        </View>
        {/* <View style={{
            flex: 1,
            backgroundColor: 'green'
        }}>
        </View> */}
            <Text style={{
                position: 'absolute',
                backgroundColor: 'blue',
                bottom: 50,
                left: 50,
                zIndex: 1,
                color: 'white'
            }}>Estou flutuando</Text>
            <Text style={{
                position: 'absolute',
                backgroundColor: 'green',
                bottom: 50,
                left: 80,
                zIndex: 5
            }}>segundo texto absoluto</Text>

            <FloatButton onPress={()=>{}}/>
    </View>
}
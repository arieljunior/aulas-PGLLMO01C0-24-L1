import { View } from "react-native";

export default function Index() {
    return (
        <View style={{
            flex: 1,
            gap: 20,
            paddingHorizontal: 16,
            paddingVertical: 10,
            // flexDirection: 'row'
        }}>
            {/* <Text style={{
                backgroundColor: 'red'
            }}>Olá</Text> */}
            <View style={{
                flex: 1,
                backgroundColor: 'red',
                padding: 20,
                gap: 20,
                flexDirection: 'row-reverse'
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white'
                    // height: "100%",
                    // width: "50%"
                }} />
                <View style={{
                    flex: 3,
                    backgroundColor: 'black',
                }} />
                <View style={{
                    flex: 1,
                    backgroundColor: 'yellow',
                }} />
            </View>

            <View style={{
                flex: 1,
                backgroundColor: 'blue',
                padding: 20,
                gap: 20,
                flexDirection: 'row'
            }}>
                <View style={{
                    backgroundColor: 'white',
                    height: 50,
                    flexGrow: 1
                }} />
                <View style={{
                    flexGrow: 2,
                    backgroundColor: 'white',
                    height: 50
                }} />
                <View style={{
                    flexGrow: 3,
                    backgroundColor: 'white',
                    height: 50
                }} />
            </View>

            <View style={{
                flex: 5,
                backgroundColor: 'green',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 10,
                padding: 10,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <View
                        key={index}
                        style={{
                            height: 50,
                            width: 50,
                            backgroundColor: 'white'
                        }} />
                ))}

            </View>
        </View>
    )
}
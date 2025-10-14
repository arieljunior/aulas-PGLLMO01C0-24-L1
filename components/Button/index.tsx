import { Button, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ButtonCustomProps } from './types'

export default function ButtonNative() {
    return (
        <Button title='Clique aqui' color="red" />
    )
}

export function ButtomCustom({
    title,
    variant = "DEFAULT"
}: ButtonCustomProps){
    return (<TouchableOpacity 
        style={[
            styles.button,
            styles[variant]
        ]}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>)
}
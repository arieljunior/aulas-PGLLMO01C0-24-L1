import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {
    Card,
    CardDescription,
    CardIconContainer,
    CardTextContainer,
    CardTitle
} from './styles';
import { CardProps } from "./type";

export default function CardCustom({
    title,
    description,
    icon
}: CardProps) {

    return (<Card activeOpacity={0.6}>
        <CardTextContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardTextContainer>
        {icon && <CardIconContainer>
            <TouchableOpacity activeOpacity={0.5} onPress={icon.onClick}>
                <Ionicons name={icon.name} size={50} color={icon.color || 'black'} />
            </TouchableOpacity>
        </CardIconContainer>}
    </Card>)
}
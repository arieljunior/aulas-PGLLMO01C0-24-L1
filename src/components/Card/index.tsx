import { useTheme } from "@/contexts/theme-provider";
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
    icon,
    onClickCard
}: CardProps) {
    const { themeStyle } = useTheme();
    return (<Card activeOpacity={0.6} onPress={onClickCard} bgColor={themeStyle.background}>
        <CardTextContainer>
            <CardTitle textColor={themeStyle.text}>{title}</CardTitle>
            <CardDescription textColor={themeStyle.text}>{description}</CardDescription>
        </CardTextContainer>
        {icon && <CardIconContainer>
            <TouchableOpacity activeOpacity={icon.onClick ? 0.5 : 1} onPress={icon.onClick}>
                <Ionicons name={icon.name} size={50} color={icon.color || 'black'} />
            </TouchableOpacity>
        </CardIconContainer>}
    </Card>)
}
import { Ionicons } from '@expo/vector-icons'
import { ComponentProps } from "react"

export interface CardProps{
    title: string,
    description: string,
    onClickCard: () => void,
    icon?: {
        name: ComponentProps<typeof Ionicons>['name'],
        onClick?: () => void,
        color?: string
    }
}
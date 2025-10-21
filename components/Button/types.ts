type VARIANT_STYLE = "PRIMARY" | "SECONDARY" | "DEFAULT";

export interface ButtonCustomProps{
    title: string,
    onPress: ()=>void
    variant?: VARIANT_STYLE
}
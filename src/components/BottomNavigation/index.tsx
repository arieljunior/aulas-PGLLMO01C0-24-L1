import React from "react";
import { ScrollView, View } from "react-native";
import { ButtomCustom } from "../Button";

interface ButtonProps {
    title: string,
    onPress: () => void
}

export default function BottomNavigation({
    children,
    primaryButton,
    secondaryButton
}: {
    children: React.JSX.Element | React.JSX.Element[];
    primaryButton: ButtonProps
    secondaryButton?: ButtonProps
}) {
    return (<View style={{
        flex: 1
    }}>
        <ScrollView style={{
            flex: 1,
            padding: 20,
        }}>
            {children}
        </ScrollView>

        <View style={{
            gap: 20,
            padding: 20,
            marginBottom: 20
        }}>
            <ButtomCustom variant="PRIMARY" title={primaryButton.title} onPress={primaryButton.onPress} />
            {secondaryButton && <ButtomCustom title={secondaryButton.title} onPress={secondaryButton.onPress} />}
        </View>

    </View>)
}
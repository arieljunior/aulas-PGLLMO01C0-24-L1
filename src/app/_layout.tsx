import { ThemeProvider } from "@/contexts/theme-provider";
import { Slot } from "expo-router";
export default function RootLayout() {
    return <ThemeProvider>
        <Slot />
    </ThemeProvider>
}
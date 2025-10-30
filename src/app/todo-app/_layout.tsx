import IconButtonHome from "@/components/IconButtonHome";
import { useTheme } from "@/contexts/theme-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { themeStyle } = useTheme();

  return <Stack screenOptions={{
    headerTintColor: themeStyle.text,
    headerStyle: {
      backgroundColor: themeStyle.background
    }
  }}>
    <Stack.Screen
      name="index"
      options={{
        title: "Home",
        headerRight: IconButtonHome
      }}
    />
    <Stack.Screen
      name="create-todo"
      options={{
        title: "Nova tarefa"
      }}
    />
  </Stack>;
}

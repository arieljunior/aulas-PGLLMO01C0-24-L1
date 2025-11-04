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
      name="create"
      options={{
        title: "Nova tarefa"
      }}
    />

    <Stack.Screen
      name="settings"
      options={{
        title: "Configurações"
      }}
    />

    <Stack.Screen
      name="view/[id]"
      options={{
        title: "Visualizar Tarefa"
      }}
    />

    <Stack.Screen
      name="edit/[id]"
      options={{
        title: "Editar Tarefa"
      }}
    />
  </Stack>;
}

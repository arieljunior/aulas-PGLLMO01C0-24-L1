import IconButtonHome from "@/components/IconButtonHome";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: IconButtonHome,
          tabBarIcon: ({size, color}) => <MaterialIcons size={size} name="home" color={color}/>
        }}
      />
      <Tabs.Screen
        name="aula1-2/componentes_propriedades"
        options={{
          title: "Aula 2",
          headerRight: IconButtonHome,
          tabBarIcon: ({size, color}) => <MaterialIcons size={size} name="home" color={color}/>
        }}
      />
      <Tabs.Screen
        name="aula3"
        options={{
          headerShown: false,
          title: "Aula 3",
          headerRight: IconButtonHome,
          tabBarIcon: ({size, color}) => <MaterialIcons size={size} name="home" color={color}/>
        }}
      />
      <Tabs.Screen
        name="aula4"
        options={{
          headerShown: false,
          title: "Aula 4",
          headerRight: IconButtonHome,
          tabBarIcon: ({size, color}) => <MaterialIcons size={size} name="home" color={color}/>
        }}
      />
    </Tabs>;
}

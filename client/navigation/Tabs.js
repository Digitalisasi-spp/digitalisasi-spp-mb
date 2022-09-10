import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconFeather from "react-native-vector-icons/Feather";
import { Home, Message } from "../screens";

const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="main"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconFeather name="home" size={24} color="#0096FE" />;
            }
            return <IconFeather name="home" size={24} color="#999999" />;
          },
        }}
      />
      <Tabs.Screen
        name="message"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconFeather name="file-text" size={24} color="#0096FE" />;
            }
            return <IconFeather name="file-text" size={24} color="#999999" />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconFeather name="user" size={24} color="#0096FE" />;
            }
            return <IconFeather name="user" size={24} color="#999999" />;
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Navigation;

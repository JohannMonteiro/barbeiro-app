import { createStackNavigator } from "@react-navigation/stack";
import {
  BarberHomeScreen,
  ClientHomeScreen,
  LoginScreen,
  SignUpScreen,
  BarberAgendaScreen,
  ServiceTypeScreen,
} from "./screens";

const Stack = createStackNavigator();

export const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="register"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="barberHome"
      component={BarberHomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="clientHome"
      component={ClientHomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="barberAgenda"
      component={BarberAgendaScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="serviceType"
      component={ServiceTypeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

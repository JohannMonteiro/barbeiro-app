import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ServiceScreen from './screens/ServiceScreen';
import AppointmentSchedule from './screens/AppointmentSchedule';
import ScheduleScreen from './screens/AppointmentSchedule';
import Confirmaragendamento from './screens/Confirmaragendamento';
import ConfirmationScreen from './screens/ConfirmationScreen';
import Telainicial from './screens/Telainicial';
import Contato from './screens/Contato';
import Areadoadministrador from './screens/Areadoadministrador';
import Cadastro from './screens/SignupScreen';
import AgendaAdm from './screens/AgendaAdm';
import EdicaoAdm from './screens/EdicaoAdm';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tela inicial" component={Telainicial} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={SignupScreen} />
      <Stack.Screen name="Tipo de Serviço" component={ServiceScreen} />
      <Stack.Screen name="Calendário" component={AppointmentSchedule} />
      <Stack.Screen name="Confirmar agendamento" component={Confirmaragendamento} />
      <Stack.Screen name="Agendamento confirmado" component={ConfirmationScreen} />
      <Stack.Screen name="Contato" component={Contato} /> 
      <Stack.Screen name="Área do administrador" component={Areadoadministrador} />   
      <Stack.Screen name="Agenda do Administrador" component={AgendaAdm} /> 
      <Stack.Screen name="Edição Administrador" component={EdicaoAdm} />  

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import SignupScreen from './SignupScreen';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate("Tipo de Serviço");
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  const handleLoginAdm = () => {
    navigation.navigate("Área do administrador")
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
  };

  const cadastrese = () => {
    navigation.navigate("Cadastro")
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10, marginBottom: 100, padding: 5, }}>Login</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingHorizontal: 8 }}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={{ color: 'blue', marginBottom: 30, marginTop: -1, marginLeft: 150}}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 4, width: '80%'}}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cadastrese} style={{ marginTop: 20}}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 15, textAlign: 'left'}}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginAdm} style={{ backgroundColor: 'blue', padding: 8, borderRadius: 4, marginTop: 80 , paddingHorizontal: 20,
    paddingVertical: 10, width: '80%'}}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Área do Administrador</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;

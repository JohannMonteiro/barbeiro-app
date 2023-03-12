import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {

    console.log(`Nome: ${name}, Sobrenome: ${surname}, Idade: ${age}, Telefone: ${phone}, Email: ${email}`);
    navigation.navigate("Tipo de Serviço");
  }


  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 1, marginBottom: 40, padding: 5, }}>Cadastro</Text>
      <Image
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 70}}
        source={{ uri: 'https://via.placeholder.com/150' }}
      />
      <TouchableOpacity onPress={() => console.log('Selecionar foto')}>
        <Text style={{ color: 'blue', marginTop: -60}}>Selecionar foto</Text>
      </TouchableOpacity>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        onChangeText={setName}
        value={name}
        placeholder="Nome"
        autoCapitalize="words"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        onChangeText={setSurname}
        value={surname}
        placeholder="Sobrenome"
        autoCapitalize="words"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        onChangeText={setAge}
        value={age}
        placeholder="Idade"
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        onChangeText={setPhone}
        value={phone}
        placeholder="Telefone / WhatsApp"
        keyboardType="phone-pad"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: 'gray', padding: 8, borderRadius: 4, width: '80%', marginTop: 15 }}>
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

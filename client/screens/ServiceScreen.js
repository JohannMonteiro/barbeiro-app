import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';

const ServicesScreen = ({ navigation }) => {
  const [selectedService, setSelectedService] = React.useState(null);
  const [consideracoes, setConsideracoes] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleContinue = () => {
    navigation.navigate("Calendário");
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray', marginRight: 140 }}>Bem-vindo, Diego!</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginRight: 75}}>Qual tipo de serviço você precisa?</Text>
      <TouchableOpacity
        onPress={() => handleServiceSelect('beard')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 60,
          borderWidth: 1,
          borderColor: selectedService === 'beard' ? 'green' : 'gray',
          borderRadius: 8,
          paddingVertical: 16,
          paddingHorizontal: 24,
          width: '88%',
        }}
      >
        <Text style={{ fontSize: 16, marginRight: 16 }}>Corte de barba - R$20,00</Text>
        {selectedService === 'beard' && <View style={{ backgroundColor: 'green', borderRadius: 100, width: 16, height: 16 }} />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleServiceSelect('hair')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          borderWidth: 1,
          borderColor: selectedService === 'hair' ? 'green' : 'gray',
          borderRadius: 8,
          paddingVertical: 16,
          paddingHorizontal: 24,
          width: '88%',
        }}
      >
        <Text style={{ fontSize: 16, marginRight: 16 }}>Corte de cabelo - R$35,00</Text>
        {selectedService === 'hair' && <View style={{ backgroundColor: 'green', borderRadius: 100, width: 16, height: 16 }} />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleServiceSelect('hairAndBeard')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          borderWidth: 1,
          borderColor: selectedService === 'hairAndBeard' ? 'green' : 'gray',
          borderRadius: 8,
          paddingVertical: 16,
          paddingHorizontal: 24,
          width: '88%',
        }}
      >
        <Text style={{ fontSize: 16, marginRight: 16 }}>Corte de cabelo + barba - R$50,00</Text>
        {selectedService === 'hairAndBeard' && <View style={{ backgroundColor: 'green', borderRadius: 100, width: 16, height: 16 }} />}
      </TouchableOpacity>
      <TextInput
        style={{ height: 150, width: '88%', borderRadius: 8, fontSize: 16, borderColor: 'gray', borderWidth: 1, marginTop: 15, marginBottom: 10, paddingHorizontal: 20, paddingTop: 10,
    textAlignVertical: 'top' }}
        onChangeText={setConsideracoes}
        value={consideracoes}
        placeholder="Considerações:"
        autoCapitalize="words"
      />
            <TouchableOpacity onPress={handleContinue} style={{ backgroundColor: 'gray', padding: 16, borderRadius: 8, marginTop: 32, width: '88%', marginTop: 30 }}>
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServicesScreen;

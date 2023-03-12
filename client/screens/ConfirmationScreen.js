import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento efetuado com sucesso!</Text>
      <Text style={styles.subtitle}>Dados do agendamento:</Text>
      <Text style={styles.description1}>Corte de cabelo, sábado, 01 de abril de 2023 às 14:00.</Text>
      <Text style={styles.description2}>Endereço: Avenida Central, nº 1.000, Centro, São Paulo/SP</Text>
      <Text style={styles.disclaimer}>Em caso de dúvidas, consulte o menu Contato para esclarecimento ou para falar conosco.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745',
    marginRight: 10,
    marginBottom: 100,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 50,
    marginRight: 100,
  },
  description1: {
    fontSize: 18,
    color: '#777',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginRight: 45,
  },

  description2: {
    fontSize: 18,
    color: '#777',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    marginRight: 45,
  },
  disclaimer: {
    fontSize: 16,
    color: '#999',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    marginRight: 10,
  },
});

export default ConfirmationScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Confirmaragendamento = ({ navigation }) => {
  const [notification, setNotification] = useState(false);

  const handleNoButton = () => {
    navigation.navigate("Calendário")
  };

  const handleYesButton = () => {
    navigation.navigate("Agendamento confirmado")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirma o agendamento?</Text>
      <Text style={styles.subtitle}>Corte de cabelo, sábado, 01 de abril de 2023 às 14h:00.</Text>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, notification ? styles.checkboxActive : null]}
          onPress={() => setNotification(!notification)}
        />
        <Text style={styles.checkboxLabel}>Quero receber notificação do agendamento</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNoButton}>
          <Text style={styles.buttonLabel}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleYesButton} style={[styles.button, styles.buttonPrimary]}>
          <Text style={[styles.buttonLabel, styles.buttonLabelPrimary]}>Sim</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 130,
    marginTop: 10,
    marginRight: 80,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 130,
    fontWeight: 'bold',
    color: 'gray',

  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginRight: 60,
    marginBottom: 130,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'blue',
  },
  checkboxActive: {
    backgroundColor: 'blue',
  },
  checkboxLabel: {
    fontSize: 16,
    color: 'blue',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 4,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonPrimary: {
    backgroundColor: '#007bff',
  },
  buttonLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonLabelPrimary: {
    color: '#fff',
  },
});

export default Confirmaragendamento;

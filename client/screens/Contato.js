import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contato = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.info}>
        Avenida Central, nº 1.000, Centro, São Paulo/SP{'\n'}(11) 90000-0000{'\n'}barbeirinho@email.com.br{'\n'}Barbeirinho
      </Text>
      <Text style={styles.title}>Horário de Atendimento</Text>
      <Text style={styles.info}>
        Terça-feira a Sábado {'\n'}09:00 às 12:00 {'\n'}13:00 às 20:00
      </Text>
      <Text style={styles.title}>Formas de Pagamento</Text>
      <Text style={styles.info}>
        - Cartão de crédito {'\n'}- Cartão de débito {'\n'}- Dinheiro {'\n'}-
        Pix
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
  },
});

export default Contato;

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Telainicial = ({ navigation }) => {

  const entrarlogin = () => {
    navigation.navigate("Login");
  };

  const informacoescontato = () => {
    navigation.navigate("Contato");
  };

  return (
    <View style={styles.container}>
      <Image source={require('./outrohomem.jpg')} style={styles.backgroundImage} />
      <Text style={styles.logo}>Barbeirinho</Text>
      <View style={styles.content}>
        <Text style={styles.title}>Precisa fazer a barba?</Text>
        <Text style={styles.subtitle}>Faça seu agendamento agora. De onde estiver. Sem fila. Sem espera.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={informacoescontato} style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contato</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={entrarlogin} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
 
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 60,
    marginTop: 380,
    marginBottom: 20,
    padding: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 30,
    marginBottom: 30,
    marginTop: 15,
    padding: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 1,
    marginLeft: 70,
 
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 40,
  },
  contactButtonText: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default Telainicial;

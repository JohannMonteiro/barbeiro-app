import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AgendaAdm = ( { navigation } ) => {

    const telaedicao = () => {
        navigation.navigate("Edição Administrador")
      }
    

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Boa tarde, Ronaldo!</Text>
      <Text style={styles.title}>Confira sua agenda:</Text>
      <Text style={styles.subtitle}>Sexta-feira, 01 de abril de 2023</Text>
      <View style={styles.weekDaysContainer}>
            <Text style={styles.weekDay}>sex{'\n'}31</Text>
      <Text style={styles.weekDay}>sáb{'\n'}01</Text>
      <Text style={styles.weekDay}>dom{'\n'}02</Text>
      <Text style={styles.weekDay}>seg{'\n'}03</Text>
      <Text style={styles.weekDay}>ter{'\n'}04</Text>
      <Text style={styles.weekDay}>qua{'\n'}05</Text>
      <Text style={styles.weekDay}>qui{'\n'}06</Text>
    </View>

      <View style={styles.scheduleContainer}>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTime}>13:00 - 13:30</Text>
          <Text style={styles.scheduleTitle}>Corte de barba e cabelo</Text>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleName}>Armando Amorim</Text>
            <TouchableOpacity onPress={telaedicao} style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.schedule}>
        <Text style={styles.scheduleTime}>13:30 - 14:00</Text>
          <Text style={styles.scheduleTitle}></Text>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleName}></Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleName}></Text>
          </View>
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTime}>14:00 - 14:30</Text>
          <Text style={styles.scheduleTitle}>Corte de cabelo</Text>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleName}>Diego Costa</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleTime}>14:30 - 15:00</Text>
          <Text style={styles.scheduleTitle}>Corte de barba</Text>
          <View style={styles.scheduleDetails}>
            <Text style={styles.scheduleName}>Rodolfo Silva</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.updatedAt}>Atualizada em 01/04/2023 às 12:56</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
	},
	title: {
	fontSize: 18,
	fontWeight: 'bold',
	color: 'blue',
	marginTop: 16,
	marginBottom: 20,
	},
	subtitle: {
	fontSize: 15,
  fontWeight: 'bold',
	color: 'gray',
	marginBottom: 16,
	},
	weekDaysContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginBottom: 16,
	},

	weekDay: {
	fontSize: 15,
	color: '#555',
  alignItems: 'center',
  marginRight: 6,
  backgroundColor: '#00bfff',
  borderRadius: 10,
  paddingHorizontal: 1,
  width: 35,
  justifyContent: 'center',
  textAlign: 'center', 
	},

	scheduleContainer: {
	marginBottom: 32,
	},
	schedule: {
	marginBottom: 16,
	},
	scheduleTime: {
	fontSize: 16,
	fontWeight: 'bold',
	color: '#555',
	marginBottom: 8,
	},
	scheduleTitleContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 8,
	},
	scheduleTitle: {
	fontSize: 16,
	fontWeight: 'bold',
	color: 'white',
  backgroundColor: '#b22222',
  textAlignVertical: 'center',
  height: 30,
	},
	scheduleDetails: {
	flexDirection: 'row',
	alignItems: 'center',
  backgroundColor: '#ffe4e1',
  height:30,
	},
	scheduleName: {
	fontSize: 16,
	color: '#555',
	marginRight: 10,
  marginBottom: 10,
	},
	editButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 2, // diminui o padding para tornar o botão menor
    position: 'absolute', // posiciona o botão em relação ao elemento pai
    right: 10, // coloca o botão no canto direito do elemento pai
  },
	editButtonText: {
	fontSize: 16,
	fontWeight: 'bold',
	color: '#fff',
	},
	updatedAt: {
	fontSize: 14,
	color: 'gray',
  marginTop: -20,
	},
	});

	export default AgendaAdm;

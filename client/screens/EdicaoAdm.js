import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EdicaoAdm = ( { navigation } ) => {
return (
<View style={styles.container}>
<Text style={styles.heading}>Dados do agendamento:</Text>
<View style={styles.dataContainer}>
<View style={styles.dataRow}>
<Text style={styles.label}>Nome: </Text>
<Text style={styles.data}>Armando</Text>
</View>
<View style={styles.dataRow}>
<Text style={styles.label}>Sobrenome: </Text>
<Text style={styles.data}>Amorim</Text>
</View>
<View style={styles.dataRow}>
<Text style={styles.label}>Idade: </Text>
<Text style={styles.data}>39 anos</Text>
</View>
<View style={styles.dataRow}>
<Text style={styles.label}>Data de Nascimento: </Text>
<Text style={styles.data}>31/01/1984</Text>
</View>
<View style={styles.dataRow}>
<Text style={styles.label}>Telefone / WhatsApp: </Text>
<Text style={styles.data}>(11) 90000-0001</Text>
</View>
<View style={styles.dataRow}>
<Text style={styles.label}>Email: </Text>
<Text style={styles.data}>armandoamorim@email.com</Text>
</View>
<View style={styles.dataRow}>
<Text style={styles.label}>Considerações: </Text>
<Text style={styles.data}>Ronaldo, meu cabelo está extremamente ressecado.</Text>
</View>
</View>
<View style={styles.typeContainer}>
<Text style={styles.label}>Tipo de Serviço {'\n'}selecionado:</Text>
<View style={styles.typeOptions}>
<TouchableOpacity style={styles.typeButton}>
<Text style={styles.typeButtonText}>Corte de barba</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.typeButton}>
<Text style={styles.typeButtonText}>Corte de cabelo</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.typeButtonSelected}>
<Text style={styles.typeButtonTextSelected}>Corte de barba e cabelo</Text>
</TouchableOpacity>
</View>
</View>
<Text style={styles.time}>Sábado, 01/04/2023, 13:00 - 13:30.</Text>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.deleteButton}>
<Text style={styles.deleteButtonText}>Excluir</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.editButton}>
<Text style={styles.editButtonText}>Alterar</Text>
</TouchableOpacity>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#fff',
},
heading: {
fontSize: 20,
fontWeight: 'bold',
color: 'gray',
marginBottom: 20,
},
dataContainer: {
marginBottom: 40,
padding: 10,
backgroundColor: '#f9f9f9',
},
dataRow: {
flexDirection: 'row',
marginBottom: 15,
},
label: {
fontWeight: 'bold',
},
data: {
flex: 1,
},
typeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'flex-start',
marginBottom: 40,
},
typeOptions: {
flexDirection: 'column',
},

typeButton: {
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 5,
backgroundColor: '#f9f9f9',
borderWidth: 1,
borderColor: 'black',
marginRight: 10,
marginBottom: 5,
},

typeButtonSelected: {
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 5,
backgroundColor: 'green',
borderWidth: 1,
borderColor: 'black',
marginRight: 10,
},
typeButtonText: {
color: '#555',
},
typeButtonTextSelected: {
color: '#fff',
},
time: {
fontWeight: 'bold',
fontSize: 18,
color: 'green',
marginTop:10,
marginBottom: 60,
},
buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
deleteButton: {
backgroundColor: 'red',
padding: 10,
borderRadius: 5,
flex: 1,
marginRight: 10,
},
deleteButtonText: {
color: '#fff',
fontSize: 16,
textAlign: 'center',
fontWeight: 'bold',
},
editButton: {
backgroundColor: '#ccc',
padding: 10,
borderRadius: 5,
flex: 1,
marginLeft: 10,
},
editButtonText: {
color: '#555',
fontSize: 16,
fontWeight: 'bold',
textAlign: 'center',
fontWeight: 'bold',
},
});

export default EdicaoAdm;
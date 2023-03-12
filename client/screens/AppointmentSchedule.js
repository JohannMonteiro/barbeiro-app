import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const AppointmentSchedule = ({ navigation }) => {
  const startDate = new Date('2023-04-01');
  const endDate = new Date('2023-04-07');

  const weekDays = [];

  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    const dayOfWeek = daysOfWeek[day.getDay()];
    weekDays.push({ dayOfWeek, date: new Date(day) });
  }

  const times = [];
  const startTime = new Date('2023-03-31T09:00:00');
  const endTime = new Date('2023-03-31T19:30:00');
  const interval = 30 * 60 * 1000;

  for (let time = startTime; time <= endTime; time.setTime(time.getTime() + interval)) {
    times.push(new Date(time));
  }

  const confirmaragendamento = () => {
    navigation.navigate("Confirmar agendamento")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sexta-feira, 01 de abril de 2023</Text>
      <View style={styles.weekDays}>
        {weekDays.map(({ dayOfWeek, date }) => (
          <View style={styles.day} key={dayOfWeek}>
            <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
            <Text style={styles.date}>{date.getDate()}</Text>
          </View>
        ))}
      </View>
      <View style={styles.times}>
        {times.map((time) => (
          <View style={styles.time} key={time.getTime()}>
            <Text style={styles.timeText}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={confirmaragendamento} style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weekDays: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  day: {
    alignItems: 'center',
    marginRight: 6,
    backgroundColor: '#00bfff',
    borderRadius: 10,
    paddingHorizontal: 1,
    width: 40,

  },
  
  dayOfWeek: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
  },
  times: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  time: {
    width: '20%',
    height: 30,
    backgroundColor: '#b22222',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    marginLeft: 50,
    marginVertical: 6,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  timeText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '88%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AppointmentSchedule;
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import data from "../MOCK_DATA.json";

export default function Greet({ name }) {
  return (
    <ScrollView>
      <Text style={styles.header}>Hello, {name}!</Text>
      {data.map((item) => (
        <ScrollView key={item.id} style={styles.card}>
          <Text style={styles.title}>
            {item.first_name} {item.last_name}
          </Text>
          <Text>Email: {item.email}</Text>
          <Text>Gender: {item.gender}</Text>
          <Text>IP Address: {item.ip_address}</Text>
        </ScrollView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     padding: 10,
  //     backgroundColor: '#f5f5f5',
  // },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#c97575",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#31a465",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

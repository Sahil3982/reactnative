import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Button,
  TextInput,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import { Link, useNavigation } from "expo-router";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const data = [
  {
    id: 1,
    email: "sahil@gmail.com",
    pass: "123@sahil",
  },
];

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email, "Password:", pass);

    if (data[0].email === email && data[0].pass === pass) {
      console.log("Login successful");
      useNavigation();
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.loginPage}>🌟 Welcome to the Login Page 🌟</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.inputBox}
          value={pass}
          onChangeText={setPass}
          secureTextEntry
        />

        <Button onPress={handleSubmit} title="Login" color="green" />

        <Link href="/forget">
          <Text style={styles.for}>Forget Password</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  loginPage: {
    textAlign: "center",
    padding: 15,
    marginTop: 30,
    fontSize: 28,
    fontWeight: "bold",
    color: "#4b0082",
  },
  formContainer: {
    marginTop: 20,
  },
  for: {
    marginTop: 80,
    textAlign: "right",
    color: "blue",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  inputBox: {
    borderColor: "#4b0082",
    backgroundColor: "#e6e6fa",
    marginBottom: 20,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
  },
});



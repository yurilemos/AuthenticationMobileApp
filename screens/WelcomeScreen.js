import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { API_URL } from "@env";

import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const { token } = useContext(AuthContext);

  useEffect(() => {
    async function getMessage() {
      const response = await axios.get(`${API_URL}?auth=${token}`);
      setFetchedMessage(response.data);
    }
    getMessage();
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

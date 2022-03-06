import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../FireBase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if (authUser) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);
  const signIn = () => {//console.log("hey")
    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error))
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image source={require("./Model3.jpeg")} />

      <Image
        source={require("./vaillantlogo.png")}
        style={{ width: 300, height: 80 }}
      />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {/* onChange={e => setFirstName(e.target.value)} */}

        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
      />
      {/* by default flex column */}
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },

  inputContainer: { width: 300 },
  button: { width: 200, margin: 10 }
});

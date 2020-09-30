/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

const LoginScreen = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={{ height: "100%", width: "100%", flex: 1 }}
        behavior="position"
      >
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView
            behavior="height"
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={{ marginTop: 20 }}>
              <View style={styles.container}>
                <Image
                  resizeMode="center"
                  source={require("../assets/ablog.png")}
                  style={{ height: 150, width: 150, position: "absolute" }}
                />
              </View>

              <View
                style={{
                  paddingTop: 80,
                  paddingBottom: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Phone number"
                  onChangeText={(value) => setNumber(value)}
                  value={number}
                  keyboardType={"decimal-pad"}
                  placeholderTextColor="black"
                />
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  onChangeText={(value) => setPassword(value)}
                  value={password}
                  keyboardType={"default"}
                  placeholderTextColor="black"
                  secureTextEntry={true}
                />
              </View>

              <View
                style={{
                  paddingBottom: 20,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.inputButton}
                  onPress={() => navigation.navigate("Home")}
                >
                  <View style={{ padding: 10 }}>
                    <Text style={styles.textInput}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => navigation.navigate("Forgot")}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontFamily: "Pacifico-Regular" }}
                  >
                    {" "}
                    Forgot Password
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  alignItems: "center",
                  paddingTop: 100,
                }}
              >
                <TouchableOpacity
                  style={[styles.inputButton1, { marginBottom: 40 }]}
                  onPress={() => navigation.navigate("Signup")}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.textInput}>Signup</Text>
                    <Icon name="arrow-circle-right" size={25} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  inputButton: {
    borderRadius: 40,
    backgroundColor: "#04042b",
    width: 300,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    shadowColor: "#fff",
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
    fontFamily: "Pacifico-Regular",
  },
  inputButton1: {
    backgroundColor: "#000",
    width: 300,
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: "Pacifico-Regular",
  },
  textInput: {
    fontSize: 15,
    justifyContent: "center",
    color: "#fff",
    textAlignVertical: "center",
    alignItems: "center",
    fontFamily: "Pacifico-Regular",
  },
  textInput1: {
    fontSize: 25,
    justifyContent: "center",
    color: "#fff",
    textAlignVertical: "center",
    alignItems: "center",
    fontFamily: "Pacifico-Regular",
  },
  inputStyle: {
    width: 300,
    height: 50,
    backgroundColor: "#fff",
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 15,
    fontWeight: "500",
    borderColor: "#757575",
    borderWidth: 1,
    fontFamily: "Pacifico-Regular",
  },
});

export default LoginScreen;

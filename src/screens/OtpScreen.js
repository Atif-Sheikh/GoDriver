/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const OtpScreen = ({ navigation }) => {
  const [number, setNumber] = useState('');

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={{ height: '100%', width: '100%', flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />

        <View style={{ marginTop: 20 }}>
          <View style={styles.container}>
            <Image
              behavior='position'
              source={require('../assets/ablog.png')}
              style={{ height: 100, width: 100 }}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'Pacifico-Regular',
              }}
            >
              Enter OTP to Verify
            </Text>
          </View>

          <KeyboardAvoidingView behavior='position'>
            <View
              style={{
                paddingTop: 100,
                paddingBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextInput
                style={styles.inputStyle}
                placeholder='Enter OneTimePassword'
                onChangeText={(value) => setNumber(value)}
                value={number}
                maxLength={4}
                keyboardType={'number-pad'}
                placeholderTextColor='black'
              />
            </View>
          </KeyboardAvoidingView>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 10,
            }}
          >
            <TouchableOpacity
              style={[styles.inputButton1, { marginBottom: 40 }]}
              onPress={() => navigation.navigate('Login')}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.textInput}>Verify</Text>
                <Icon name='check-circle' size={25} color='#fff' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },

  inputButton: {
    borderRadius: 40,
    backgroundColor: '#2196F3',
    width: 300,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    shadowColor: '#fff',
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
  },
  inputButton1: {
    backgroundColor: '#000',
    width: 300,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 15,
    justifyContent: 'center',
    color: '#fff',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  textInput1: {
    fontSize: 25,
    justifyContent: 'center',
    color: '#fff',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 15,
    fontWeight: '500',
    borderColor: '#757575',
    borderWidth: 1,
  },
});

export default OtpScreen;

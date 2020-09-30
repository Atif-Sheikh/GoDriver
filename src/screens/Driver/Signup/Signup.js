import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
  FlatList,
  ToolbarAndroid,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Text,
  Card,
  Left,
  Right,
  Body,
  Input,
  Footer,
  View,
  FooterTab,
  Badge,
  CheckBox,
  Picker,
} from 'native-base';

import * as DocumentPicker from 'expo-document-picker';

import * as ImagePicker from 'expo-image-picker';

import * as Permissions from 'expo-permissions';

import HeaderBar from '../../../components/HeaderBar';

// Redux
import { connect } from 'react-redux';
import { register } from '../../../redux/actions/auth';

// import NavigationService from '@Service/Navigation'

// import Style from '@Theme/Style'
// import Styles from '@Screen/Public/Register/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const Register = ({ navigation, onRegister }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [gstNumber, setGSTNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedValue, setValue] = useState(0);
  const [image, setImage] = useState(null);
  const [isValidNo, setIsValidNo] = useState(true);

  // On Register
  const onSignup = () => {
    if (
      name.trim() === '' ||
      phoneNumber.trim() === '' ||
      panNumber.trim() === '' ||
      aadharNumber.trim() === '' ||
      gstNumber.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      Alert.alert('All fields are required');
    } else {
      if (phoneNumber.length !== 10) {
        Alert.alert('Phone number should be 10 digit');
      } else if (panNumber.length !== 10) {
        Alert.alert('PAN number should be 10 digit');
      } else if (aadharNumber.length !== 12) {
        Alert.alert('Aadhar number should be 12 digit');
      } else if (gstNumber.length !== 15) {
        Alert.alert('GST number should be 15 digit');
      } else if (password !== confirmPassword) {
        Alert.alert("Password does's not match");
      } else if (image === null) {
        Alert.alert("Image does's not match");
      } else {
        let registerData = {
          user_type: selectedValue,
          user_name: name,
          user_phone:  phoneNumber,
          user_pan:  panNumber,
          user_aadhar: aadharNumber,
          user_gst: gstNumber,
          password,
          document_proof: image,
        };
        onRegister(registerData, () => {
          setName('');
          setPhoneNumber('');
          setPanNumber('');
          setAadharNumber('');
          setGSTNumber('');
          setPassword('');
          setConfirmPassword('');
          setImage(null);
          navigation.navigate('Signin')
        });
        
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const pickCam = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, [])

  const getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const checkPhoneNo = async (phoneNo) => {
    try {
      let resp = await fetch("https://gotruck.netismsoft.com/api/user/phone-check", {
        method: "POST",
        body: JSON.stringify({
          user_phone: phoneNo
        })
      });
      // let formated = await resp.json();

      // console.log(resp, "RESPPPP")
      if (!resp.ok) {
        setIsValidNo(false)

      }
    } catch (err) {
      console.log(err, "ERROR")
    }
  };

  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={Styles.layoutDefault}>
        <Image
          source={require('../../../../assets/bg.png')}
          style={Styles.bgImg}
        />

        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <Icon
              name='account-circle'
              type='MaterialCommunityIcons'
              style={Styles.hImg}
            />
            <Text style={Styles.hTopText}>Sign Up!</Text>
            <Text style={Styles.hTopDesc}>Create a new account</Text>
          </View>
          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.fRow}>
                <Icon
                  name='account'
                  type='MaterialCommunityIcons'
                  style={Styles.fIcon}
                />
                <TextInput
                  style={Styles.fInput}
                  textContentType='name'
                  placeholder='Name'
                  keyboardType='default'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setName(e)}
                  value={name}
                />
              </View>

              <View style={Styles.fRow}>
                <Icon
                  name='mobile'
                  type='FontAwesome'
                  style={[Styles.fIcon, Styles.mobileIcon]}
                />
                  
                <TextInput
                  style={isValidNo ? Styles.fInput : [Styles.fInput, { backgroundColor: 'red' }]}
                  textContentType='telephoneNumber'
                  keyboardType='number-pad'
                  placeholder='Mobile Number'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setPhoneNumber(e)}
                  value={phoneNumber}
                  maxLength={10}
                  onEndEditing={() => checkPhoneNo(phoneNumber)}
                />
              </View>
              <View style={Styles.fRow}>
                <Icon
                  name='perm-identity'
                  type='MaterialIcons'
                  style={Styles.fIcon}
                />
                <TextInput
                  style={Styles.fInput}
                  textContentType='none'
                  keyboardType='name-phone-pad'
                  placeholder='PAN number'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setPanNumber(e)}
                  value={panNumber}
                  maxLength={10}
                />
              </View>
              <View style={Styles.fRow}>
                <Icon
                  name='perm-identity'
                  type='MaterialIcons'
                  style={Styles.fIcon}
                />
                <TextInput
                  style={Styles.fInput}
                  textContentType='none'
                  keyboardType='number-pad'
                  placeholder='Aadhar Number'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setAadharNumber(e)}
                  value={aadharNumber}
                  maxLength={12}
                />
              </View>
              <View style={Styles.fRow}>
                <Icon
                  name='perm-identity'
                  type='MaterialIcons'
                  style={Styles.fIcon}
                />

                <TextInput
                  style={Styles.fInput}
                  textContentType='none'
                  keyboardType='number-pad'
                  placeholder='GST Number'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setGSTNumber(e)}
                  value={gstNumber}
                  maxLength={15}
                />
              </View>
              <View style={Styles.fRow}>
                <Icon
                  name='key'
                  type='MaterialCommunityIcons'
                  style={Styles.fIcon}
                />

                <TextInput
                  style={Styles.fInput}
                  textContentType='password'
                  keyboardType='name-phone-pad'
                  placeholder='Password'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setPassword(e)}
                  value={password}
                  secureTextEntry={true}
                  maxLength={10}
                />
              </View>
              <View style={Styles.fRow}>
                <Icon
                  name='key'
                  type='MaterialCommunityIcons'
                  style={Styles.fIcon}
                />
                <TextInput
                  style={Styles.fInput}
                  textContentType='password'
                  keyboardType='name-phone-pad'
                  placeholder='Confirm Password'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setConfirmPassword(e)}
                  value={confirmPassword}
                  secureTextEntry={true}
                  maxLength={10}
                />
              </View>

              <Picker
                selectedValue={selectedValue}
                style={Styles.picker}
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                itemTextStyle={Styles.pickerItem}
                itemStyle={Styles.pickerItem}
                mode="dropdown"
                placeholderStyle={Styles.pickerItem}
              >
                <Picker.Item label="Customer" value={0} />
                <Picker.Item label="Transporter" value={1} />
              </Picker>

              <View style={Styles.viewContent}>
                <TouchableOpacity style={Styles.fileBtn} onPress={() => pickImage()}>
                  <Icon
                    name='file'
                    type='FontAwesome'
                    style={Styles.UploadIcon}
                  />
                  <Text style={Styles.fileSelect}>Select File</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={Styles.fileBtn} onPress={() => pickCam()}>
                  <Icon
                    name='camera'
                    type='FontAwesome'
                    style={Styles.UploadIcon}
                    style={Styles.myCam}
                  />
                  <Text style={Styles.mbCamera}>Camera</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={Styles.fBtn} onPress={onSignup}>
                <Text style={Styles.fBtnText}>Sign Up!</Text>
                <Icon
                  name='arrow-right'
                  type='FontAwesome'
                  style={Styles.fBtnIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.account}>
            <Text style={Styles.accountText}>Already have an account?</Text>
            <TouchableOpacity
              style={Styles.accountBtn}
              onPress={() => {
                navigation.navigate('Signin');
              }}
            >
              <Text style={Styles.accountBtnText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default connect(null, { onRegister: register })(Register);

const Styles = StyleSheet.create({
  picker: {
    height: 40,
    width: '100%',
    marginBottom: -10,
    fontFamily: 'Montserrat-Regular'
  },
  pickerItem: {
    color: '#b3b3b3',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
  },
  bgLayout: {},
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: 220,
  },
  viewContent: {
    flex: 1,
    flexDirection: 'row',
  },
  fileSelect: {
    justifyContent: 'center',
    color: '#b3b3b3',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    position: 'absolute',
    marginLeft: 40,
  },

  myCam: {
    marginStart: 100,
    fontSize: 15,
    color: '#b3b3b3'
  },

  mbCamera: {
    justifyContent: 'center',
    color: '#b3b3b3',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    position: 'absolute',
    marginLeft: 140,
  },

  /** Header **/
  hTop: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  hImg: {
    fontSize: 86,
    color: '#FFD328',
  },
  hRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hContent: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  hTopText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
    marginBottom: 10,
  },
  hTopDesc: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 10,
  },

  /** Form **/
  regForm: {
    width: '100%',
    marginBottom: 15,
  },
  regText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
  },
  infoBox: {
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 3,
    padding: 15,
  },
  fSelect: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(36,42,56,0.05)',
  },
  fRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
    }),
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(36,42,56,0.07)',
  },
  fPicker: {
    flex: 1,
  },
  fPickerItem: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
  fIcon: {
    color: 'rgba(36,42,56,0.4)',
    fontSize: 24,
    width: 30,
    marginRight: 5,
  },
  mobileIcon: {
    textAlign: 'center',
    fontSize: 35,
    marginLeft: -4
  },
  fInput: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },

  fBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF8901',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  fileBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  fBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
  fBtnIcon: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#FFF',
  },
  UploadIcon: {
    color: '#b3b3b3',
    fontSize: 16,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  accountText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(36,42,56,0.8)',
  },
  accountBtn: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  accountBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(36,42,56,0.99)',
  },
  // *** Content *** //
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: '#F1F2F6',
  },

  // *** text header *** //
  // *** status and action bar *** //
  navigation: {
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    width: '100%',
    borderBottomWidth: 0,
    borderColor: '#FFF',
    backgroundColor: '#242A38',
  },
  navigationTransparent: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    width: '100%',
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  nav: {
    flex: 1,
    marginLeft: -5,
    marginRight: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTitle: {
    color: '#FFF',
    fontFamily: 'Amigos',
    fontSize: 18,
  },
  navSubTitle: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navMiddle: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLeftBtn: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  navRight: {
    flex: 1.5,
    alignItems: 'center',
  },
  navIcon: {
    color: '#FFD328',
  },
  navIconDark: {
    color: '#000',
  },
  navIconLight: {
    color: '#FFF',
  },
  navIconPrimary: {
    color: '#000',
  },
  navRightBtn: {
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 8,
    borderRadius: 5,
  },
  navAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  textHeader: {
    fontSize: 24,
    color: '#FFF',
  },
  textDesc: {
    fontSize: 16,
    color: '#FFF',
  },

  // *** footer *** //
  footerBg: {
    backgroundColor: '#FFF',
  },
  fTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  fIcons: {
    backgroundColor: '#FFF',
  },
  iconActive: {
    ...Platform.select({
      ios: {
        color: '#cc99ff',
        fontSize: 24,
      },
      android: {
        color: '#cc99ff',
        fontSize: 18,
        alignSelf: 'center',
      },
    }),
  },
  iconInactive: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: '#CCC',
      },
      android: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#CCC',
      },
    }),
  },
  textActive: {
    fontSize: 11,
    color: '#cc99ff',
  },
  textInactive: {
    fontSize: 11,
    color: '#CCC',
  },
});

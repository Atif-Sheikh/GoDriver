import React, { useState } from 'react';
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

// Redux
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import Signup from '../Signup/Signup';

// import NavigationService from "@Service/Navigation";

// import Style from '@Theme/Style'
// import Styles from '@Screen/Public/Login/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const Signin = ({ navigation, login }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // On Sign In
  const onSignin = () => {
    if (phoneNumber.trim() !== '' && password.trim() !== '') {
      // console.log('SUBMITTED :', phoneNumber, password);
      login(phoneNumber, password);
      setPhoneNumber('');
      setPassword('');
      //navigation.navigate('Draw');
    } else {
      Alert.alert('Please enter phone number and password');
    }
  };
  return (
    <Container>
      <StatusBar backgroundColor='#242A38' animated barStyle='light-content' />
      <Content contentContainerStyle={Styles.layoutDefault}>
        <Image
          source={require('../../../../assets/bg.png')}
          style={Styles.bgImg}
        />
        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <Image
              source={require('../../../../assets/logo5.png')}
              style={{
                width: '30%',
                height: '32%',
                marginTop: 20,
              }}
            />

            {/* <Icon
              name="account-circle"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            /> */}
            <Text style={Styles.hTopText}> Driver Login</Text>
            <Text style={Styles.hTopDesc}>Login to your account</Text>
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
                  placeholder='Mobile Number'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setPhoneNumber(e)}
                  //keyboardType='number-pad'
                  value={phoneNumber}
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
                  placeholder='Password'
                  placeholderTextColor='rgba(36,42,56,0.4)'
                  onChangeText={(e) => setPassword(e)}
                  secureTextEntry={true}
                  value={password}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.forgotPasswordLayout}
                  onPress={() => {
                    navigation.navigate('ForgotPass');
                  }}
                >
                  <Text style={Styles.forgotPassword}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={Styles.fBtn} onPress={onSignin}>
                <Text style={Styles.fBtnText}>Sign in</Text>
                <Icon
                  name='arrow-right'
                  type='FontAwesome'
                  style={Styles.fBtnIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={Styles.connect}>
            <View style={Styles.connectOr}>
              <Text style={Styles.connectText}>OR</Text>
            </View>
            <Text style={Styles.connectHeader}>Connect with</Text>
            <View style={Styles.smn}>
              <TouchableOpacity
                style={[Styles.smnBtn, Styles.facebook]}
                // onPress={() => {
                //   NavigationService.navigate("PublicLogin");
                // }}
              >
                <Icon
                  name="facebook"
                  type="MaterialCommunityIcons"
                  style={Styles.smnIcon}
                />
                <Text style={Styles.smnText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Styles.smnBtn, Styles.googlePlus]}
                // onPress={() => {
                //   NavigationService.navigate("PublicLogin");
                // }}
              >
                <Icon
                  name="google-plus"
                  type="MaterialCommunityIcons"
                  style={Styles.smnIcon}
                />
                <Text style={Styles.smnText}>Google+</Text>
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={Styles.account}>
            <Text style={Styles.accountText}>Don't you have an account?</Text>
            <TouchableOpacity
              style={Styles.accountBtn}
              onPress={() => {
                navigation.navigate('Register');
              }}
            >
              <Text style={Styles.accountBtnText}>Sign up now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default connect(null, { login })(Signin);

const Styles = StyleSheet.create({
  bgLayout: {},
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: 220,
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
    marginTop: -60,
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
    marginBottom: 10,
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
    marginTop: 15,
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
  forgotPassword: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    alignSelf: 'flex-end',
    color: 'rgba(36,42,56,0.8)',
  },
  forgotPasswordLayout: {
    marginLeft: 190,
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

  connect: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectOr: {
    flex: 1,
    width: '100%',
  },
  connectText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    marginBottom: 15,
    color: 'rgba(36,42,56,0.99)',
    alignSelf: 'center',
  },
  connectLine: {
    flex: 1,
    position: 'absolute',
    borderBottomWidth: 1,
    borderColor: '#FF0000',
  },
  connectHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(36,42,56,0.99)',
    alignSelf: 'center',
    marginBottom: 15,
  },
  smn: {
    flexDirection: 'row',
  },
  smnBtn: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
  },
  smnIcon: {
    fontSize: 18,
    color: '#FFF',
    marginRight: 5,
  },
  smnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
  facebook: {
    backgroundColor: '#395498',
  },
  googlePlus: {
    backgroundColor: '#D64937',
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
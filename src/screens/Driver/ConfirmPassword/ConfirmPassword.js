import React from "react";
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
} from "react-native";
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
} from "native-base";

import Style from "../../../style/Style";
// import Styles from "@Screen/Public/ForgotPassword/Style";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

console.log(Dimensions.get("window"));

const ConfirmPassword = ({ navigation }) => {
  return (
    <Container>
      <Header style={Style.navigation}>
        <StatusBar
          backgroundColor="#242A38"
          animated
          barStyle="light-content"
        />
        <View style={Style.nav}>
          <View style={Style.navLeft}>
            <TouchableOpacity
              style={Style.navLeft}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon
                name="arrow-back"
                type="MaterialIcons"
                style={Style.navIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={Style.navMiddle} />
          <View style={Style.navRight} />
        </View>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
        <Image
          source={require("../../../../assets/bg.png")}
          style={Styles.bgImg}
        />
        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <Icon
              name="code-tags-check"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <Text style={Styles.hTopText}>One Time password?</Text>
            <Text style={Styles.hTopDesc}>
              Just check your one time password in your message book and enter
              it.
            </Text>
          </View>
          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.fRow}>
                <Icon
                  name="key"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
                <TextInput
                  style={Styles.fInput}
                  placeholder="Enter One time password"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <TouchableOpacity
                style={Styles.fBtn}
                onPress={() => {
                  navigation.navigate("Signin");
                  Alert.alert("Password Changed");
                }}
              >
                <Text style={Styles.fBtnText}>Confirm</Text>
                <Icon
                  name="arrow-right"
                  type="FontAwesome"
                  style={Styles.fBtnIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={Styles.account}>
            <Text style={Styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity
              style={Styles.accountBtn}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={Styles.accountBtnText}>Sign up now!</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </Content>
    </Container>
  );
};

export default ConfirmPassword;

const Styles = StyleSheet.create({
  /** Content **/
  bgLayout: {},
  bgImg: {
    position: "absolute",
    width: "100%",
    height: 220,
  },

  /** Header **/
  hTop: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  hImg: {
    fontSize: 86,
    color: "#FFD328",
  },
  hRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hContent: {
    justifyContent: "center",
    marginLeft: 10,
  },
  hTopText: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
    marginBottom: 10,
  },
  hTopDesc: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "rgba(255,255,255,0.5)",
    lineHeight: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  /** Form **/
  regForm: {
    width: "100%",
    marginBottom: 15,
  },
  regText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
  },
  infoBox: {
    backgroundColor: "#FFF",
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 20,
    borderRadius: 3,
    padding: 15,
    marginBottom: 20,
  },
  fSelect: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(36,42,56,0.05)",
  },
  fRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
    }),
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(36,42,56,0.07)",
  },
  fPicker: {
    flex: 1,
  },
  fPickerItem: {
    flex: 1,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
  },
  fIcon: {
    color: "rgba(36,42,56,0.4)",
    fontSize: 24,
    width: 30,
    marginRight: 5,
  },
  fInput: {
    flex: 1,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },

  fBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF8901",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginTop: 15,
  },
  fBtnText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: "#FFF",
  },
  fBtnIcon: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#FFF",
  },
  forgotPassword: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    alignSelf: "flex-end",
    color: "rgba(36,42,56,0.8)",
  },

  account: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  accountText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "rgba(36,42,56,0.8)",
  },
  accountBtn: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  accountBtnText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: "rgba(36,42,56,0.99)",
  },

  connect: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  connectOr: {
    flex: 1,
    width: "100%",
  },
  connectText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    marginBottom: 15,
    color: "rgba(36,42,56,0.99)",
    alignSelf: "center",
  },
  connectLine: {
    flex: 1,
    position: "absolute",
    borderBottomWidth: 1,
    borderColor: "#FF0000",
  },
  connectHeader: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: "rgba(36,42,56,0.99)",
    alignSelf: "center",
    marginBottom: 15,
  },
  smn: {
    flexDirection: "row",
  },
  smnBtn: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
  },
  smnIcon: {
    fontSize: 18,
    color: "#FFF",
    marginRight: 5,
  },
  smnText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: "#FFF",
  },
  facebook: {
    backgroundColor: "#395498",
  },
  googlePlus: {
    backgroundColor: "#D64937",
  },
});

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
  Radio,
  Right,
  Body,
  Picker,
  Input,
  Item,
  Footer,
  View,
  FooterTab,
  Badge,
} from "native-base";

// import NavigationService from '@Service/Navigation'

import Style from "../../../style/Style";
// import Styles from '@Screen/Customer/Settings/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Settings = () => {
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
              //   onPress={() => {
              //     NavigationService.navigate("CustomerDashboard");
              //   }}
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
            <Icon name="gears" type="FontAwesome" style={Styles.hImg} />
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Settings</Text>
              <Text style={Styles.hTopDesc}>
                Create your truck informations
              </Text>
            </View>
          </View>

          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Change Password</Text>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Password"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Confirm Password"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
            </View>
          </View>

          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Notifications</Text>
              </View>
              <View style={Styles.fRow}>
                <Radio
                  color={"#f0ad4e"}
                  selectedColor={"#5cb85c"}
                  selected={true}
                />
                <Text style={Styles.fLabel}>When someone send enquiry</Text>
              </View>
              <View style={Styles.fRow}>
                <Radio
                  color={"#f0ad4e"}
                  selectedColor={"#5cb85c"}
                  selected={false}
                />
                <Text style={Styles.fLabel}>When someone viewed my trips</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={Styles.fBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerSettings");
            // }}
          >
            <Text style={Styles.fBtnText}>Save</Text>
            <Icon name="check" type="FontAwesome" style={Styles.fBtnIcon} />
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default Settings;

const Styles = StyleSheet.create({
  /** * -- Content -- ***/
  bgLayout: {},
  bgImg: {
    position: "absolute",
    width: "100%",
    height: 220,
  },

  /** Header **/
  hTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 20,
  },
  hImg: {
    fontSize: 48,
    color: "#FFD328",
  },
  hContent: {
    justifyContent: "center",
    marginLeft: 10,
  },
  hTopText: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
    marginBottom: 5,
  },
  hTopDesc: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(255,255,255,0.6)",
    marginBottom: 10,
  },
  hIcon: {
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#e64d00",
    borderRadius: 25,
    textAlign: "center",
    padding: 2,
  },
  imgEdit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    position: "absolute",
    borderRadius: 12,
    backgroundColor: "#FF8901",
    left: 0,
    bottom: 0,
  },
  imgEditIcon: {
    color: "#FFF",
    fontSize: 16,
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
    marginBottom: 20,
    borderRadius: 3,
  },
  infoHeader: {
    backgroundColor: "#242A38",
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  infoHeaderText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#FFF",
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
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(36,42,56,0.05)",
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
  },
  fInput: {
    flex: 1,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    paddingVertical: 8,
  },
  fLabel: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.9)",
    paddingVertical: 5,
  },

  fBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF8901",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  fBtnText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: "#FFF",
  },
  fBtnIcon: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#FFF",
  },
});

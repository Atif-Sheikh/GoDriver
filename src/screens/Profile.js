import React, { useEffect } from "react";
import {
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  YellowBox,
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
import HeaderBar from "../components/HeaderBar";

// import NavigationService from "@Service/Navigation";

// import Style from '@Theme/Style'
// import Styles from '@Screen/Transporter/Profile/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Profile = ({ navigation }) => {
  return (
    <Container>
      <HeaderBar/>
      <Content contentContainerStyle={Styles.layoutDefault}>
        <Image source={require("../../assets/bg.png")} style={Styles.bgImg} />
        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <View>
              <Image
                source={{
                  uri:
                    "https://sm.ign.com/t/ign_pk/screenshot/default/o-fawad-khan-facebook_bcf6.1920.jpg",
                }}
                style={Styles.hImg}
              />
              <TouchableOpacity
                style={Styles.imgEdit}
                //   onPress={() => {
                //     NavigationService.navigate("TransporterProfile");
                //   }}
              >
                <Icon
                  name="pencil"
                  type="MaterialCommunityIcons"
                  style={Styles.imgEditIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", marginLeft: 10 }}>
              <Text style={Styles.hTopText}>Hey Aravind!</Text>
              <Text style={Styles.hTopDesc}>Manage your profile</Text>
            </View>
          </View>

          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Basic Information's</Text>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Name"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="DOB"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
            </View>
          </View>

          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Address Information's</Text>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Address"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="City"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="State"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fSelect}>
                <View style={Styles.fPicker}>
                  <Picker style={Styles.fPickerItem}>
                    <Picker.Item label="India" value="key0" />
                  </Picker>
                </View>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Postal Code"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
            </View>
          </View>

          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Contact Information's</Text>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Phone Number"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Mobile Number"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
            </View>
          </View>

          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>
                  Identify Information's
                </Text>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Driving Licence"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Expiry on"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={Styles.fBtn}
            //   onPress={() => {
            //     NavigationService.navigate("");
            //   }}
          >
            <Text style={Styles.fBtnText}>Save</Text>
            <Icon name="check" type="FontAwesome" style={Styles.fBtnIcon} />
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default Profile;
const Styles = StyleSheet.create({
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
    marginBottom: 30,
    marginHorizontal: 20,
  },
  hImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
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
  // *** Content *** //
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: "#F1F2F6",
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
    width: "100%",
    borderBottomWidth: 0,
    borderColor: "#FFF",
    backgroundColor: "#242A38",
  },
  navigationTransparent: {
    backgroundColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    width: "100%",
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  nav: {
    flex: 1,
    marginLeft: -5,
    marginRight: -5,
    flexDirection: "row",
    alignItems: "center",
  },
  navTitle: {
    color: "#FFF",
    fontFamily: "Amigos",
    fontSize: 18,
  },
  navSubTitle: {
    color: "#FFF",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 10,
  },
  navLeft: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  navMiddle: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navLeftBtn: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  navRight: {
    flex: 1.5,
    alignItems: "center",
  },
  navIcon: {
    color: "#FFD328",
  },
  navIconDark: {
    color: "#000",
  },
  navIconLight: {
    color: "#FFF",
  },
  navIconPrimary: {
    color: "#000",
  },
  navRightBtn: {
    borderWidth: 1,
    borderColor: "#FFF",
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
    color: "#FFF",
  },
  textDesc: {
    fontSize: 16,
    color: "#FFF",
  },

  // *** footer *** //
  footerBg: {
    backgroundColor: "#FFF",
  },
  fTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  fIcons: {
    backgroundColor: "#FFF",
  },
  iconActive: {
    ...Platform.select({
      ios: {
        color: "#cc99ff",
        fontSize: 24,
      },
      android: {
        color: "#cc99ff",
        fontSize: 18,
        alignSelf: "center",
      },
    }),
  },
  iconInactive: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: "#CCC",
      },
      android: {
        fontSize: 18,
        alignSelf: "center",
        color: "#CCC",
      },
    }),
  },
  textActive: {
    fontSize: 11,
    color: "#cc99ff",
  },
  textInactive: {
    fontSize: 11,
    color: "#CCC",
  },
});

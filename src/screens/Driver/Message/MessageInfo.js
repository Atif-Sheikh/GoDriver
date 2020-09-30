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
  Right,
  Body,
  Input,
  Footer,
  View,
  FooterTab,
  Badge,
  CheckBox,
} from "native-base";

// import NavigationService from '@Service/Navigation'

import Style from "../../../style/Style";
import HeaderBar from "../../../components/HeaderBar";
// import Styles from '@Screen/Customer/MessageInfo/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const MessageInfo = ({ navigation }) => {
  return (
    <Container>
      <HeaderBar/>

      <Content contentContainerStyle={Style.layoutDefault}>
        <Image
          source={require("../../../../assets/bg.png")}
          style={Styles.bgImg}
        />
        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <Image
              source={{
                uri:
                  "https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/03/28/Pictures/india-britain-ride-hailing_0a74f076-70d6-11ea-9530-7febd198d354.jpg",
              }}
              style={Styles.hImg}
            />
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Aravind</Text>
              <Text style={Styles.hTopDesc}>22 Jan 2019, 07:00 AM</Text>
            </View>
          </View>

          <View style={Styles.tripItem}>
            <View style={Styles.truckInfo}>
              <View>
                <Text style={Styles.truckTrip}>SHIP #123</Text>
                <Text style={Styles.truckData}>reightliner CAS ACADIA 125</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={Styles.truckData}>Tonnage 1500</Text>
                </View>
              </View>
              <Text style={Styles.truckFare}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{ fontSize: 15 }}
                />
                2400
              </Text>
            </View>
            <View style={Styles.tripInfo}>
              <View style={Styles.rowSpaceAlignment}>
                <View style={Styles.tripPlaces}>
                  <Icon
                    name="circle-o"
                    type="FontAwesome"
                    style={Styles.tripIcon}
                  />
                  <Text style={Styles.placeText}>Chennai, CHN</Text>
                </View>
                <View style={Styles.tripPlaces}>
                  <Icon
                    name="calendar-clock"
                    type="MaterialCommunityIcons"
                    style={Styles.checkIcon}
                  />
                  <Text style={Styles.placeText}>25 Aug - 8:00 AM</Text>
                </View>
              </View>
              <Text style={Styles.lineTracker}>|</Text>
              <View style={Styles.rowSpaceAlignment}>
                <View style={Styles.tripPlaces}>
                  <Icon
                    name="circle-o"
                    type="FontAwesome"
                    style={Styles.tripIcon}
                  />
                  <Text style={Styles.placeText}>Coachin, COC</Text>
                </View>
                <View style={Styles.tripPlaces}>
                  <Icon
                    name="calendar-clock"
                    type="MaterialCommunityIcons"
                    style={Styles.checkIcon}
                  />
                  <Text style={Styles.placeText}>28 Aug - 12:00 AM</Text>
                </View>
              </View>
            </View>
            {/* <View style={Styles.msgBox}>
              <Text style={Styles.msgText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vitae augue leo. Donec sed sem consectetur, feugiat ante id,
                rutrum libero.{"\n\n"}
                Nunc luctus fringilla neque id aliquet. Curabitur luctus augue
                ac leo faucibus, id mollis ex ultricies.
              </Text>
            </View> */}
            <View style={Styles.decisionBox}>
              <TouchableOpacity
                style={Styles.acceptBtn}
                // onPress={() => {
                //   NavigationService.navigate("CustomerMessage");
                // }}
              >
                <Text style={Styles.btnText}>ACCEPT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.rejectBtn}
                // onPress={() => {
                //   NavigationService.navigate("CustomerMessage");
                // }}
              >
                <Text style={Styles.btnText}>REJECT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default MessageInfo;

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
    marginHorizontal: 15,
    marginBottom: 15,
  },
  hImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
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
    marginBottom: 5,
  },
  hTopDesc: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(255,255,255,0.6)",
    marginBottom: 10,
  },

  /** Trip List **/
  tripItem: {
    flex: 1,
    backgroundColor: "#FFF",
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 3,
  },
  truckInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: "rgba(36,42,56,0.07)",
    borderBottomWidth: 1,
  },
  truckTrip: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    color: "rgba(36,42,56,1)",
  },
  truckData: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.7)",
    lineHeight: 18,
  },
  truckFare: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "rgba(36,42,56,0.99)",
  },
  checkIcon: {
    fontSize: 20,
    color: "rgba(36,42,56,0.4)",
  },
  truckImg: {
    width: 100,
    height: 75,
    borderRadius: 3,
  },
  tripInfo: {
    borderColor: "rgba(36,42,56,0.07)",
    borderBottomWidth: 1,
    padding: 10,
  },
  rowSpaceAlignment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tripPlaces: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  tripIcon: {
    fontSize: 12,
    paddingHorizontal: 5,
  },
  placeText: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    marginLeft: 10,
    color: "rgba(36,42,56,0.9)",
  },
  lineTracker: {
    fontSize: 18,
    color: "#ffcc00",
    marginLeft: 17,
    top: 20,
    position: "absolute",
  },

  msgBox: {
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderColor: "rgba(36,42,56,0.07)",
    padding: 15,
  },
  msgText: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.7)",
    lineHeight: 16,
  },
  decisionBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 15,
  },
  acceptBtn: {
    backgroundColor: "#1aaa55",
    borderRadius: 3,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  rejectBtn: {
    backgroundColor: "#db3b21",
    borderRadius: 3,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  btnText: {
    fontSize: 11,
    fontFamily: "Montserrat-SemiBold",
    color: "#FFF",
    alignSelf: "center",
  },
});

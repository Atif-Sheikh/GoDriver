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

// import NavigationService from "@Service/Navigation";

import TRIP from "./Trip";

import Style from "../../../style/Style";
// import Styles from "@Screen/Customer/Shipment/Style";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Shipment = () => {
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
            <Icon
              name="package"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <View style={Styles.hRow}>
              <View style={Styles.hContent}>
                <Text style={Styles.hTopText}>SHIPMENT</Text>
                <Text style={Styles.hTopDesc}>Manage your shipment</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.addBtn}
                  onPress={() => {
                    NavigationService.navigate("CustomerShipmentCreate");
                  }}
                >
                  <Text style={Styles.addText}>ADD SHIPMENT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <FlatList
            data={TRIP}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => (
              <View style={Styles.tripItem}>
                <View style={Styles.truckInfo}>
                  <View>
                    <Text style={Styles.truckTrip}>{item.trip}</Text>
                    <Text style={Styles.truckData}>{item.name}</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={Styles.truckData}>Tonnage 1500</Text>
                    </View>
                  </View>
                  <Text style={Styles.truckFare}>$2400</Text>
                </View>
                <View style={Styles.tripInfo}>
                  <View style={Styles.rowSpaceAlignment}>
                    <View style={Styles.tripPlaces}>
                      <Icon
                        name="circle-o"
                        type="FontAwesome"
                        style={Styles.tripIcon}
                      />
                      <Text style={Styles.placeText}>{item.startplace}</Text>
                    </View>
                    <View style={Styles.tripPlaces}>
                      <Icon
                        name="calendar-clock"
                        type="MaterialCommunityIcons"
                        style={Styles.checkIcon}
                      />
                      <Text style={Styles.placeText}>{item.startat}</Text>
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
                      <Text style={Styles.placeText}>{item.finishplace}</Text>
                    </View>
                    <View style={Styles.tripPlaces}>
                      <Icon
                        name="calendar-clock"
                        type="MaterialCommunityIcons"
                        style={Styles.checkIcon}
                      />
                      <Text style={Styles.placeText}>{item.finishat}</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.rowSpaceAlignment}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={Styles.editBtn}
                      //   onPress={() => {
                      //     NavigationService.navigate("CustomerShipmentCreate");
                      //   }}
                    >
                      <Icon
                        name="pencil"
                        type="FontAwesome"
                        style={Styles.editIcon}
                      />
                      <Text style={Styles.editText}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.editBtn}>
                      <Icon
                        name="trash-o"
                        type="FontAwesome"
                        style={Styles.editIcon}
                      />
                      <Text style={Styles.editText}>DELETE</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={Styles.editBtn}
                    // onPress={() => {
                    //   NavigationService.navigate("PublicSearchTrip");
                    // }}
                  >
                    <Icon
                      name="md-search"
                      type="Ionicons"
                      style={Styles.editIcon}
                    />
                    <Text style={Styles.editText}>TRUCK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </Content>
    </Container>
  );
};

export default Shipment;

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
    marginHorizontal: 15,
    marginBottom: 15,
  },
  hImg: {
    fontSize: 64,
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
    marginBottom: 5,
  },
  hTopDesc: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(255,255,255,0.6)",
    marginBottom: 10,
  },

  addBtn: {
    backgroundColor: "#FF8901",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0,
  },
  addText: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
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
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F2F6",
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
  editIcon: {
    fontSize: 14,
    paddingLeft: 5,
    color: "rgba(36,42,56,0.9)",
  },
  editText: {
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    paddingHorizontal: 5,
    color: "rgba(36,42,56,0.9)",
  },
});

import React, { useEffect } from "react";
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
  YellowBox,
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

// import Style from '@Theme/Style'
// import Styles from '@Screen/Public/SearchShipment/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Detail = ({ navigation }) => {
  useEffect(() => {
    YellowBox.ignoreWarnings(["First Warning!"]);
    console.warn("First Warning!");
    console.warn("Second Warning!");
    // console.disableYellowBox = true;
  });
  return (
    <Container>
      <Header style={Styles.navigations}>
        <StatusBar
          backgroundColor="#242A38"
          animated
          barStyle="light-content"
        />
        <View style={Styles.nav}>
          <View style={Styles.navLeft}>
            <TouchableOpacity
              style={Styles.navLeft}
              onPress={() => navigation.goBack()}
            >
              <Icon
                name="arrow-back"
                type="MaterialIcons"
                style={Styles.navIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.navMiddle} />
          <View style={Styles.navRight} />
        </View>
      </Header>

      <Content contentContainerStyle={Styles.layoutDefault}>
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
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>SHIP #123</Text>
              <Text style={Styles.hTopDesc}>Posted on: 28 Jan 2019</Text>
            </View>
          </View>

          <View style={Styles.tripItem}>
            <View style={Styles.truckInfo}>
              <View>
                <Text style={Styles.truckData}>
                  Freightliner CAS ACADIA 125
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={Styles.truckData}>TN 07 2 9898</Text>
                </View>
              </View>
              <Text style={Styles.price}>
                {" "}
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{ fontSize: 20 }}
                />{" "}
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
                  <Text style={Styles.placeText}>Chennai , CHN</Text>
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
                  <Text style={Styles.placeText}>Uttar Pradesh , UP</Text>
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
            <View style={Styles.msgBox}>
              <Text style={Styles.msgText}>
                HouseHold Items and Furnishing Parts Should be taken to UP
                Safely{"\n\n"}
                After Accepting Trip You will get the Loading Contact Person
                name and number
              </Text>
            </View>
            <View style={Styles.decisionBox}>
              <TouchableOpacity
                style={Styles.acceptBtn}
                onPress={() => {
                  navigation.navigate("Loading");
                }}
              >
                <Text style={Styles.btnText}>ACCEPT NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Detail;

const Styles = StyleSheet.create({
  /** Content **/
  bgLayout: {},
  bgImg: {
    position: "absolute",
    width: "100%",
    height: 230,
  },

  /** Header **/
  hTop: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 5,
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
    fontFamily: "Montserrat-Regular",
    fontSize: 11,
    color: "#FFF",
  },

  /** Search **/
  search: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 3,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 16,
    paddingVertical: 12,
    color: "rgba(36,42,56,0.5)",
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
    marginHorizontal: 20,
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
    marginVertical: 2,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.7)",
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
    alignItems: "center",
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
    marginLeft: 5,
    color: "rgba(36,42,56,0.9)",
  },

  lineTracker: {
    fontSize: 18,
    color: "#ffcc00",
    marginLeft: 17,
    top: 20,
    position: "absolute",
  },

  more: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  price: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    color: "rgba(36,42,56,0.99)",
  },
  postedOn: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.5)",
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F2F6",
    borderRadius: 5,
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
  // *** Content *** //
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: "#F1F2F6",
  },

  // *** text header *** //
  // *** status and action bar *** //
  navigations: {
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

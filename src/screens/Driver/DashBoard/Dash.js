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
import HeaderBar from "../../../components/HeaderBar";

// import NavigationService from '@Service/Navigation'

// import Style from '@Theme/Style'
// import Styles from '@Screen/Customer/Dashboard/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Dashboard = ({ navigation }) => {
  return (
    <Container>
     <HeaderBar/>

      <Content contentContainerStyle={Styles.layoutDefault}>
        <Image
          source={require("../../../../assets/bg.png")}
          style={Styles.bgImg}
        />
        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <Image
              source={{
                uri:
                  "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              style={Styles.hImg}
            />
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Aravind</Text>
              <Text style={Styles.hTopDesc}>Chennai, India</Text>
            </View>
          </View>
          <View style={Styles.trip}>
            <Text style={Styles.tripCount}>50</Text>
            <Text style={[Styles.tripDesc, Styles.whiteColor]}>Shipment</Text>
          </View>
          <View style={Styles.statics}>
            <View style={[Styles.tripAmount, Styles.bgYellow]}>
              <Text style={Styles.priceText}>
                {/* ${" "} */}
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  // style={Styles.navIcon}
                />
                4800
              </Text>
              <Text style={Styles.priceDesc}>PAID</Text>
            </View>
            <View style={[Styles.tripAmount, Styles.bgGrey]}>
              <Text style={[Styles.priceText, Styles.whiteColor]}>
                {/* $ */}
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={Styles.whiteColor}
                />
                1200
              </Text>
              <Text style={[Styles.priceDesc, Styles.whiteColor]}>DUE</Text>
            </View>
          </View>

          <TouchableOpacity
            style={Styles.eventBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerShipment");
            // }}
          >
            <Icon
              name="package"
              type="MaterialCommunityIcons"
              style={Styles.eventIcon}
            />
            <View style={Styles.events}>
              <Text style={Styles.eventName}>Shipment</Text>
              <Text style={Styles.eventDesc}>Manage your shipment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.eventBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerBooking");
            // }}
          >
            <Icon
              name="calendar-check-o"
              type="FontAwesome"
              style={Styles.eventIcon}
            />
            <View style={Styles.events}>
              <Text style={Styles.eventName}>Booking</Text>
              <Text style={Styles.eventDesc}>Manage your bookings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.eventBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerMessage");
            // }}
          >
            <Icon name="email" type="MaterialIcons" style={Styles.eventIcon} />
            <View style={Styles.events}>
              <Text style={Styles.eventName}>Messages</Text>
              <Text style={Styles.eventDesc}>
                List of enquiries from customers
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.eventBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerProfile");
            // }}
          >
            <Icon name="user" type="FontAwesome" style={Styles.eventIcon} />
            <View style={Styles.events}>
              <Text style={Styles.eventName}>Profile</Text>
              <Text style={Styles.eventDesc}>
                Manage your profile informations
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.eventBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerSettings");
            // }}
          >
            <Icon name="gears" type="FontAwesome" style={Styles.eventIcon} />
            <View style={Styles.events}>
              <Text style={Styles.eventName}>Settings</Text>
              <Text style={Styles.eventDesc}>
                Manage your password, notifications, etc
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default Dashboard;

const Styles = StyleSheet.create({
  /** * -- Content -- ***/
  bgLayout: {
    marginHorizontal: 20,
  },
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

  /** Statics **/
  trip: {
    width: 100,
    height: 80,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  tripCount: {
    fontSize: 36,
    fontFamily: "Montserrat-SemiBold",
    color: "#FFD328",
  },
  tripDesc: {
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
  },
  whiteColor: {
    color: "#FFF",
  },
  statics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tripAmount: {
    width: "48%",
    borderRadius: 5,
    padding: 10,
  },
  bgYellow: {
    backgroundColor: "#FFD328",
  },
  bgGrey: {
    backgroundColor: "#FF8901",
  },
  priceText: {
    fontSize: 32,
    fontFamily: "Montserrat-SemiBold",
    color: "rgba(36,42,56,0.9)",
  },
  priceDesc: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.7)",
  },
  eventBtn: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    elevation: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "#CCC",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 10,
    padding: 15,
    borderRadius: 3,
  },
  eventIcon: {
    fontSize: 36,
    marginRight: 5,
    color: "rgba(36,42,56,0.9)",
  },
  events: {
    justifyContent: "center",
    marginLeft: 5,
  },
  eventName: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    color: "rgba(36,42,56,0.9)",
  },
  eventDesc: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.5)",
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

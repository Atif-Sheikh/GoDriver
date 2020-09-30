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
  TabHeading,
  ScrollableTab,
  Card,
  Left,
  Right,
  Body,
  Input,
  Tabs,
  Tab,
  Footer,
  View,
  FooterTab,
  Badge,
} from "native-base";

// import NavigationService from '@Service/Navigation'

import TRUCKS from "./Trucks";
import HeaderBar from "../../../components/HeaderBar";

// import Style from '@Theme/Style'
// import Styles from '@Screen/Customer/Booking/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Booking = ({ navigation }) => {
  const truckimage = require("../../../../assets/truck.jpg");
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
            <Icon
              name="calendar-check-o"
              type="FontAwesome"
              style={Styles.hImg}
            />
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>My Trip Orders</Text>
              <Text style={Styles.hTopDesc}>List of Orders from customers</Text>
            </View>
          </View>

          <View style={Styles.infoBox}>
            <Tabs
              tabBarBackgroundColor={Styles.tabMain}
              style={Styles.tabFixed}
              tabBarUnderlineStyle={Styles.tabUnderLine}
              renderTabBar={() => <ScrollableTab style={Styles.scrollBg} />}
            >
              <Tab
                style={Styles.tabBg}
                heading={
                  <TabHeading style={Styles.tabHeading}>
                    <Text style={Styles.tabTxt}>All</Text>
                  </TabHeading>
                }
              >
                <View style={Styles.tabContent}>
                  <FlatList
                    data={TRUCKS}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index, item) => item.toFixed()}
                    renderItem={({ item, separators }) => (
                      <View style={Styles.bookingItem}>
                        <View style={Styles.tripTo}>
                          <Text style={Styles.productText}>
                            {item.truckname}
                          </Text>
                          <Text style={Styles.priceText}>
                            {" "} 
                            <Icon
                              name="rupee"
                              type="FontAwesome"
                              style={{ fontSize: 15, color: "#000" }}
                            />
                            {item.charges}
                          </Text>
                        </View>
                        <View style={Styles.tripDest}>
                          <Image
                            source={truckimage}
                            // source={{ uri: item.image }}
                            style={Styles.truckImg}
                          />
                          <View style={Styles.locations}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorGreen]}
                              />
                              <Text style={Styles.placeText}>{item.from}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorRed]}
                              />
                              <Text style={Styles.placeText}>{item.to}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={Styles.truckInfo}>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="ios-speedometer"
                              type="Ionicons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.kms}</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="date-range"
                              type="MaterialIcons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.dated}</Text>
                          </View>
                        </View>
                        <View style={Styles.orderDetails}>
                          <Text style={Styles.orderText}>{item.orderID}</Text>
                          <Text style={Styles.orderText}>{item.status}</Text>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </Tab>

              <Tab
                heading={
                  <TabHeading style={Styles.tabHeading}>
                    <Text style={Styles.tabTxt}>Pending</Text>
                  </TabHeading>
                }
              >
                <View style={Styles.tabContent}>
                  <FlatList
                    data={TRUCKS}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index, item) => item.toFixed()}
                    renderItem={({ item, separators }) => (
                      <View style={Styles.bookingItem}>
                        <View style={Styles.tripTo}>
                          <Text style={Styles.productText}>
                            {item.truckname}
                          </Text>
                          <Text style={Styles.priceText}>
                            {" "}
                            <Icon
                              name="rupee"
                              type="FontAwesome"
                              style={{ fontSize: 15, color: "#000" }}
                            />
                            {item.charges}
                          </Text>
                        </View>
                        <View style={Styles.tripDest}>
                          <Image
                            source={truckimage}
                            // source={{ uri: item.image }}
                            style={Styles.truckImg}
                          />
                          <View style={Styles.locations}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorGreen]}
                              />
                              <Text style={Styles.placeText}>{item.from}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorRed]}
                              />
                              <Text style={Styles.placeText}>{item.to}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={Styles.truckInfo}>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="ios-speedometer"
                              type="Ionicons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.kms}</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="date-range"
                              type="MaterialIcons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.dated}</Text>
                          </View>
                        </View>
                        <View style={Styles.orderDetails}>
                          <Text style={Styles.orderText}>{item.orderID}</Text>
                          <Text style={Styles.orderText}>{item.status}</Text>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </Tab>

              <Tab
                heading={
                  <TabHeading style={Styles.tabHeading}>
                    <Text style={Styles.tabTxt}>Processing</Text>
                  </TabHeading>
                }
              >
                <View style={Styles.tabContent}>
                  <FlatList
                    data={TRUCKS}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index, item) => item.toFixed()}
                    renderItem={({ item, separators }) => (
                      <View style={Styles.bookingItem}>
                        <View style={Styles.tripTo}>
                          <Text style={Styles.productText}>
                            {item.truckname}
                          </Text>
                          <Text style={Styles.priceText}>
                            {" "}
                            <Icon
                              name="rupee"
                              type="FontAwesome"
                              style={{ fontSize: 15, color: "#000" }}
                            />
                            {item.charges}
                          </Text>
                        </View>
                        <View style={Styles.tripDest}>
                          <Image
                            source={truckimage}
                            // source={{ uri: item.image }}
                            style={Styles.truckImg}
                          />
                          <View style={Styles.locations}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorGreen]}
                              />
                              <Text style={Styles.placeText}>{item.from}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorRed]}
                              />
                              <Text style={Styles.placeText}>{item.to}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={Styles.truckInfo}>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="ios-speedometer"
                              type="Ionicons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.kms}</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="date-range"
                              type="MaterialIcons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.dated}</Text>
                          </View>
                        </View>
                        <View style={Styles.orderDetails}>
                          <Text style={Styles.orderText}>{item.orderID}</Text>
                          <Text style={Styles.orderText}>{item.status}</Text>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </Tab>

              <Tab
                heading={
                  <TabHeading style={Styles.tabHeading}>
                    <Text style={Styles.tabTxt}>Completed</Text>
                  </TabHeading>
                }
              >
                <View style={Styles.tabContent}>
                  <FlatList
                    data={TRUCKS}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(index, item) => item.toFixed()}
                    renderItem={({ item, separators }) => (
                      <View style={Styles.bookingItem}>
                        <View style={Styles.tripTo}>
                          <Text style={Styles.productText}>
                            {item.truckname}
                          </Text>
                          <Text style={Styles.priceText}>
                            {" "}
                            <Icon
                              name="rupee"
                              type="FontAwesome"
                              style={{ fontSize: 15, color: "#000" }}
                            />
                            {item.charges}
                          </Text>
                        </View>
                        <View style={Styles.tripDest}>
                          <Image
                            source={truckimage}
                            // source={{ uri: item.image }}
                            style={Styles.truckImg}
                          />
                          <View style={Styles.locations}>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorGreen]}
                              />
                              <Text style={Styles.placeText}>{item.from}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name="location-pin"
                                type="Entypo"
                                style={[Styles.locationIcon, Styles.colorRed]}
                              />
                              <Text style={Styles.placeText}>{item.to}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={Styles.truckInfo}>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="ios-speedometer"
                              type="Ionicons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.kms}</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="date-range"
                              type="MaterialIcons"
                              style={Styles.truckIcon}
                            />
                            <Text style={Styles.truckText}>{item.dated}</Text>
                          </View>
                        </View>
                        <View style={Styles.orderDetails}>
                          <Text style={Styles.orderText}>{item.orderID}</Text>
                          <Text style={Styles.orderText}>{item.status}</Text>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </Tab>
            </Tabs>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Booking;

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
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  hImg: {
    fontSize: 48,
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
    fontFamily: "Montserrat-Regular",
    fontSize: 11,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 10,
  },

  infoBox: {
    flex: 1,
    marginBottom: 10,
  },
  orderItem: {
    flex: 1,
    backgroundColor: "#FFF",
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginBottom: 10,
    borderRadius: 3,
    flexDirection: "row",
  },

  /** Tab **/
  scrollBg: {
    minHeight: 40,
    backgroundColor: "transparent",
    marginBottom: 20,
    borderBottomWidth: 0,
    marginHorizontal: 20,
  },
  tabMain: {
    borderBottomWidth: 0,
    elevation: 0,
  },
  tabFixed: {
    flex: 1,
    height: "100%",
  },
  tabBg: {
    backgroundColor: "transparent",
  },
  tabHeading: {
    flexGrow: 1,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    height: 20,
    paddingVertical: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3,
  },
  tabTxt: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
  },
  activeTabStyle: {
    backgroundColor: "#FFD328",
  },
  activeTextStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: "#FFF",
  },
  tabUnderLine: {
    borderColor: "#FFD328",
    borderBottomWidth: 4,
  },
  tabContent: {
    flex: 1,
  },

  /** Booking **/
  bookingItem: {
    flex: 1,
    backgroundColor: "#FFF",
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 15,
    borderRadius: 3,
    marginHorizontal: 20,
  },
  tripTo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "rgba(36,42,56,0.1)",
    borderBottomWidth: 1,
    padding: 10,
  },
  productText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  priceText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },

  tripDest: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  truckImg: {
    width: 80,
    height: 60,
    marginRight: 5,
    borderRadius: 3,
  },
  locations: {
    justifyContent: "center",
  },
  locationIcon: {
    fontSize: 20,
  },
  colorGreen: {
    color: "green",
  },
  colorRed: {
    color: "red",
  },
  placeText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    alignSelf: "center",
  },
  truckInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffcc00",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  truckIcon: {
    fontSize: 20,
    alignSelf: "center",
    marginRight: 5,
    color: "rgba(36,42,56,0.99)",
  },
  truckText: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    alignSelf: "center",
  },

  orderDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  orderText: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "#333",
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

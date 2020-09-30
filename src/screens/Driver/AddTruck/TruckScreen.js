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

import TRUCKS from "../../../constants/TruckData";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Truck = ({ navigation }) => {
  useEffect(() => {
    YellowBox.ignoreWarnings(["First Warning!"]);
    console.warn("First Warning!");
    console.warn("Second Warning!");
    // console.disableYellowBox = true;
  });

  return (
    <Container>
      <Header style={Styles.navigation}>
        <StatusBar
          backgroundColor="#242A38"
          animated
          barStyle="light-content"
        />
        <View style={Styles.nav}>
          <View style={Styles.navLeft}>
            <TouchableOpacity
              style={Styles.navLeft}
              // onPress={() => {
              //   NavigationService.navigate("TransporterDashboard");
              // }}
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
              name="map-marker-multiple"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <View style={Styles.hRow}>
              <View style={Styles.hContent}>
                <Text style={Styles.hTopText}>Lorries</Text>
                <Text style={Styles.hTopDesc}>Manage your Lorry</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.addBtn}
                  // onPress={() => {
                  //   NavigationService.navigate("TransporterCreateTruck");
                  // }}
                >
                  <Text style={Styles.addText}>ADD LORRY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <FlatList
            data={TRUCKS}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.toFixed()}
            renderItem={({ item, separators }) => (
              <View style={Styles.truckItem}>
                <View style={Styles.truckInfo}>
                  <Image source={{ uri: item.image }} style={Styles.truckImg} />
                  <View style={Styles.truckContent}>
                    <View style={Styles.truckBrand}>
                      <Text style={Styles.truckName}>{item.name}</Text>
                    </View>
                    <View style={Styles.rowAlignment}>
                      <Text style={Styles.truckNum}>Number</Text>
                      <Text style={Styles.truckData}>{item.num}</Text>
                    </View>
                    <View style={Styles.rowAlignment}>
                      <Text style={Styles.truckNum}>Year</Text>
                      <Text style={Styles.truckData}>{item.year}</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.truckEdit}>
                  <Text style={Styles.truckPosted}>
                    Posted On: {item.posted}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={Styles.editBtn}
                      // onPress={() => {
                      //   NavigationService.navigate("TransporterCreateTruck");
                      // }}
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
                </View>
              </View>
            )}
          />
        </View>
      </Content>
    </Container>
  );
};

export default Truck;
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
  truckItem: {
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
    borderColor: "rgba(36,42,56,0.08)",
    borderBottomWidth: 1,
  },
  truckContent: {
    flex: 1,
  },
  truckImg: {
    width: 100,
    height: 75,
    marginRight: 10,
    borderRadius: 3,
  },
  truckBrand: {
    width: "100%",
    borderColor: "rgba(36,42,56,0.08)",
    borderBottomWidth: 1,
  },
  truckName: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginBottom: 5,
    color: "rgba(36,42,56,0.99)",
  },
  rowAlignment: {
    flexDirection: "row",
    marginTop: 5,
  },
  truckNum: {
    flex: 5,
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.7)",
  },
  truckData: {
    flex: 5,
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.99)",
  },
  truckEdit: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  truckPosted: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "rgba(36,42,56,0.6)",
  },

  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F2F6",
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
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

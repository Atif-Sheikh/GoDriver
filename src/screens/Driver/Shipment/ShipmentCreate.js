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
  Picker,
  Footer,
  View,
  FooterTab,
  Badge,
  CheckBox,
} from "native-base";

// import NavigationService from '@Service/Navigation'

import Style from "../../../style/Style";
// import Styles from '@Screen/Customer/ShipmentCreate/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const ShipmentCreate = () => {
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
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Create Shipment</Text>
              <Text style={Styles.hTopDesc}>
                Create your shipment informations
              </Text>
            </View>
          </View>
          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Shipment Info</Text>
              </View>
              <View style={Styles.fSelect}>
                <View style={Styles.fPicker}>
                  <Picker style={Styles.fPickerItem}>
                    <Picker.Item label="Tata Ace" value="key0" />
                  </Picker>
                </View>
                <Icon
                  name="truck"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Tonnage"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="weight"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Destination 1"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="google-maps"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Destination 2"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="google-maps"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="From Date"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="calendar-today"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="To Date"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="calendar"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Price"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon name="money" type="FontAwesome" style={Styles.fIcon} />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={Styles.fBtn}
            // onPress={() => {
            //   NavigationService.navigate("CustomerShipment");
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

export default ShipmentCreate;

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
  /** Form **/
  regForm: {
    width: "100%",
    marginBottom: 15,
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
  },

  fBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF8901",
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 3,
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

  photos: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },
  truckImg: {
    width: 90,
    height: 64,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  photoDelete: {
    position: "absolute",
    right: 5,
    top: 1,
    padding: 3,
    borderRadius: 3,
    backgroundColor: "#FF0000",
  },
  photoDeleteIcon: {
    fontSize: 14,
    color: "#FFF",
  },
});

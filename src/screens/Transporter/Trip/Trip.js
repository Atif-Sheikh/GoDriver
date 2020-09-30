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

import TRIP from "./TripData";

import Style from "../../../style/Style";
import Styles from "../Trip/Style";
import HeaderBar from "../../../components/HeaderBar";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const TripT = ({ navigation }) => {
  const truckimage = require("../../../../assets/truck.jpg");
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
            <Icon
              name="google-maps"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <View style={Styles.hRow}>
              <View style={Styles.hContent}>
                <Text style={Styles.hTopText}>Trip</Text>
                <Text style={Styles.hTopDesc}>Manage your trip</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.addBtn}
                  //   onPress={() => {
                  //     NavigationService.navigate("TransporterCreateTrip");
                  //   }}
                >
                  <Text style={Styles.addText}>ADD TRIP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <FlatList
            data={TRIP}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(index, item) => item.toFixed()}
            renderItem={({ item, separators }) => (
              <View style={Styles.tripItem}>
                <View style={Styles.truckInfo}>
                  <View>
                    <Text style={Styles.truckTrip}>{item.trip}</Text>
                    <Text style={Styles.truckData}>{item.name}</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={Styles.truckData}>{item.num}</Text>
                      <Text style={{ paddingHorizontal: 5 }}>|</Text>
                      <Icon
                        name="checkbox-blank"
                        type="MaterialCommunityIcons"
                        style={Styles.checkIcon}
                      />
                    </View>
                  </View>
                  <Image source={truckimage} style={Styles.truckImg} />
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
                      //     NavigationService.navigate("TransporterCreateTrip");
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
                    //   NavigationService.navigate("PublicSearchShipment");
                    // }}
                  >
                    <Icon
                      name="md-search"
                      type="Ionicons"
                      style={Styles.editIcon}
                    />
                    <Text style={Styles.editText}>SHIPMENT</Text>
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
export default TripT;

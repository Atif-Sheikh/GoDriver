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

import TRUCKS from "./TrucksTData";

import Style from "../../../style/Style";
import Styles from "../Truck/Style";
import HeaderBar from "../../../components/HeaderBar";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const TruckT = ({ navigation }) => {
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
                <Text style={Styles.hTopText}>Truck</Text>
                <Text style={Styles.hTopDesc}>Manage your trucks</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={Styles.addBtn}
                  //   onPress={() => {
                  //     NavigationService.navigate("TransporterCreateTruck");
                  //   }}
                >
                  <Text style={Styles.addText}>ADD TRUCK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <FlatList
            data={TRUCKS}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(index, item) => item.toFixed()}
            renderItem={({ item, separators }) => (
              <View style={Styles.truckItem}>
                <View style={Styles.truckInfo}>
                  <Image source={truckimage} style={Styles.truckImg} />
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
                      //   onPress={() => {
                      //     NavigationService.navigate("TransporterCreateTruck");
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
                </View>
              </View>
            )}
          />
        </View>
      </Content>
    </Container>
  );
};
export default TruckT;

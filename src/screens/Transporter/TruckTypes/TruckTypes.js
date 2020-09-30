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

const TruckTypes = ({ navigation }) => {
  return (
    <Container>
      <HeaderBar />

      <Content contentContainerStyle={Style.layoutDefault}>
        <Image
          source={require("../../../../assets/bg.png")}
          style={Styles.bgImg}
        />
        <View style={Styles.bgLayout}>
          <View style={Styles.hTop}>
            <Icon
              name="truck-fast"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <View style={Styles.hRow}>
              <View style={Styles.hContent}>
                <Text style={Styles.hTopText}>Truck</Text>
                <Text style={Styles.hTopDesc}>Select your Truck Type</Text>
              </View>
              {/* <View>
                <TouchableOpacity
                  style={Styles.addBtn}
                  //   onPress={() => {
                  //     NavigationService.navigate("TransporterCreateTruck");
                  //   }}
                >
                  <Text style={Styles.addText}>ADD TRUCK</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </View>

          <FlatList
            data={TRUCKS}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(index, item) => item.toFixed()}
            renderItem={({ item, separators }) => (
              <TouchableOpacity
                style={Styles.truckItem}
                onPress={() => navigation.navigate("TruckDetails", { item })}
              >
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
                  <View style={{ justifyContent: "center" }}>
                    <TouchableOpacity
                      style={Styles.editBtn}
                      onPress={() => navigation.navigate("TruckDetails", item)}
                    >
                      <Icon
                        name="details"
                        type="MaterialCommunityIcons"
                        style={Styles.editIcon}
                      />
                      <Text style={Styles.editText}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Content>
    </Container>
  );
};
export default TruckTypes;

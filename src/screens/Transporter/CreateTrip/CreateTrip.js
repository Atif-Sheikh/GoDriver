import React, { useState } from "react";
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
  Picker,
} from "native-base";

// import NavigationService from '@Service/Navigation'

import Style from "../../../style/Style";
import Styles from "./Style";
import HeaderBar from "../../../components/HeaderBar";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const CreateTrip = ({ navigation }) => {
  const [goods, setGoods] = useState("Choose Type of Goods");
  const [trucks, setTrucks] = useState("Choose Type of Goods");

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
              name="google-maps"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Book Trip</Text>
              <Text style={Styles.hTopDesc}>Book your trip destinations</Text>
            </View>
          </View>
          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.fSelect}>
                <View style={Styles.fPicker}>
                  <Picker
                    style={Styles.fPickerItem}
                    onValueChange={(value) => setTrucks(value)}
                    selectedValue={trucks}
                  >
                    <Picker.Item label="Tata Ace" value="key0" />
                    <Picker.Item label="Mahindra" value="key1" />
                  </Picker>
                </View>
                <Icon
                  name="truck"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fSelect}>
                <View style={Styles.fPicker}>
                  <Picker style={Styles.fPickerItem}>
                    <Picker.Item label="Aravind" value="key0" />
                  </Picker>
                </View>
                <Icon
                  name="account"
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
                  placeholder="Total Kilometers"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="road-variant"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fSelect}>
                <View style={Styles.fPicker}>
                  <Picker
                    style={[Styles.fPickerItem, { fontSize: 5 }]}
                    onValueChange={(value) => setGoods(value)}
                    selectedValue={goods}
                  >
                    <Picker.Item
                      label="Timber/Plywood"
                      value="key0"
                      style={{ fontSize: 5 }}
                    />
                    <Picker.Item label="Electrical/Electronics" value="key1" />
                    <Picker.Item label="Building/Construction" value="key2" />
                    <Picker.Item label="Catering/Restaurant" value="key3" />
                    <Picker.Item label="Machines/Equipments" value="key4" />
                    <Picker.Item label="Textile/Garments" value="key5" />
                    <Picker.Item
                      label="Furniture/Home Furnishing"
                      value="key6"
                    />
                    <Picker.Item label="House Shifting" value="key7" />
                    <Picker.Item label="Ceramics/Hardware" value="key8" />
                    <Picker.Item label="Paper/Packaging" value="key9" />
                    <Picker.Item label="Logistics" value="key10" />
                    <Picker.Item label="Perishable Food Items" value="key11" />
                    <Picker.Item label="Pharmacy/Medical" value="key12" />
                    <Picker.Item label="FMCG/Food Products" value="key13" />
                  </Picker>
                </View>
                <Icon
                  name="luggage-cart"
                  type="FontAwesome5"
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
              <TouchableOpacity
                style={Styles.fBtn}
                // onPress={() => {
                //   NavigationService.navigate("");
                // }}
              >
                <Text style={Styles.fBtnText}>Save</Text>
                <Icon name="check" type="FontAwesome" style={Styles.fBtnIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default CreateTrip;

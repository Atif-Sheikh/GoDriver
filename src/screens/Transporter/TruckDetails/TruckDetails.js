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

import TRUCKS from "./Trucks";

import Style from "../../../style/Style";
import Styles from "../TruckDetails/Style";
import HeaderBar from "../../../components/HeaderBar";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const TruckDetails = ({ navigation, route }) => {
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
              name="truck-delivery"
              type="MaterialCommunityIcons"
              style={Styles.hImg}
            />
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Truck Details</Text>
              <Text style={Styles.hTopDesc}>Get your truck informations</Text>
            </View>
          </View>
          <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Specifications</Text>
              </View>

              <View style={Styles.tripInfo}>
                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="truck"
                      type="MaterialCommunityIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Truck Name</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>{route.params.name}</Text>
                  </View>
                </View>

                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="car-pickup"
                      type="MaterialCommunityIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Type</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>{route.params.type}</Text>
                  </View>
                </View>

                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="weight"
                      type="MaterialCommunityIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Capacity</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>
                      {route.params.capacity}
                    </Text>
                  </View>
                </View>

                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="car-door"
                      type="MaterialCommunityIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Vehicle Number</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>{route.params.num}</Text>
                  </View>
                </View>

                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="color-lens"
                      type="MaterialIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Color</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>{route.params.color}</Text>
                  </View>
                </View>

                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="relative-scale"
                      type="MaterialCommunityIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Dimensions</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>{route.params.dimen}</Text>
                  </View>
                </View>

                <View style={Styles.rowSpaceAlignment}>
                  <View style={Styles.tripPlaces}>
                    <Icon
                      name="calendar-search"
                      type="MaterialCommunityIcons"
                      style={Styles.tripIcon}
                    />
                    <Text style={Styles.placeText}>Year</Text>
                  </View>
                  <View style={Styles.tripPlaces}>
                    {/* <Icon
                      name="calendar-clock"
                      type="MaterialCommunityIcons"
                      style={Styles.checkIcon}
                    /> */}
                    <Text style={Styles.placeText}>{route.params.year}</Text>
                  </View>
                </View>
              </View>

              {/* <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Truck Name"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="truck"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fSelect}>
                <View style={Styles.fPicker}>
                  <Picker style={Styles.fPickerItem}>
                    <Picker.Item label="Tata Ace" value="key0" />
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
                  placeholder="Capacity"
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
                  placeholder="Vehicle Number"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="regex"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Color"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="color-lens"
                  type="MaterialIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Year"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="weight"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View> */}
            </View>
          </View>

          {/* <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Photos</Text>
              </View>
              <View style={Styles.photos}>
                <FlatList
                  data={TRUCKS}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(index, item) => item.toFixed()}
                  renderItem={({ item, separators }) => (
                    <View>
                      <Image
                        source={{
                          uri:
                            "https://39yg8a49fjdg1yo8qt272ix6-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/cascadia.jpg",
                        }}
                        style={Styles.truckImg}
                      />
                      <View style={Styles.photoDelete}>
                        <Icon
                          name="trash"
                          type="FontAwesome"
                          style={Styles.photoDeleteIcon}
                        />
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </View> */}

          {/* <View style={Styles.regForm}>
            <View style={Styles.infoBox}>
              <View style={Styles.infoHeader}>
                <Text style={Styles.infoHeaderText}>Documents</Text>
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="RC Book"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="file-document"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Insurance Document"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="file-document"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
              <View style={Styles.fRow}>
                <TextInput
                  style={Styles.fInput}
                  placeholder="Pollution Document"
                  placeholderTextColor="rgba(36,42,56,0.4)"
                />
                <Icon
                  name="file-document"
                  type="MaterialCommunityIcons"
                  style={Styles.fIcon}
                />
              </View>
            </View>
          </View> */}

          <TouchableOpacity
            style={Styles.fBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={Styles.fBtnText}>Select</Text>
            <Icon
              name="map-marker-check"
              type="MaterialCommunityIcons"
              style={Styles.fBtnIcon}
            />
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};
export default TruckDetails;

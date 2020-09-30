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

// import NavigationService from '@Service/Navigation'

import MESSAGE from "./MessageData";

import Style from "../../../style/Style";
import HeaderBar from "../../../components/HeaderBar";
// import Styles from '@Screen/Customer/Message/Style'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const Message = ({ navigation }) => {
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
            <View style={Styles.hContent}>
              <Text style={Styles.hTopText}>Message</Text>
              <Text style={Styles.hTopDesc}>
                List of messages from customers
              </Text>
            </View>
          </View>

          <View style={Styles.msg}>
            <FlatList
              data={MESSAGE}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, separators }) => (
                <View>
                  <TouchableOpacity
                    style={Styles.msgItem}
                    // onPress={() => {
                    //   NavigationService.navigate("CustomerMessageInfo");
                    // }}
                  >
                    <View style={Styles.msgLeft}>
                      <Image
                        source={{ uri: item.image }}
                        style={Styles.descImg}
                      />
                    </View>
                    <View style={Styles.msgRight}>
                      <View>
                        <Text style={Styles.msgName}>{item.name}</Text>
                        <Text style={Styles.msgContent}>{item.msg}</Text>
                      </View>
                      <View style={Styles.msgOption}>
                        <Text style={Styles.msgDate}>{item.date}</Text>
                        <TouchableOpacity
                          style={Style.navLeft}
                          //   onPress={() => {
                          //     NavigationService.navigate("CustomerDashboard");
                          //   }}
                        >
                          <Icon
                            name="trash"
                            type="FontAwesome"
                            style={Styles.msgDelete}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Message;

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

  /** Message List **/
  msg: {},
  msgItem: {
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
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 3,
    flexDirection: "row",
  },
  msgLeft: {
    padding: 15,
  },
  msgRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  msgName: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
    color: "rgba(36,42,56,0.99)",
    marginBottom: 5,
  },
  msgContent: {
    fontFamily: "Montserrat-Regular",
    fontSize: 11,
    color: "rgba(36,42,56,0.7)",
    marginBottom: 10,
  },
  msgOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 15,
  },
  msgDate: {
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    color: "rgba(36,42,56,0.4)",
  },
  msgDelete: {
    fontSize: 16,
    color: "rgba(36,42,56,0.7)",
    alignSelf: "flex-end",
  },

  nameTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
    marginBottom: 5,
  },
  regDesc: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
    marginBottom: 10,
  },
  regForm: {
    width: "100%",
  },
  infoBox: {
    backgroundColor: "#FFF",
  },
  descInfo: {
    flexDirection: "row",
  },
  descLeft: {
    flex: 1.5,
    justifyContent: "center",
  },
  descImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  descMiddle: {
    flex: 7,
  },
  middleText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    marginLeft: 5,
  },
  middleDesc: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    color: "#666",
    lineHeight: 15,
    marginLeft: 5,
  },
  descRight: {
    flex: 1.5,
    justifyContent: "flex-start",
  },
  rightText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "#333",
    alignSelf: "center",
    marginLeft: 10,
  },
});

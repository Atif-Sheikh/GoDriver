import React from 'react';
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
} from 'react-native';
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
  Tabs,
  Tab,
  TabHeading,
  ScrollableTab,
  Footer,
  View,
  FooterTab,
  Badge,
  Picker,
} from 'native-base';

// import NavigationService from "@Service/Navigation";

import TRUCKS from '../constants/Trucks';
import LOADS from '../constants/Loads';
import LOCATIONS from '../constants/Locations';
import AGENTS from '../constants/Agents';

// Redux
import { connect } from 'react-redux';

// import Style from "@Theme/Style";
// import Styles from "@Screen/Public/Home/Style";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const Home = ({ navigation, coords: { pickup, destination } }) => {
  //console.log('COORDS :', pickup, destination);
  const truckimage = require('../../assets/truck.jpg');
  return (
    <Container>
      <Header style={Styles.navigation}>
        <StatusBar
          backgroundColor='#242A38'
          animated
          barStyle='light-content'
        />
        <View style={Styles.nav}>
          <View style={Styles.navLeft}>
            <TouchableOpacity
              style={Styles.navLeft}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={require('../../assets/Menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={Styles.navMiddle}>
            <Text style={Styles.logo}>Go Truck</Text>
          </View>
          <View style={Styles.navRight} />
        </View>
      </Header>

      <Content contentContainerStyle={Styles.layoutDefault}>
        <Image source={require('../../assets/bg.png')} style={Styles.bgImg} />
        <View style={Styles.sTab}>
          <View style={Styles.sContent}>
            <TouchableOpacity style={Styles.sTabActive}>
              <Text style={Styles.sTabActiveText}>Need a Truck</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.sTabInactive}>
              <Text style={Styles.sTabText}>Need a Load</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.search}>
          <View style={Styles.infoBox}>
            <View style={Styles.fRow}>
              <TextInput
                style={Styles.fInput}
                placeholder='From'
                placeholderTextColor='rgba(255,255,255,0.7)'
                onFocus={() => navigation.navigate('Search Pickup')}
                value={pickup ? pickup.city : ''}
              />
              <Icon
                name='google-maps'
                type='MaterialCommunityIcons'
                style={Styles.fIcon}
                onPress={() => navigation.navigate('Search Pickup')}
              />
            </View>
            <View style={Styles.fRow}>
              <TextInput
                style={Styles.fInput}
                placeholder='To'
                placeholderTextColor='rgba(255,255,255,0.7)'
                onFocus={() => navigation.navigate('Search Drop')}
                value={destination.city}
              />
              <Icon
                name='google-maps'
                type='MaterialCommunityIcons'
                style={Styles.fIcon}
                onPress={() => navigation.navigate('Search Drop')}
              />
            </View>
            <TouchableOpacity
              style={Styles.fRow}
              onPress={() => navigation.navigate('Category')}
            >
              <Text style={Styles.catagoryLayout}>Catagory</Text>
              {/* <TextInput
                style={Styles.fInput}
                placeholder='Truck Type'
                placeholderTextColor='rgba(255,255,255,0.7)'
              />
              <Icon
                onPress={() => navigation.navigate('TruckTypes')}
                name='truck'
                type='MaterialCommunityIcons'
                style={Styles.fIcon}
              /> */}
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={Styles.fBtn}
              onPress={() => {
                navigation.navigate('BookTrip');
              }}
            >
              <Text style={Styles.fBtnText}>Search</Text>
              <Icon name='search' type='FontAwesome' style={Styles.fBtnIcon} />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={Styles.trip}>
          <Text style={Styles.tripHeader}>Trips</Text>
          <FlatList
            data={TRUCKS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(index, item) => item.toFixed()}
            renderItem={({ item, separators }) => (
              <TouchableOpacity
                style={Styles.tripDetails}
                //   onPress={() => {
                //     NavigationService.navigate("CustomerTransport");
                //   }}
              >
                <Image source={truckimage} style={Styles.truckImg} />
                <View style={Styles.truckModel}>
                  <Text style={Styles.fromText}>{item.truckname}</Text>
                  <Text style={Styles.fromText}>{item.tonnage}</Text>
                </View>
                <View style={Styles.placeInfo}>
                  <View>
                    <View style={Styles.travelPlaces}>
                      <Icon
                        name='circle-o'
                        type='FontAwesome'
                        style={Styles.destIcon}
                      />
                      <Text style={Styles.destText}>{item.from}</Text>
                    </View>
                    <Text style={Styles.lineTracker}>|</Text>
                    <View style={Styles.travelPlaces}>
                      <Icon
                        name='circle-o'
                        type='FontAwesome'
                        style={Styles.destIcon}
                      />
                      <Text style={Styles.destText}>{item.to}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={Styles.dayText}>5 Aug</Text>
                    <Text style={Styles.dayText}>18 Aug</Text>
                  </View>
                </View>
                <View style={Styles.truckDetails}>
                  <View>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Text style={Styles.capacityText}>Capacity</Text>
                      <Text style={Styles.tonText}>1500</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon
                        name='star'
                        type='FontAwesome'
                        style={Styles.starIcon}
                      />
                      <Icon
                        name='star'
                        type='FontAwesome'
                        style={Styles.starIcon}
                      />
                      <Icon
                        name='star'
                        type='FontAwesome'
                        style={Styles.starIcon}
                      />
                      <Icon
                        name='star-half-full'
                        type='FontAwesome'
                        style={Styles.starIcon}
                      />
                      <Icon
                        name='star-o'
                        type='FontAwesome'
                        style={Styles.inactiveIcon}
                      />
                    </View>
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={Styles.priceText}>
                      {' '}
                      <Icon
                        name='rupee'
                        type='FontAwesome'
                        style={{ fontSize: 12 }}
                      />{' '}
                      1600
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={Styles.trnCities}>
          <Text style={Styles.trnHeader}>Transport by Cities</Text>
          <View style={Styles.city}>
            <View style={Styles.btnList}>
              <TouchableOpacity
                style={Styles.btnCity}
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              >
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/569202/pexels-photo-569202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  resizeMode={'cover'}
                  style={Styles.btnCityImg}
                />
                <View style={Styles.btnCityBg} />
                <View style={Styles.btnCityLocation}>
                  <Text style={Styles.btnCityText}>Andhra Pradesh</Text>
                  <Text style={Styles.btnCityCount}>334</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.btnCity}
                //   onPress={() => {
                //     NavigationService.navigate("PublicSearchTrip");
                //   }}
              >
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  resizeMode={'cover'}
                  style={Styles.btnCityImg}
                />
                <View style={Styles.btnCityBg} />
                <View style={Styles.btnCityLocation}>
                  <Text style={Styles.btnCityText}>Telangana</Text>
                  <Text style={Styles.btnCityCount}>76</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.btnList}>
              <TouchableOpacity
                style={Styles.btnCityMain}
                //   onPress={() => {
                //     NavigationService.navigate("PublicSearchTrip");
                //   }}
              >
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/612949/pexels-photo-612949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  resizeMode={'cover'}
                  style={Styles.btnCityImg}
                />
                <View style={Styles.btnCityBgMain} />
                <View style={Styles.btnCityLocationMain}>
                  <Text style={Styles.btnCityText}>Shimla</Text>
                  <Text style={Styles.btnCityCount}>158</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.city}>
            <View style={Styles.btnList}>
              <TouchableOpacity
                style={Styles.btnCityMain}
                //   onPress={() => {
                //     NavigationService.navigate("PublicSearchTrip");
                //   }}
              >
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/461903/pexels-photo-461903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  resizeMode={'cover'}
                  style={Styles.btnCityImg}
                />
                <View style={Styles.btnCityBgMain} />
                <View style={Styles.btnCityLocationMain}>
                  <Text style={Styles.btnCityText}>Bangalore</Text>
                  <Text style={Styles.btnCityCount}>568</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.btnList}>
              <TouchableOpacity
                style={Styles.btnCity}
                //   onPress={() => {
                //     NavigationService.navigate("PublicSearchTrip");
                //   }}
              >
                <Image
                  source={{
                    uri:
                      'https://d2t1047w253zzm.cloudfront.net/pm-cities/chicago-il-grant-park-apartments-for-rent.jpg',
                  }}
                  resizeMode={'cover'}
                  style={Styles.btnCityImg}
                />
                <View style={Styles.btnCityBg} />
                <View style={Styles.btnCityLocation}>
                  <Text style={Styles.btnCityText}>Chennai</Text>
                  <Text style={Styles.btnCityCount}>2085</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.btnCity}
                //   onPress={() => {
                //     NavigationService.navigate("PublicSearchTrip");
                //   }}
              >
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/1862362/pexels-photo-1862362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  resizeMode={'cover'}
                  style={Styles.btnCityImg}
                />
                <View style={Styles.btnCityBg} />
                <View style={Styles.btnCityLocation}>
                  <Text style={Styles.btnCityText}>Bihar</Text>
                  <Text style={Styles.btnCityCount}>253</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.load}>
          <Text style={Styles.loadHeader}>Featured Loads</Text>
          <FlatList
            data={LOADS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(index, item) => item.toFixed()}
            renderItem={({ item, separators }) => (
              <TouchableOpacity
                style={Styles.loadItem}
                //   onPress={() => {
                //     NavigationService.navigate("CustomerTransport");
                //   }}
              >
                <View style={Styles.loadModel}>
                  <Text style={Styles.nameText}>{item.truckname}</Text>
                  <Text style={Styles.nameText}>{item.tonnage}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Text style={Styles.tonnageText}>Tonnage</Text>
                  <Text style={Styles.valueText}>{item.capacity}</Text>
                </View>

                <View style={Styles.destInfo}>
                  <View>
                    <View style={Styles.travelPlaces}>
                      <Icon
                        name='circle-o'
                        type='FontAwesome'
                        style={Styles.destIcon}
                      />
                      <Text style={Styles.destText}>{item.from}</Text>
                    </View>
                    <Text style={Styles.lineTracker}>|</Text>
                    <View style={Styles.travelPlaces}>
                      <Icon
                        name='circle-o'
                        type='FontAwesome'
                        style={Styles.destIcon}
                      />
                      <Text style={Styles.destText}>{item.to}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={Styles.dayText}>5 Aug</Text>
                    <Text style={Styles.dayText}>18 Aug</Text>
                  </View>
                </View>
                <View style={Styles.custDetails}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={truckimage}
                      // source={{ uri: item.image }}
                      style={Styles.loadImg}
                    />
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                      <Text style={Styles.loaderText}>{item.loader}</Text>
                      <Text style={Styles.cityText}>{item.city}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />

          <View style={Styles.trnCities}>
            <Text style={Styles.trnHeader}>Loads by Cities</Text>
            <View style={Styles.city}>
              <View style={Styles.btnList}>
                <TouchableOpacity
                  style={Styles.btnCity}
                  // onPress={() => {
                  //   NavigationService.navigate("PublicSearchShipment");
                  // }}
                >
                  <Image
                    source={{
                      uri:
                        'https://images.pexels.com/photos/569202/pexels-photo-569202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                    resizeMode={'cover'}
                    style={Styles.btnCityImg}
                  />
                  <View style={Styles.btnCityBg} />
                  <View style={Styles.btnCityLocation}>
                    <Text style={Styles.btnCityText}>Arunachal Pradesh</Text>
                    <Text style={Styles.btnCityCount}>334</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.btnCity}
                  // onPress={() => {
                  //   NavigationService.navigate("PublicSearchShipment");
                  // }}
                >
                  <Image
                    source={{
                      uri:
                        'https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                    resizeMode={'cover'}
                    style={Styles.btnCityImg}
                  />
                  <View style={Styles.btnCityBg} />
                  <View style={Styles.btnCityLocation}>
                    <Text style={Styles.btnCityText}>Telangana</Text>
                    <Text style={Styles.btnCityCount}>76</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Styles.btnList}>
                <TouchableOpacity
                  style={Styles.btnCityMain}
                  // onPress={() => {
                  //   NavigationService.navigate("PublicSearchShipment");
                  // }}
                >
                  <Image
                    source={{
                      uri:
                        'https://images.pexels.com/photos/612949/pexels-photo-612949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                    resizeMode={'cover'}
                    style={Styles.btnCityImg}
                  />
                  <View style={Styles.btnCityBgMain} />
                  <View style={Styles.btnCityLocationMain}>
                    <Text style={Styles.btnCityText}>Shimla</Text>
                    <Text style={Styles.btnCityCount}>158</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={Styles.city}>
              <View style={Styles.btnList}>
                <TouchableOpacity
                  style={Styles.btnCityMain}
                  // onPress={() => {
                  //   NavigationService.navigate("PublicSearchShipment");
                  // }}
                >
                  <Image
                    source={{
                      uri:
                        'https://images.pexels.com/photos/461903/pexels-photo-461903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                    resizeMode={'cover'}
                    style={Styles.btnCityImg}
                  />
                  <View style={Styles.btnCityBgMain} />
                  <View style={Styles.btnCityLocationMain}>
                    <Text style={Styles.btnCityText}>Bangalore</Text>
                    <Text style={Styles.btnCityCount}>568</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Styles.btnList}>
                <TouchableOpacity
                  style={Styles.btnCity}
                  // onPress={() => {
                  //   NavigationService.navigate("PublicSearchShipment");
                  // }}
                >
                  <Image
                    source={{
                      uri:
                        'https://d2t1047w253zzm.cloudfront.net/pm-cities/chicago-il-grant-park-apartments-for-rent.jpg',
                    }}
                    resizeMode={'cover'}
                    style={Styles.btnCityImg}
                  />
                  <View style={Styles.btnCityBg} />
                  <View style={Styles.btnCityLocation}>
                    <Text style={Styles.btnCityText}>Chennai</Text>
                    <Text style={Styles.btnCityCount}>2085</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.btnCity}
                  // onPress={() => {
                  //   NavigationService.navigate("PublicSearchShipment");
                  // }}
                >
                  <Image
                    source={{
                      uri:
                        'https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                    resizeMode={'cover'}
                    style={Styles.btnCityImg}
                  />
                  <View style={Styles.btnCityBg} />
                  <View style={Styles.btnCityLocation}>
                    <Text style={Styles.btnCityText}>Bihar</Text>
                    <Text style={Styles.btnCityCount}>253</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  coords: state.coords,
});
export default connect(mapStateToProps)(Home);

const Styles = StyleSheet.create({
  /** Content **/
  bgLayout: {},
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: 270,
  },

  logo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#FFD328',
  },

  /** Search Tab **/
  sTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    marginBottom: 10,
  },
  sContent: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFD328',
  },
  sTabActive: {
    backgroundColor: '#FFD328',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sTabInactive: {
    backgroundColor: '#242A38',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sTabActiveText: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: '#242A38',
    alignSelf: 'center',
  },
  sTabText: {
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    alignSelf: 'center',
  },

  /** Form **/
  search: {
    width: '100%',
    marginBottom: 30,
  },
  infoHeader: {
    backgroundColor: '#242A38',
    borderRadius: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  infoHeaderText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#FFF',
  },
  infoBox: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 0,
  },
  fSelect: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#242A38',
  },
  fRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#242A38',
  },
  fPicker: {
    flex: 1,
  },
  fPickerItem: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
  fIcon: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 24,
  },
  fInput: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
    fontSize: 12,
    paddingVertical: 12,
  },
  catagoryLayout: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
    fontSize: 12,
    paddingVertical: 15,
  },
  fBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFD328',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 0,
  },
  fBtnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#242A38',
  },
  fBtnIcon: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#242A38',
  },

  /** Truck Tips **/
  trip: {},
  tripHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  tripDetails: {
    width: 200,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  truckImg: {
    width: '100%',
    height: 120,
  },
  truckModel: {
    flexDirection: 'row',
    padding: 5,
  },
  fromText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 5,
  },
  placeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  travelPlaces: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  destIcon: {
    fontSize: 10,
    color: '#000',
    paddingHorizontal: 5,
  },
  destText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
  },
  lineTracker: {
    fontSize: 16,
    color: '#ffcc00',
    marginLeft: 6,
    marginTop: 6,
    position: 'absolute',
  },
  dayText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    alignSelf: 'flex-end',
    marginRight: 5,
    marginBottom: 5,
  },
  truckDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  capacityText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
    marginRight: 5,
  },
  tonText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#f0f0f0',
    color: '#666',
    borderRadius: 0,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  starIcon: {
    fontSize: 16,
    color: '#ffcc00',
  },
  inactiveIcon: {
    fontSize: 16,
    color: '#CCC',
  },
  priceText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },

  /** Transport by City **/
  trnCities: {
    marginTop: 10,
  },
  trnHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  trnImg: {
    width: 100,
    height: 100,
  },
  /* -- Top Cities -- */
  city: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  btnList: {
    width: '48.5%',
  },
  btnCity: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  btnCityMain: {
    width: '100%',
    height: 210,
    marginBottom: 10,
  },
  btnCityImg: {
    flex: 1,
    borderRadius: 0,
  },
  btnCityLocation: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCityLocationMain: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCityBg: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 100,
    backgroundColor: '#242A38',
    opacity: 0.4,
  },
  btnCityBgMain: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 210,
    backgroundColor: '#39405B',
    opacity: 0.5,
  },
  btnCityText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  btnCityCount: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
  },

  flatCity: {
    paddingLeft: 20,
  },
  itemCity: {
    width: 150,
    marginLeft: 5,
    marginRight: 5,
  },
  itemCityCount: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 64,
  },
  itemCityLocation: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
  },
  itemCityImg: {
    marginBottom: 10,
    width: 150,
    height: 64,
    borderRadius: 0,
    textAlign: 'center',
  },

  /** Truck Tips **/
  load: {
    marginTop: 20,
    marginBottom: 20,
  },
  loadHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  loadItem: {
    width: 200,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.07)',
    padding: 5,
  },
  loadModel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  nameText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginRight: 5,
  },
  tonnageText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#666',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  valueText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#f0f0f0',
    color: '#666',
    borderRadius: 25,
    paddingHorizontal: 5,
  },
  destInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  custDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  loadImg: {
    width: 36,
    height: 36,
  },
  loaderText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
  },
  cityText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#999',
  },

  selectBtn: {
    width: '100%',
    alignSelf: 'center',
  },

  tabBgColor: {
    backgroundColor: '#000',
  },
  textColor: {
    color: '#FFF',
  },
  select: {
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  selectDate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  border: {
    borderColor: '#CCC',
    borderRightWidth: 1,
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'center',
    marginLeft: 5,
  },
  dateIcon: {
    fontSize: 16,
    color: '#CCC',
    padding: 5,
  },
  holderBox: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  holderText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 5,
  },
  deliveryDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  searchBtn: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    borderWidth: 0,
    alignItems: 'center',
    borderColor: '#666',
    borderRadius: 5,
  },
  searchText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    padding: 10,
  },
  classText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
  },

  locationImg: {
    width: '100%',
    height: 75,
  },
  locTransparent: {
    position: 'absolute',
    width: 125,
    height: 75,
    justifyContent: 'center',
  },
  placeText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    alignSelf: 'center',
  },
  numText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    alignSelf: 'center',
  },

  agentImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  // *** Content *** //
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: '#F1F2F6',
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
    width: '100%',
    borderBottomWidth: 0,
    borderColor: '#FFF',
    backgroundColor: '#242A38',
  },
  navigationTransparent: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    width: '100%',
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  nav: {
    flex: 1,
    marginLeft: -5,
    marginRight: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTitle: {
    color: '#FFF',
    fontFamily: 'Amigos',
    fontSize: 18,
  },
  navSubTitle: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navMiddle: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLeftBtn: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  navRight: {
    flex: 1.5,
    alignItems: 'center',
  },
  navIcon: {
    color: '#FFD328',
  },
  navIconDark: {
    color: '#000',
  },
  navIconLight: {
    color: '#FFF',
  },
  navIconPrimary: {
    color: '#000',
  },
  navRightBtn: {
    borderWidth: 1,
    borderColor: '#FFF',
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
    color: '#FFF',
  },
  textDesc: {
    fontSize: 16,
    color: '#FFF',
  },

  // *** footer *** //
  footerBg: {
    backgroundColor: '#FFF',
  },
  fTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  fIcons: {
    backgroundColor: '#FFF',
  },
  iconActive: {
    ...Platform.select({
      ios: {
        color: '#cc99ff',
        fontSize: 24,
      },
      android: {
        color: '#cc99ff',
        fontSize: 18,
        alignSelf: 'center',
      },
    }),
  },
  iconInactive: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        color: '#CCC',
      },
      android: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#CCC',
      },
    }),
  },
  textActive: {
    fontSize: 11,
    color: '#cc99ff',
  },
  textInactive: {
    fontSize: 11,
    color: '#CCC',
  },
});

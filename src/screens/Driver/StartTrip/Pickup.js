import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Container, Content } from 'native-base';
import HeaderBar from '../../../components/HeaderBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Redux
import { connect } from 'react-redux';
import { pickupLocation } from '../../../redux/actions/coords';

import { Origin } from '../../../constants/Coords';

const PickupLocation = ({ navigation, pickupLocation }) => {
  const [pickupLoc, setPickupLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [filterOrigin, setFilterOrigin] = useState([]);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  
  const { longitude, latitude } = location;

  // Access current location
  useEffect(() => {
    getPosition();
  }, [latitude]);

  const getPosition = async () => {
    try {
      if (navigator.geolocation) {
        let pos = await navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLocation(pos);
          },
          (error) => {
            Alert.alert('Enabla GPS to access current location');
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        return pos;
      } else {
        Alert.alert('Enabla GPS to access current location');
      }
    } catch (error) {
      Alert.alert('ERR :', error);
    }
  };

  // Change location
  const onChangeLocation = (e) => {
    setPickupLocation(e);
    // Filter origin
    const filter_origin = Origin.filter((origin) => {
      let origin_point = origin.city.toLowerCase();
      let filter = pickupLoc.toLowerCase();
      return origin_point.includes(filter);
    });
    setFilterOrigin(filter_origin);
  };

  // Submit Location
  const onSubmit = (loc) => {
    // Passing origin to redux
    pickupLocation(loc);
    navigation.goBack();
    setPickupLocation('');
  };
  // Render Location
  const renderLocation = (loc) => {
    return (
      <View style={styles.originLayout}>
        <TouchableOpacity onPress={() => onSubmit(loc)}>
          <Text style={styles.originText}>{loc.city}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.textInputLayout}>
          <TextInput
            placeholder='Pickup location'
            style={styles.textInput}
            placeholderTextColor='grey'
            autoFocus={true}
            onChangeText={(e) => onChangeLocation(e)}
            value={pickupLoc}
          />
        </View>
        {pickupLoc.length < 3 ? (
          pickupLoc.length < 3 && pickupLoc.trim() !== '' ? (
            <Text style={styles.reqInfoText}>Please enter max 3 letters</Text>
          ) : null
        ) : (
          <View>
            {pickupLoc.trim() !== '' ? (
              pickupLoc.length > 0 && filterOrigin.length > 0 ? (
                <FlatList
                  data={filterOrigin}
                  renderItem={({ item }) => renderLocation(item)}
                  keyExtractor={(item) => item.city}
                />
              ) : (
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.reqInfoText}>Not Found</Text>
                </View>
              )
            ) : null}
          </View>
        )}
        {pickupLoc.trim() === '' ? (
          <TouchableOpacity
            style={styles.currentLocationLayout}
            onPress={getPosition}
          >
            <MaterialIcons name='gps-fixed' size={16} color='green' />
            <Text style={styles.currentLocationText}>Current location</Text>
          </TouchableOpacity>
        ) : null}
      </Content>
    </Container>
  );
};

export default connect(null, { pickupLocation })(PickupLocation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textInputLayout: {
    padding: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textInput: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 0.5,
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    paddingLeft: 6,
  },
  currentLocationLayout: {
    margin: 10,
    padding: 20,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  currentLocationText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    paddingLeft: 25,
  },
  originLayout: {
    marginLeft: 50,
    marginTop: 20,
  },
  originText: {
    fontFamily: 'Roboto-Medium',
  },
  reqInfoText: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: 5,
  },
});

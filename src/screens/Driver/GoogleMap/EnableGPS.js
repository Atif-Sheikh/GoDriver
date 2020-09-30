import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EnableGPS = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const { longitude, latitude } = location;

  // Access current location
  useEffect(() => {
    getPosition();
  }, [latitude]);

  // Enable GPS to access current location
  const getPosition = async () => {
    try {
      if (navigator.geolocation) {
        let pos = await navigator.geolocation.getCurrentPosition(
          (pos) => {
            //setLocation(pos);
            navigation.navigate('Direction');
          },
          (error) => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        return pos;
      }
    } catch (error) {
      Alert.alert('ERR :', error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.gpsButtonLayout} onPress={getPosition}>
        <Text style={styles.turnOnGPSText}>TURN ON GPS</Text>
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          Allow GoTruck to turn on your phone GPS for accurate pickup.
        </Text>
      </View>
    </View>
  );
};

export default EnableGPS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  gpsButtonLayout: {
    alignItems: 'center',
    marginLeft: 70,
    marginRight: 70,
    paddingVertical: 20,
    backgroundColor: '#242A38',
    borderRadius: 10,
  },
  turnOnGPSText: {
    color: '#FFD328',
    fontFamily: 'Roboto-Medium',
  },
  info: {
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: {
    fontFamily: 'Roboto-Regular',
  },
});

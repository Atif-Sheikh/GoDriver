import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
  Image,
} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
  AnimatedRegion,
} from 'react-native-maps';
import { Container, Icon } from 'native-base';
import HeaderBar from '../../../components/HeaderBar';
import { Markers } from '../../../constants/Markers';

const Map = ({ navigation }) => {
  const [location, setLocation] = useState({
    coords: { latitude: 10.9601, longitude: 78.0766 },
  });

  const {
    coords: { longitude, latitude },
  } = location;

  // Accessing current position
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
            navigation.navigate('Enable GPS');
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        return pos;
      } else {
        navigation.navigate('Enable GPS');
      }
    } catch (error) {
      Alert.alert('ERR :', error);
    }
  };
  return (
    <Container>
      <HeaderBar />
      <MapView
        mapType={Platform.OS === 'android' ? 'standard' : 'none'}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapView}
      >
        {/* <Polyline coordinates={[Berlin, Frankfurt]} /> */}
        {Markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}
      </MapView>
    </Container>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapView: {
    height: '100%',
    width: '100%',
  },
});

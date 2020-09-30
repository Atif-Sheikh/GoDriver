import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons//FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TransporterItem = (props) => {
  return (
    <View>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='home' color={color} size={size} />
        )}
        label='Home'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => <Icon name='user' color={color} size={26} />}
        label='Profile'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name='google-maps'
            color={color}
            size={size}
          />
        )}
        label='BookTrip'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('BookTrip');
        }}
        inactiveTintColor='#324345'
      />
      {/* <DrawerItem
        icon={({ color, size }) => (
          <Icon name='plus-square' color={color} size={size} />
        )}
        label='CreateTruck'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('CreateTruck');
        }}
        inactiveTintColor='#324345'
      /> */}
      <DrawerItem
        icon={({ color, size }) => <Icon name='list' color={color} size={18} />}
        label='TripTransport'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('TripTransport');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='truck' color={color} size={16} />
        )}
        label='Truck'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Truck');
        }}
        inactiveTintColor='#324345'
      />
      {/* <DrawerItem
        icon={({ color, size }) => (
          <Icon
            name="info"
            color={color}
            size={18}
            style={{ paddingRight: 11 }}
          />
        )}
        label="TruckDetails"
        labelStyle={{ fontFamily: "Roboto-Regular" }}
        onPress={() => {
          props.navigation.navigate("TruckDetails");
        }}
        inactiveTintColor="#324345"
      /> */}
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='truck-moving' color={color} size={16} />
        )}
        label='TruckTypes'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('TruckTypes');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons name='track-changes' color={color} size={18} />
        )}
        label='Tracking'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Tracking');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='address-card' color={color} size={18} />
        )}
        label='About'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('About');
        }}
        inactiveTintColor='#324345'
      />
    </View>
  );
};

export default TransporterItem;

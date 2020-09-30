import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons//FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DriverItem = (props) => {
  return (
    <View>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='search' color={color} size={size} />
        )}
        label='Search'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Search');
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
      {/* <DrawerItem
              icon={({ color, size }) => (
                <Icon name="info-circle" color={color} size={size} />
              )}
              label="Detail"
              labelStyle={{ fontFamily: "Roboto-Regular" }}
              onPress={() => {
                props.navigation.navigate("Detail");
              }}
               inactiveTintColor="#324345"
            /> */}
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='truck' color={color} size={18} />
        )}
        label='Start Trip'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Start Trip');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => <Icon name='bell' color={color} size={22} />}
        label='Trip Notification'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Trip Notification');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='comments' color={color} size={18} />
        )}
        label='Feedback'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Feedback');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='calendar-check' color={color} size={size} />
        )}
        label='My Orders'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('My Orders');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='dashcube' color={color} size={size} />
        )}
        label='DashBoard'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('DashBoard');
        }}
        inactiveTintColor='#324345'
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='truck-loading' color={color} size={18} />
        )}
        label='Loading'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Loading');
        }}
        inactiveTintColor='#324345'
      />
      {/* <DrawerItem
        icon={({ color, size }) => (
          <Icon name='truck-loading' color={color} size={18} />
        )}
        label='UnLoading'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('UnLoading');
        }}
        inactiveTintColor='#324345'
      /> */}
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
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name='route' color={color} size={18} />
        )}
        label='Direction'
        labelStyle={{ fontFamily: 'Roboto-Regular' }}
        onPress={() => {
          props.navigation.navigate('Direction');
        }}
        inactiveTintColor='#324345'
      />
    </View>
  );
};

export default DriverItem;

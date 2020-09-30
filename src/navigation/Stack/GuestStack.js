import React from 'react';
import { View, Text } from 'react-native';
import Signin from '../../screens/Driver/Signin/Signin';
import Register from '../../screens/Driver/Signup/Signup';
import DrawStack from '../Drawer/DrawStack';

import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

const GuestStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='Signin'
        component={Signin}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Draw'
        component={DrawStack}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default GuestStack;

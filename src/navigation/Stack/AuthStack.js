import React from 'react';
import { View, Text } from 'react-native';
import Login from '../../screens/LogInScreen';
import Signup from '../../screens/SignupScreen';
import OTP from '../../screens/OtpScreen';
import Forgot from '../../screens/Forgot';
import Detail from '../../screens/Driver/Detail/Detail';
import Search from '../../screens/Driver/SearchShipment/SearchShipment';
import Profile from '../../screens/Profile';
import Signin from '../../screens/Driver/Signin/Signin';
import Register from '../../screens/Driver/Signup/Signup';
import DrawStack from '../Drawer/DrawStack';
import Home from '../../screens/Home';
import ForgotPassword from '../../screens/Driver/ForgotPassword/ForgotPassword';
import ResetPassword from '../../screens/Driver/ResetPassword/ResetPassword';
import ConfirmPassword from '../../screens/Driver/ConfirmPassword/ConfirmPassword';
import Truck from '../../screens/Driver/AddTruck/TruckScreen';
import TruckTypes from '../../screens/Transporter/TruckTypes/TruckTypes';
import TruckDetails from '../../screens/Transporter/TruckDetails/TruckDetails';
import LocationEnable from '../../screens/Driver/GoogleMap/EnableGPS';

import { createStackNavigator } from '@react-navigation/stack';
import Category from '../../screens/Transporter/Category/Category';
import Rating from '../../screens/Transporter/Rating/Rating';
const RootStack = createStackNavigator();

const AuthStack = () => {
  return (
    <RootStack.Navigator initialRouteName='Draw'>
      <RootStack.Screen
        name='Signin'
        component={Signin}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Enable GPS'
        component={LocationEnable}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Signup'
        component={Signup}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='OTP'
        component={OTP}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Forgot'
        component={Forgot}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Truck'
        component={Truck}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Detail'
        component={Detail}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Search'
        component={Search}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Draw'
        component={DrawStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='ForgotPass'
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='ResetPass'
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='ConfirmPass'
        component={ConfirmPassword}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='TruckTypes'
        component={TruckTypes}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='TruckDetails'
        component={TruckDetails}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Category'
        component={Category}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='Rating'
        component={Rating}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default AuthStack;

import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';

//DriverScreen
import Booking from '../../screens/Driver/Booking/Booking';
import DashBoard from '../../screens/Driver/DashBoard/Dash';
import Driver from '../../screens/Driver/Profile/DriverProfile';
import Settings from '../../screens/Driver/Settings/Settings';
import Shipment from '../../screens/Driver/Shipment/ShipmentCreate';
import MessageInfo from '../../screens/Driver/Message/MessageInfo';
import Message from '../../screens/Driver/Message/Message';
import Loading from '../../screens/Driver/Loading/Loading';
import UnLoading from '../../screens/Driver/UnLoading/UnLoading';
import Detail from '../../screens/Driver/Detail/Detail';
import About from '../../screens/Driver/About/About';
import SearchShipment from '../../screens/Driver/SearchShipment/SearchShipment';
import StartTrip from '../../screens/Driver/StartTrip/StartTrip';

//Transporter
import CreateTrip from '../../screens/Transporter/CreateTrip/CreateTrip';
import CreateTruck from '../../screens/Transporter/CreateTruck/CreateTruck';
import Trip from '../../screens/Transporter/Trip/Trip';
import Truck from '../../screens/Transporter/Truck/Truck';
import TruckDetails from '../../screens/Transporter/TruckDetails/TruckDetails';
import TruckTypes from '../../screens/Transporter/TruckTypes/TruckTypes';

import Map from '../../screens/Driver/GoogleMap/Map';

// DrawerContent
import DrawerContent from './DrawerContent';
import Tracking from '../../screens/Transporter/Tracking/Tracking';
import Pickup from '../../screens/Driver/StartTrip/Pickup';
import Drop from '../../screens/Driver/StartTrip/Drop';

const Drawer = createDrawerNavigator();

const DrawStack = ({ navigation }) => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '50%' }}
      overlayColor='transparent'
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Search' component={SearchShipment} />
      <Drawer.Screen name='Profile' component={Profile} />
      {/*Stack Operation*/}

      <Drawer.Screen name='Detail' component={Detail} />
      <Drawer.Screen name='Start Trip' component={StartTrip} />
      <Drawer.Screen name='Search Pickup' component={Pickup} />
      <Drawer.Screen name='Search Drop' component={Drop} />
      <Drawer.Screen name='Trip Notification' component={MessageInfo} />
      <Drawer.Screen name='Feedback' component={Message} />
      <Drawer.Screen name='My Orders' component={Booking} />
      <Drawer.Screen name='DashBoard' component={DashBoard} />
      <Drawer.Screen name='Loading' component={Loading} />
      <Drawer.Screen name='UnLoading' component={UnLoading} />
      <Drawer.Screen name='About' component={About} />
      <Drawer.Screen name='Direction' component={Map} />
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='BookTrip' component={CreateTrip} />
      <Drawer.Screen name='CreateTruck' component={CreateTruck} />
      <Drawer.Screen name='TripTransport' component={Trip} />
      <Drawer.Screen name='Truck' component={Truck} />
      <Drawer.Screen name='TruckDetails' component={TruckDetails} />
      <Drawer.Screen name='TruckTypes' component={TruckTypes} />
      <Drawer.Screen name='Tracking' component={Tracking} />
    </Drawer.Navigator>
  );
};

export default DrawStack;

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import Navigation from './src/navigation/Stack/RootStack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// Redux
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [assestsloaded, setAssestsLoaded] = useState(false);

  const fetchfonts = () => {
    return Font.loadAsync({
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });
  };

  if (!assestsloaded) {
    return (
      <AppLoading
        startAsync={fetchfonts}
        onFinish={() => setAssestsLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

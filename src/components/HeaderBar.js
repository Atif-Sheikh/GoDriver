import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Header, Icon } from 'native-base';
import Styles from '../style/Style';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = () => {
  const navigation = useNavigation();
  return (
    <Header style={Styles.navigation}>
      <StatusBar backgroundColor='#242A38' animated barStyle='light-content' />
      <View style={Styles.nav}>
        <View style={Styles.navLeft}>
          <TouchableOpacity
            style={Styles.navLeft}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name='arrow-back'
              type='MaterialIcons'
              style={Styles.navIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.navMiddle} />
        <View style={Styles.navRight} />
      </View>
    </Header>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({});

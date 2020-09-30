import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container, Header, Icon, Content } from 'native-base';
import HeaderBar from '../../../components/HeaderBar';

const StartTrip = ({ navigation }) => {
  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={styles.layoutDefault}>
        <Image
          source={require('../../../../assets/bg.png')}
          style={styles.bgImg}
        />
        <View style={styles.tripItem}>
          <View style={styles.tripInfo}>
            <TouchableOpacity
              style={styles.pickupLocation}
              onPress={() => navigation.navigate('Search Pickup')}
            >
              <Icon
                name='location-pin'
                type='Entypo'
                style={{ fontSize: 20, color: 'green' }}
              />
              <Text style={styles.pickupText}>Pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropLocation}
              onPress={() => navigation.navigate('Search Drop')}
            >
              <Icon
                name='location-pin'
                type='Entypo'
                style={{ fontSize: 20, color: '#d11a2a' }}
              />
              <Text style={styles.dropText}>Drop </Text>
            </TouchableOpacity>
            <View style={styles.decisionBox}>
              <TouchableOpacity
                style={styles.startTripButton}
                onPress={() => navigation.navigate('Direction')}
              >
                <Text style={styles.startText}>Start Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rejectTripButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.rejectText}>Reject Trip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default StartTrip;

const styles = StyleSheet.create({
  // *** Content *** //
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: '#F1F2F6',
    width: '100%',
    height: '100%',
  },
  bgLayout: {},
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: 230,
  },
  tripItem: {
    flex: 1,
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 15,
    marginBottom: 250,
    borderRadius: 3,
  },
  tripInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  pickupLocation: {
    margin: 20,
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
  dropLocation: {
    margin: 20,
    padding: 20,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'blue',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  pickupText: {
    fontFamily: 'Roboto-Regular',
  },
  dropText: {
    fontFamily: 'Roboto-Regular',
  },
  decisionBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  startTripButton: {
    alignItems: 'center',
    marginTop: 50,
    // marginRight: 30,
    // marginLeft: 30,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#1aaa55',
  },
  rejectTripButton: {
    alignItems: 'center',
    marginTop: 50,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#d11a2a',
  },
  startText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },
  rejectText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },
  locationIcon: {
    fontSize: 10,
  },
  colorGreen: {
    color: 'green',
  },
});

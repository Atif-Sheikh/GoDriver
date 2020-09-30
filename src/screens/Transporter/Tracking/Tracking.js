import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import HeaderBar from '../../../components/HeaderBar';
import Style from '../../../style/Style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tracking = () => {
  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={styles.layoutDefault}>
        <Image
          source={require('../../../../assets/bg.png')}
          style={styles.bgImg}
        />
        <View style={styles.hTop}>
          <MaterialIcons name='track-changes' size={64} color='#FFD328' />
          <View style={styles.hContent}>
            <Text style={styles.hTopText}>Track Order</Text>
            <Text style={styles.hTopDesc}>Track your order status</Text>
          </View>
        </View>
        <View style={styles.orderStatusLayout}>
          <View style={styles.orderStatus}>
            <Icon
              name='location-pin'
              type='Entypo'
              style={{ fontSize: 20, color: 'green' }}
            />
            <Text style={styles.locationText}>Order Placed</Text>
          </View>
          <View style={styles.orderStatus}>
            <Icon
              name='location-pin'
              type='Entypo'
              style={{ fontSize: 20, color: '#FFD328' }}
            />
            <Text style={styles.locationText}>Location</Text>
          </View>
          <View style={styles.orderStatus}>
            <Icon
              name='location-pin'
              type='Entypo'
              style={{ fontSize: 20, color: '#FFD328' }}
            />
            <Text style={styles.locationText}>Location</Text>
          </View>
          <View style={styles.orderStatus}>
            <Icon
              name='location-pin'
              type='Entypo'
              style={{ fontSize: 20, color: '#FFD328' }}
            />
            <Text style={styles.locationText}>Out for Delivery</Text>
          </View>
          <View style={styles.orderStatus}>
            <Icon
              name='location-pin'
              type='Entypo'
              style={{ fontSize: 20, color: '#d11a2a' }}
            />
            <Text style={styles.locationText}>Estimated Arrival</Text>
          </View>
          <View style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }}>
            <TouchableOpacity
              style={styles.deliverButton}
              onPress={() => Alert.alert('Contact GoTruck')}
            >
              <Text style={styles.deliverText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Tracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: '#F1F2F6',
  },
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: 250,
  },
  hTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  hContent: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  hTopText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
    marginBottom: 5,
  },
  hTopDesc: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 10,
  },
  orderStatusLayout: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 20,
    borderRadius: 3,
    padding: 15,
    justifyContent: 'space-around',
  },
  orderStatus: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  locationText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    marginLeft: 50,
  },
  deliverButton: {
    backgroundColor: '#242A38',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  deliverText: {
    fontFamily: 'Roboto-Regular',
    color: '#FFD328',
    fontSize: 18,
  },
});

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Picker,
  TextInput,
  Alert,
} from 'react-native';
import HeaderBar from '../../../components/HeaderBar';
import { Container, Content, Icon, Label } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Goods } from '../../../constants/Goods';
import { trucks, tonnes } from '../../../constants/TruckCapacity';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Category = ({ navigation }) => {
  const [goods, setGoods] = useState('Choose Type of Goods');
  const [goodsWeight, setGoodsWeight] = useState(0);
  const [truckType, setTruckType] = useState('');
  const [truckCapacity, setTruckCapacity] = useState(0);
  const [numberOfTrucks, setNumberOfTrucks] = useState(0);

  const availabeTruck = trucks.filter((truck) => truck.maxDistance >= 250);
  const availableTonnes = tonnes.filter((ton) => ton.ton >= goodsWeight);

  // onChange goods weight
  const onChangeGoodsWeight = (weight) => {
    if (weight >= 40) {
      return setGoodsWeight(0);
    } else {
      setGoodsWeight(weight);
    }
  };

  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={styles.container}>
        <Image
          source={require('../../../../assets/bg.png')}
          style={styles.bgImg}
        />
        <View style={styles.hTop}>
          <Icons name='luggage-cart' size={64} color='#FFD328' />
          <View style={styles.hContent}>
            <Text style={styles.hTopText}>Category</Text>
            <Text style={styles.hTopDesc}>Select your Goods and Truck</Text>
          </View>
        </View>
        <View style={{ width: '100%', marginBottom: 15 }}>
          <View style={styles.infoBox}>
            <View style={styles.goodsLayout}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#242A38',
                  fontFamily: 'Roboto-Medium',
                }}
              >
                Goods
              </Text>
            </View>
            <View style={styles.fSelect}>
              <View style={{ flex: 1 }}>
                <Picker
                  style={[styles.fPickerItem, { fontSize: 5 }]}
                  onValueChange={(value) => setGoods(value)}
                  selectedValue={goods}
                >
                  {Goods.map((goodsType) => (
                    <Picker.Item
                      label={goodsType.name}
                      value={goodsType.name}
                    />
                  ))}
                </Picker>
              </View>
              <Icon
                name='luggage-cart'
                type='FontAwesome5'
                style={styles.fIcon}
              />
            </View>
            <View style={styles.tonInputLayout}>
              <TextInput
                placeholder='Ton'
                style={styles.tonInput}
                keyboardType='number-pad'
                onChangeText={onChangeGoodsWeight}
              />
            </View>
          </View>
          <View style={styles.infoBox}>
            <View
              style={{
                backgroundColor: '#FFD328',
                paddingVertical: 10,
                borderRadius: 3,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#242A38',
                  fontFamily: 'Roboto-Medium',
                }}
              >
                Truck
              </Text>
            </View>
            <View style={styles.fSelect}>
              <View style={{ flex: 1 }}>
                <Picker
                  style={[styles.fPickerItem, { fontSize: 5 }]}
                  onValueChange={(value) => setTruckType(value)}
                  selectedValue={truckType}
                >
                  {availabeTruck.map((truck) => (
                    <Picker.Item
                      label={truck.truckType}
                      value={truck.truckType}
                    />
                  ))}
                </Picker>
              </View>
              <Icon name='truck' type='FontAwesome5' style={styles.fIcon} />
            </View>
            <View style={styles.fSelect}>
              <View style={{ flex: 1 }}>
                <Picker
                  style={[styles.fPickerItem, { fontSize: 5 }]}
                  onValueChange={(value) => setTruckCapacity(value)}
                  selectedValue={truckCapacity.toString()}
                >
                  {availableTonnes.map((truck) => (
                    <Picker.Item
                      label={`${truck.ton.toString()} ton`}
                      value={truck.ton.toString()}
                    />
                  ))}
                </Picker>
              </View>
              <Icon
                name='luggage-cart'
                type='FontAwesome5'
                style={styles.fIcon}
              />
            </View>
            <View style={styles.tonInputLayout}>
              <TextInput
                placeholder='Numbe of Trucks'
                style={styles.tonInput}
                onChangeText={(truck) => setNumberOfTrucks(truck)}
                keyboardType='number-pad'
              />
            </View>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text
            style={{
              paddingVertical: 15,
              paddingLeft: 20,
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
            }}
          >
            Price:
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD328',
            paddingVertical: 10,
            borderRadius: 3,
            marginLeft: 15,
            marginRight: 15,
          }}
          onPress={() => navigation.navigate('Rating')}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#242A38',
              fontFamily: 'Roboto-Medium',
            }}
          >
            Book
          </Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
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
  /** Form **/
  regForm: {
    width: '100%',
    marginBottom: 5,
  },
  regText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF',
  },
  infoBox: {
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
    marginBottom: 20,
    borderRadius: 3,
  },
  fSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  fRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
    }),
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(36,42,56,0.05)',
  },
  fPickerItem: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
  tonInputLayout: {
    marginBottom: 5,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  tonInput: {
    height: 25,
    paddingLeft: 15,
    marginBottom: 5,
  },
  goodsLayout: {
    backgroundColor: '#FFD328',
    paddingVertical: 10,
    borderRadius: 3,
  },
});

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Container, Content } from 'native-base';
import HeaderBar from '../../../components/HeaderBar';
// Redux
import { connect } from 'react-redux';
import { destinationLocation } from '../../../redux/actions/coords';

import { Destination } from '../../../constants/Coords';

const DropLocation = ({ navigation, destinationLocation }) => {
  const [destinationLoc, setDestinationLocation] = useState('');
  const [filterDestination, setFilterDestination] = useState([]);

  // Change location
  const onChangeLocation = (e) => {
    setDestinationLocation(e);

    // Filter origin
    const filter_destination = Destination.filter((dest) => {
      let destination_point = dest.city.toLowerCase();
      let filter = destinationLoc.toLowerCase();
      return destination_point.includes(filter);
    });
    setFilterDestination(filter_destination);
  };

  // Submit Location
  const onSubmit = (loc) => {
    // Passing destination to redux
    destinationLocation(loc);

    setDestinationLocation('');
    navigation.goBack();
  };
  // Render Location
  const renderLocation = (loc) => {
    return (
      <View style={styles.destinationLayout}>
        <TouchableOpacity onPress={() => onSubmit(loc)}>
          <Text style={styles.destinationText}>{loc.city}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={styles.container}>
        <View style={styles.textInputLayout}>
          <TextInput
            placeholder='Drop location'
            style={styles.textInput}
            placeholderTextColor='grey'
            autoFocus={true}
            onChangeText={(e) => onChangeLocation(e)}
            value={destinationLoc}
          />
        </View>
        {destinationLoc.length < 3 ? (
          destinationLoc.length < 3 && destinationLoc.trim() !== '' ? (
            <Text style={styles.reqInfoText}>Please enter max 3 letters</Text>
          ) : null
        ) : (
          <View>
            {destinationLoc.trim() !== '' ? (
              destinationLoc.length > 0 && filterDestination.length > 0 ? (
                <FlatList
                  data={filterDestination}
                  renderItem={({ item }) => renderLocation(item)}
                  // keyExtractor={({item}) => {item.id}}
                />
              ) : (
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.reqInfoText}>Not Found</Text>
                </View>
              )
            ) : null}
          </View>
        )}
      </Content>
    </Container>
  );
};

export default connect(null, { destinationLocation })(DropLocation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textInputLayout: {
    padding: 10,
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
    marginBottom: 5,
  },
  textInput: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 0.5,
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    paddingLeft: 6,
  },
  destinationLayout: {
    marginLeft: 50,
    marginTop: 20,
  },
  destinationText: {
    fontFamily: 'Roboto-Medium',
  },
  reqInfoText: {
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginTop: 5,
  },
});

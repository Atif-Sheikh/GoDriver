import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Container, Content } from 'native-base';
import HeaderBar from '../../../components/HeaderBar';

const Rating = () => {
  return (
    <Container>
      <HeaderBar />
      <Content contentContainerStyle={styles.container}>
        <Image
          source={require('../../../../assets/bg.png')}
          style={styles.bgImg}
        />
        <View style={styles.infoBox}>
          <Text>Rating</Text>
        </View>
        <View>
          <TextInput
            placeholder='Optional'
            style={styles.commentTextInput}
            multiline
          />
        </View>
      </Content>
    </Container>
  );
};

export default Rating;

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
  commentTextInput: {
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    fontSize: 15,
    
  }
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import AuthStack from './AuthStack';
import GuestStack from './GuestStack';

const Navigation = ({ auth }) => {
  console.log('AUTH : ', auth);
  const { isAuthenticated } = auth;
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthStack /> : <GuestStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Navigation);

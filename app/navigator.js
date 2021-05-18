import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './before-login/Login';
import SignUp from './before-login/Signup';
import Otp from './before-login/Otp';
import {navigationRef} from '../app/redux/navigationService';

const RootStack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'Login'} component={Login} />
        <RootStack.Screen name={'SignUp'} component={SignUp} />
        <RootStack.Screen name={'OTP'} component={Otp} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

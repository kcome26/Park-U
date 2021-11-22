import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from './screens';
import  HomeScreen  from './screens/landingScreen';
import  LotScreen  from './screens/LotScreen';
import { render } from 'react-dom';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen 
        name='Login'
        component = {AuthScreen}
        options={{title: 'Welcome'}}
        />
         {/* <AuthScreen /> */}
         <Stack.Screen 
         name = 'Home' 
         component={HomeScreen} />
        <Stack.Screen 
         name = 'ParkingLot' 
         component={LotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
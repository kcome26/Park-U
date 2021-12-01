import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from './screens';
import  HomeScreen  from './screens/landingScreen';
import  frontNineLot  from './screens/frontNineLot';
import  pftLot  from './screens/pftLot';
import  unionLot  from './screens/unionLot';
import  urecLot  from './screens/urecLot';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen 
        name='Login'
        component = {AuthScreen}
        options={{headerShown:false}}
        />
         <Stack.Screen 
         name = 'Home' 
         component={HomeScreen} 
         options={{headerShown:false}}/>
        <Stack.Screen 
         name = 'Front nine lot' 
         component={frontNineLot} 
         options={{headerShown:false}}/>
        <Stack.Screen 
         name = 'PFT lot' 
         component={pftLot} 
         options={{headerShown:false}}/>
        <Stack.Screen 
         name = 'UREC lot' 
         component={urecLot} 
         options={{headerShown:false}}/>
        <Stack.Screen 
         name = 'Union lot' 
         component={unionLot} 
         options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
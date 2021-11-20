import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from './screens';
import  HomeScreen  from './screens/landingScreen';
import  LotScreen  from './screens/LotScreen';
import { render } from 'react-dom';

const Stack = createStackNavigator();

export default function App() {
  return (
    //<View style={styles.container}>
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
    //<StatusBar style="auto" />
   //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
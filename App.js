import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen } from './screens';
import { landingScreen } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen 
          name="Login"
          component = {AuthScreen}
          options={{title: 'Welcome'}}
          />
         {/* <AuthScreen /> */}
         <Stack.Screen 
         name = 'Home' 
         component={landingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
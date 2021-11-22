import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const HomeScreen = ({ navigation }) => {
    let location = {
        latitude: 30.4133,
        longitude: -91.18,
        latitudeDelta: .02,
        longitudeDelta: .02,
      }
    const mapStyles = {
        width: '90%',
        height: '50%',
        position: 'absolute',
        bottom: 20,
        };
    return(
        <View style={styles.container}>
            <MapView
                style ={mapStyles}
                provider={PROVIDER_GOOGLE}
                zoom = {13}
                mapType='hybrid'
                region={location}
            >
            </MapView>
        </View>
    )

}
const LoginScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}</Text>
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default HomeScreen;

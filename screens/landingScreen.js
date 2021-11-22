import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
        borderRadius: 20,
        };
    return(
        <View style={styles.container}>
            <MapView
                style ={mapStyles}
                provider={PROVIDER_GOOGLE}
                mapType='hybrid'
                region={location}
            >
            </MapView>
            <View style={styles.inputs}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    navigation.navigate('ParkingLot', { name: 'ParkingLot'})
                    }>
                    <Text style={styles.buttonText}>Parking Lot</Text>
                </TouchableOpacity>
            </View>
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
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },  
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },  
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16, 
        minHeight: 40,
    },
    button: {
        width: '40%',
        backgroundColor: 'black',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 300,
        left: 100,
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
  });
export default HomeScreen;

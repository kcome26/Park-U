import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://167.96.124.247:5000';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import Geolocation from "react-native-geolocation-service";

const HomeScreen = ({ navigation }) => {
    let location = {
        latitude: 30.4133,
        longitude: -91.18,
        latitudeDelta: .02,
        longitudeDelta: .02,
      }
const mapStyles = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 20,
        };
const renderButtonText = (rowData) => {
    const {label, value} = rowData;
        navigation.navigate('ParkingLot', { name: 'ParkingLot'})
        return `${label}`;
        };

const data = ["PFT", "UREC", "Union"];
    
    return(
        <View style={styles.container}>
            <View style={styles.mapCard}>
                <MapView
                style ={mapStyles}
                provider={PROVIDER_GOOGLE}
                mapType='hybrid'
                region={location}
            >
            <MapView.Marker
                coordinate={{latitude: 30.4054,
                longitude: -91.18}}
                title={"PFT"}
                description={"Patrick F. Taylor Lot"}
            />
            <MapView.Marker
                coordinate={{latitude: 30.4125,
                longitude: -91.170}}
                title={"UREC"}
                description={"University Recreation Lot"}
            />
            <MapView.Marker
                coordinate={{latitude: 30.4118,
                longitude: -91.1775}}
                title={"Union"}
                description={"Student Union Parking lot"}
            />
            </MapView>
            </View>
            
            
            <View style= {styles.card}>
            <ModalDropdown options={data}
            renderButtonText={(rowData) => renderButtonText(rowData)}
            textStyle={{
                fontSize: 20,
                color: "black",
                paddingLeft: 95,
                //textAlign: "left",
                //alignContent: 'center',
                alignItems: "center",
            }}
            dropdownTextStyle={{
                color: "rgba(48, 255, 255, 100.0)",
                color: "black",
                letterSpacing: 1,
                fontSize: 20,
            }}
            dropdownStyle={{ 
                height: 145,
                width: 300,
                //paddingRight: 10, 
                //paddingLeft: 10, 
                //paddingRight: 5, 
                //alignItems: 'flex-end', 
                alignItems: 'center',
                 
                alignContent: 'center', 
                borderWidth: 5,
                borderTopEndRadius: 0,
                borderTopLeftRadius: 0,
                borderRadius: 12,
                borderColor: "rgba(48, 255, 255, 50.0)",
                //paddingRight: 100,
             }}
                
            style={{
                backgroundColor: 'rgba(48, 255, 255, 100.0)',
                justifyContent: 'center',
                //paddingLeft: 80,
                //alignContent: 'left',
                //alignItems: 'left',
                //backgroundColor: "black",
                width: 300,
                height: 50,
                borderRadius: 12,
                //paddingRight: 100,
            }}
            
            />
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
    mapCard: {
        backgroundColor: '#f0f',
        width: '90%',
        height: '50%',
        position: 'absolute',
        bottom: 20,
        borderRadius: 20,
        },
    card: {
        //backgroundColor: 'rgba(0, 255, 255, 100.0)',
        width: 300,
        height: 50,
        marginTop: '10%',
        //borderRadius: 20,
        bottom: 200,
        //alignItems: 'flex-end',
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

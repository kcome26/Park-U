import React from "react";
import { Button } from "react-native";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const HomeScreen = ({ navigation }) => {
    
    const mapStyles = {
        height: "100vh",
        width: "100%"};
        
    const defaultCenter = {
        lat: 41.3851, lng: 2.1734}
    
    return(
        
        <Button
        title="PFT Lot"
        onPress={() =>
            navigation.navigate('ParkingLot', { name: 'ParkingLot'})
        }
        />
        
       /*
        <LoadScript
            googleMapsApiKey='AIzaSyBuOADyqLUA_xpaXBsMJjYncyYkB2JBtvE'>
                <GoogleMap  mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                />
            </LoadScript>
            */
    )
}
const LoginScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}</Text>
};

export default HomeScreen;

import React from "react";
import { Button } from "react-native";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const HomeScreen = ({ navigation }) => {
    /* // for google maps api
    const mapStyles = {
        height: "100vh",
        width: "100%"};
        
    const defaultCenter = {
        lat: 41.3851, lng: 2.1734}
    */
   
    // other attempt at google maps api
    const createIframe = require("node-iframe");
    applicationCache.use(createIframe);
    applicationCache.get("/iframe", (req, res) => {
        res.createIframe({
            url: req.quirey.url,
            baseHref: req.query.baseHref,
            config: { cors: { script: true } },
        })
    })
    return(
        
        <Button
        title="PFT Lot"
        onPress={() =>
            navigation.navigate('ParkingLot', { name: 'ParkingLot'})
        }
        />
        
       /*
       <iframe 
            width="600"
            height="450"
            frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/MODE?/key=AIzaSyBuOADyqLUA_xpaXBsMJjYncyYkB2JBtvE&parameters" allowfullscreen>    
        </iframe>
        */
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

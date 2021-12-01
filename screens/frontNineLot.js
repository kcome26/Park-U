import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import styles from './LotCSS';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://167.96.124.247:5000';
const frontNineLot = ({ navigation}) => {
    return(
        <ImageBackground source={require('../public/images/ParkingLot.png')} style={styles.image}> 
            <View style={styles.inputs}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    navigation.navigate('Home', { name: 'Home'})
                    }>
                    <Image
                    source={require('../public/images/ParkU_logo.png')}
                    style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
        
    )
}

export default frontNineLot;
import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import styles from './LotCSS';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ModalDropdown from 'react-native-modal-dropdown';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://167.96.124.247:5000';
const pftLot = ({ navigation}) => {
    let location = {
        latitude: 30.4054,
        longitude: -91.18,
        latitudeDelta: .003,
        longitudeDelta: .003,
      }
    const mapStyles = {
        width: '90%',
        height: '50%',
        position: 'absolute',
        bottom: 20,
        borderRadius: 20,
        };
        const renderButtonText = (rowData) => {
            const label = rowData;
            navigation.navigate(label, { name: label})
            return `${label}`;
          };
    const data = [ "UREC lot", "Union lot"];
    return(
        <View style={styles.container}>
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
            </MapView>
            <View style= {styles.card}>
            <ModalDropdown options={data}
            renderButtonText={(rowData) => renderButtonText(rowData)}
            dropdownStyle={{ 
                paddingRight: 10, 
                paddingLeft: 10, 
                paddingRight: 5, 
                alignItems: 'flex-end', 
                borderWidth: 5,
                borderRadius: 5,}}
            />
            </View>
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
        </View>
    )

}

export default pftLot;
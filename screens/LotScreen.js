import React from "react";
import { Button } from "react-native";

const LotScreen = ({ navigation}) => {
    return(
        <Button
        title="Lot screen"
        onPress={() =>
            navigation.navigate('Login', { name: 'Login'})
        }
        />
    )
}


export default LotScreen;
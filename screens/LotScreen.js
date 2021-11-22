import React from "react";
import { Button } from "react-native";

const LotScreen = ({ navigation}) => {
    return(
        <Button
        title="login"
        onPress={() =>
            navigation.navigate('Login', { name: 'Login'})
        }
        />
    )
}


export default LotScreen;
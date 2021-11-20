import React from "react";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return(
        <Button
        title="Hi"
        onPress={() =>
            navigation.navigate('Login', { name: 'Login'})
        }
        />
    )
}
const LoginScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}</Text>
};

export default HomeScreen;
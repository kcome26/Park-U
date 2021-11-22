import React from "react";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return(
        <Button
        title="parking lot"
        onPress={() =>
            navigation.navigate('ParkingLot', { name: 'ParkingLot'})
        }
        />
    )
}
const LoginScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}</Text>
};

export default HomeScreen;
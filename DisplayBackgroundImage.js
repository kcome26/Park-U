import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  backgroundImage: {
    width: 300,
    height: 400,
  },
});

const DisplayBackgroundImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage}
      source={require('./assets/Joker.jpg')} />
    </View>
  )
}

export default DisplayBackgroundImage;

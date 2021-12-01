import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 25, 0.0)',
        width: '30%',
        height: 20,
        marginTop: '10%',
        borderRadius: 20,
        bottom: 100,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }, 
    icon: {
        flex: .7,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        right: 75,
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
            width: 150,
            height: 75,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
            bottom: 300,
            right: 100,
        },
    });
    export default styles;
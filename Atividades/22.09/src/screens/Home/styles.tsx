import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202022',

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        color: '#CACACA',
        backgoundColor: "#878787",
        borderRadius: 5,
        fontWeight: "200",

        width: '60%',
        margin: 10,
    },
    btn: {
        backgroundColor: "#00BBC9",
        fontSize: 14,
        width: '60%',
        margin: 10,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    btnTxt: {
        
    },
    title: {
        color: '#00BBC9',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
});
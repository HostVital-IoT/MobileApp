import { StyleSheet } from "react-native"
import Colors from "../../res/Colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        margin: 20,
        width: '90%',
        height: 'auto',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    layerColor: {
        flex: 2,
        width: '100%',
        backgroundColor: '#3a404935',
        justifyContent: 'center',
        alignItems: 'center',

    },
    form_s: {
        height: 550,
        width: '180%',
        paddingHorizontal:1,
        marginTop: '-10%',
        borderRadius: 30,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    signup: {
        color: Colors.white,
        fontSize: 30,
        textAlign: 'center',
      
    },
    signupform: {
        paddingVertical: 180,
    },
    input: {
        paddingVertical: 5,
        width: 250,
        paddingHorizontal: 12,
        borderWidth: 1,
        color: Colors.white,
        borderRadius: 10,
        borderColor: Colors.white,
    },
    inputText: {
        fontSize: 18,
        marginTop: 10,
        color: Colors.white,
        marginBottom: 5,
        marginLeft: 40,
    },
    submit: {
        marginVertical: 30,
        width: '30%',
        borderWidth: 1,
        borderColor: Colors.zircon,
        borderRadius: 15,
        backgroundColor: Colors.charade,
    },
    submitText: {
        fontSize: 16,
        margin: 1,
        color: Colors.white,
        textAlign: 'center',
    },
    button: {
        padding: 15,
        height: 45,
        marginTop: 50,
        borderRadius: 15,
        borderColor: Colors.white,
        borderWidth: 1,
    },
    buttonText: {
        position: 'absolute',
        textAlign: 'center',
        top: 8,
        left: 62,
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    },
    inputPassword:{
        width: '85%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        flex: 1,
        color: Colors.blackPearl,
    
    },
    password:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 17,
        borderColor: Colors.shadow,
        backgroundColor: Colors.shadow,
        opacity: .7,
        fontWeight: 'bold',
        
       
    },

});

export default styles;
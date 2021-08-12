import { StyleSheet } from "react-native"
import Colors from "../../res/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        
        
    },
    scrollView: {
        flex: 1,
    },
    layerColor: {
        flex: 2,
        width: '100%',
        backgroundColor: '#3a404935',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-150,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',

    },
    scrollForm: {
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#efefefff',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        color: Colors.white,
    },

    formText:{
        color:Colors.charade,
    },
    formgroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '80%',
        
    },

    inputname: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 17,
        borderColor: Colors.shadow,
        backgroundColor: Colors.shadow,
        opacity: .7, 
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontWeight: 'bold', 
        color: Colors.zircon,
    
    },
    inputs: {
        paddingVertical: 5,
        paddingHorizontal: 12,
    
 
          
    },
    inputText: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
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
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 17,
        borderColor: Colors.shadow,
        backgroundColor: Colors.shadow,
        opacity: .7,
        fontWeight: 'bold',
        
       
    },
    passwords:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.white,
    },
    submit:{
        marginVertical: 35,
        width: '35%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.blue,
        backgroundColor: Colors.blue,
    },
    submitText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginVertical: 10,
        color: Colors.white,
        textAlign: 'center',
    },

    errorContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FF353C40',
        borderRadius: 5,
    },
    errorMsg: {
        color: Colors.white,
    },
    signUpTouchable:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    ydhay:{
        color:Colors.shadow,
        fontSize: 16,
    },
    signUpBoldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
    },
    logo:{
        width: 100,
        height:100,
        marginRight:320,
        marginVertical:10,
        marginTop: 40,

        
    },

});



export default styles;
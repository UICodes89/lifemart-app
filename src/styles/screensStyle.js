
import { StyleSheet } from 'react-native';
const screens = StyleSheet.create({
    topbar:{
        backgroundColor: '#c0e53d',
        justifyContent: 'space-around',
        paddingTop:30,
        paddingBottom:30,
        marginTop:0,
        maxHeight:6,
        paddingLeft:15,
        paddingRight:15
    },
    container: {
        //flex:1
    },
});

const welcomeemailauth = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight:"bold",
        color:"#676763",

    },
    instructions: {
        textAlign: 'center',
        color: '#5d5858',
        fontWeight:"bold",
        fontSize:12
    },
      input:{
        width:"100%",
        backgroundColor:"#ebecec",
        borderWidth:0,
        color:"#191818",
        textAlign:"left",
        borderRadius:15,
        paddingTop:13,
        paddingBottom:13,
        paddingLeft:15,
        marginTop:20
      },
      fullWidth:{ 
        width:"92%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      fullWidthButtonText: {
        backgroundColor: '#c0e53d',
        fontSize:14,
        color: '#191818',
        width:"100%",
        textAlign:"center",
        alignItems: 'center',
        padding:15,
        borderRadius:20,
        marginTop:20
      },
      createaccount:{
        width:"100%",
        fontSize:14,
        textAlign:"center",
        color: '#849e26',
        alignItems: 'center',
        padding:15
      },
      needhelp:{
        width:"100%",
        color: '#849e26',
        fontSize:12,
        textAlign:"center",
        alignItems: 'center',
        marginTop:5,
      }

})

module.exports = {
    screens: screens,
    welcomeemailauth:welcomeemailauth
}

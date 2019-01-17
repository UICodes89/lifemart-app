
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    searchIcon: {
        fontFamily: 'Cochin',
        color:"#3c5b0f",
        fontSize:20
      },
      header:{
          fontSize:22,
          fontWeight:"bold",
          color:"#212f1b",
          textAlign:"center",
          alignItems: 'center',
      },
      expandall:{
          fontSize:15,
          fontWeight:"bold",
          color:"#212f1b",
          textAlign:"center",
          alignItems: 'center',
      },
      imageWrapper: {
        marginTop:100,
        marginBottom:70,
        alignItems: 'center',
        //flexDirection:"column"
      },
      image: {
        width:150,
        height:50
      },
      bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        
      },
      termPrivacy:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        justifyContent: 'space-around',
        
      },
      bottomLink:{
        marginTop:50,
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center',
        
      },
      flink:{
        color: '#849e26',
      }
    

});

export default styles;
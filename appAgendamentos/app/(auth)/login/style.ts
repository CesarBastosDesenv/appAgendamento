import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       padding: 20,
       backgroundColor:'#bcbec2',
    },
    logo:{
       width: 200, 
       height: 200
    }, 
    titleImput:{
       marginLeft: 5,
       color: '#2E2E2E',
       fontWeight:'bold',
       marginTop:20, 
       fontSize:18
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:5,
        backgroundColor:'#D3D3D3',
        borderColor:'#D3D3D3',
        marginBottom:20
    },input:{
    height:'100%',
    width:'90%',
    borderRadius: 40,
    paddingLeft: 5,
   },
   button:{
     width:210,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#808080',
    borderRadius:40,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height:3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

   },
   textButton:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
   },
   textCadastro:{
    fontSize:16,
    color: '#2E2E2E',
    fontWeight:'bold',
    marginTop: 30,
   },
   textCadastroEmail:{
    fontSize:16,
    color: '#2E2E2E',
    fontWeight:'bold',
   },
   link:{
    fontSize:16,
    color: '#2E2E2E',
    fontWeight:'bold',
    marginTop: 10
   }
})
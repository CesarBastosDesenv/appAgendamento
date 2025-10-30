import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
       flex:1,
      // alignItems:'center',
      // justifyContent:'center',
       padding: 10,
       backgroundColor:'#bcbec2',
    },
    View:{
            flexDirection: "row",          // 👈 elementos lado a lado
            justifyContent: "space-between", // 👈 um à esquerda e outro à direita
            alignItems: "center",          // 👈 centraliza verticalmente
            paddingHorizontal: 16,
            paddingVertical: 20,
            backgroundColor: "#bcbec2",
   },
   Text:{
            color: "#2E2E2E",  
            fontSize: 24, 
            fontWeight: "bold"
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
    },
    input:{
        height:'100%',
        width:'90%',
        borderRadius: 40,
        paddingLeft: 5,
   },
   card:{
     flexDirection: "row", // 👈 imagem à esquerda e info à direita
    backgroundColor: "#D3D3D3",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
   },
   image: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    marginLeft:10,
    marginTop:8
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  name: {
    color: "#2E2E2E",
    fontSize: 16,
    fontWeight: "bold",
  },
   address: {
    color: "#2E2E2E",
    fontSize: 13,
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#808080",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
})
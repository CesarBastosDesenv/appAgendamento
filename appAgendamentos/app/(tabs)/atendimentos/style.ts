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
            fontSize: 22, 
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
     card: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  service: {
    fontSize: 14,
    color: "#444",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginTop: 28
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badge: {
    backgroundColor: "#808080",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },
})
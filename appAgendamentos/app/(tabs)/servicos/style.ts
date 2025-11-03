import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{ 
        flex: 1,
        padding: 20,  
        backgroundColor: '#bcbec2',
         
    },
    infoArea:{
        marginLeft: 15
    }, 
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop:120,
    },
    profileImage:{
        width: 70,
        height: 70,
        borderRadius: 25,
        backgroundColor: '#ccc',
    },
    ratting:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#D3D3D3',
        padding: 4,
        borderRadius: 8,
    }, 
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2E2E2E'

    },
    ServicoCard:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     backgroundColor: '#D3D3D3',
     borderRadius: 12,
     padding: 15,
     marginBottom: 10
    },
    ServicoNome:{
        fontSize: 16,
        fontWeight: 500,
        color: '#000'
    },
    ServicoPreco:{
        fontSize: 14,
        color: '#777'
    },
    BotaoAgendar:{
        backgroundColor: '#808080',
        padding: 8, 
        borderRadius: 8
    },
    BotaoTexto:{
        color: '#fff',
        fontWeight: 'bold',
    },
    InfoCard: {
        backgroundColor: '#D3D3D3',
        borderRadius: 12,
        padding: 15,
        marginTop: 10
    },
    InfoText:{
        color:'#2E2E2E',
        fontSize: 14
    }
});  



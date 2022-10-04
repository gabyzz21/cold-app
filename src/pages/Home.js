import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function Home(){

    let[valor1, setValor1] = useState();
    
    function CalcularTotal(){
        let resultado = parseFloat(5.20*valor1)

        alert("O resultado total: " +resultado);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Projeto Cold</Text>
        
            <TextInput onChangeText={setValor1} style={styles.campo} placeholder="Digite a temperatura em Celcius"/>

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>

                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4B0082',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 25,
        color:'#FFF',
        fontWeight: 'bold',
        marginBottom:40
},
campo:{
    backgroundColor:'#fff',
    fontSize:18, 
    padding: 8,
    marginTop:10,
    marginBottom:10,
    width:300,
    border:10
},
botao:{
     backgroundColor: '#BA55D3',
    alignItems: "center",
    padding: 15,
    marginTop: 20,
    width: 250
},

botaoTexto:{
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",

}
});

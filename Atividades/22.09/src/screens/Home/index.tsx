import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

export default function Home(){

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')

    function handleUserAdd(){
        console.log(
            "Nome competo: " + name + "\nE-mail: " + email
        )

        Alert.alert(
            "Nome competo: " + name + "\nE-mail: " + email
        ) 
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Prencha os dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome Completo"

                value={ name }
                onChangeText ={ setName }
            />
           <TextInput
                style={styles.input}
                placeholder="E-mail"

                value={ email }
                onChangeText ={ setEmail }

            />     

            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity> 
        </View>
    )
}
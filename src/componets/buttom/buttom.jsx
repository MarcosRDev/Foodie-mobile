import { styles } from "./buttom.style";

import { Text, TouchableOpacity } from "react-native"

function Button(){
    return <TouchableOpacity style={styles.btn}>
        <Text style={styles.texto}> Acessar </Text>
    </TouchableOpacity>
        
}

export default Button ;
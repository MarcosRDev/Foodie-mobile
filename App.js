import {Image,Text } from 'react-native';
import {styles} from "./style";
import icons from "./src/constants/icons.js";
import Button from './src/componets/buttom/buttom.jsx';

export default function App() {
  return (<>
      <Text style={styles.textos}>Hello!</Text>
      
      <Button title="salvar Dados" />
      </>
  );
}


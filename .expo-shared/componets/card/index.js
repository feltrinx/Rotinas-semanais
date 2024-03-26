import { Text, View, Image } from 'react-native';

import estilo from './style';

export default function Card(props) {

return(

<>

<View style={estilo.cardTarefa}>

<Image style={estilo.imagemCard} source={{ uri: props.Image }} />

<View style={{ marginLeft: 15,width:150 }}>

<Text style={estilo.tituloCard}>{props.titulo}</Text>

<Text style={estilo.textoCard}>{props.texto}</Text>

</View>

<Text style={{ fontSize: 25 }}>{props.porcentagem}</Text>

</View>

</>

);

}
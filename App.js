import React from 'react';

import { Text, StyleSheet, View, Image } from 'react-native';

import Header from './.expo-shared/componets/header/index.js';

import Card from './.expo-shared/componets/card/index.js';

export default function App() {

return (

<View style={estilo.container}>

<Header />

<Card

porcentagem = "25%"

texto = "dormir"

titulo = "descansar"

Image = "https://cdn.pixabay.com/photo/2017/07/07/04/58/images-2480422_1280.jpg"

/>

<Card

porcentagem = "45%"

texto = "comer"

titulo = "almoço"

Image = "https://cdn.pixabay.com/photo/2017/06/27/18/24/images-2448356_1280.jpg"

/>

<Card

porcentagem = "70%"

texto = "academia"

titulo = "treinar"

Image = "https://cdn.pixabay.com/photo/2017/06/29/06/06/dog-2453179_640.jpg"

/>

<Card

porcentagem = "5%"

texto = "escola"

titulo = "meus amigos"

Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS7u4Mmz7Py6-eYLZjO22hQG752OtvWz8xciWBvFyOYoN511g7lzc3nZu-5iElmemiho&usqp=CAU"

/>

<Card

porcentagem = "23%"

texto = "paseeio"

titulo = "me divertir"

Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYPzgOU_Qk9LCDwtdRIiL4lLD3541SzpGR5VrgCrtlPv-nT5HpqfP28KeNovls4mUcwQ&usqp=CAU"/>

</View>

);

}

const estilo = StyleSheet.create({

container: {

flex: 1,

alignItems: 'center',

backgroundColor: '#CAF0F8',

borderColor: '#90E0EF',

paddingHorizontal: 20,

},

titulo: {

fontSize: 35,

fontWeight: 'bold',

marginTop: 20,

},

subtitulo: {

fontSize: 20,

fontWeight: 'bold',

marginTop: 15,

},

cardTarefa: {

marginTop: 20,

backgroundColor: '#A8DADC',

width: '100%',

height: 125,

alignItems:'center',

justifyContent:'space-between',

borderRadius: 10,

borderColor: 'white',

borderWidth: 2,

flexDirection: 'row',

padding: 15,

shadowColor: '#000',

shadowOffset: { width: 0, height: 2 },

shadowOpacity: 0.3,

shadowRadius: 2,

elevation: 5,

},

tituloCard: {

fontSize: 15,

fontWeight: 'bold',

color: '#1d3557',

},textoCard: {

  fontSize: 10,
  
  marginTop: 5,
  
  },
  
  imagemCard: {
  
  width: 60,
  
  height: 60,
  
  marginRight: 15,
  
  },
  
  });
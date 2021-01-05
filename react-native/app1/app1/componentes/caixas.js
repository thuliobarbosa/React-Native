import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Componestes Personalizados
//import Estilos from '../estilos/estilos.js';

export default function(props) {

  return (
    <View style={{width: '100%', height: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      {
        props.exibir ?
          <View style={{flex: 1}}>
            <View style={{flexGrow: 1, backgroundColor: '#00f'}}></View>
            <View style={{flexGrow: 1, backgroundColor: '#000'}}></View>
            <View style={{flexGrow: 1, backgroundColor: '#005'}}></View>
          </View> 
        :
          <View style={{flex: 1}}> 
            <View style={{flexGrow: 1, backgroundColor: '#f00'}}></View>
            <View style={{flexGrow: 1, backgroundColor: '#548'}}></View>
            <View style={{flexGrow: 1, backgroundColor: '#500'}}></View>
          </View>
      }
    </View>
  );
}



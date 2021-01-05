import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

//Componentes personalizados
import Caixas from './componentes/caixas';
import Estilos from './estilos/estilos';

const dobro = (n) => {
  return n * 2;
};

const soma = (n1, n2) => {
  return n1 + n2;
};

export default function App1(){

  let vexibir = true;

  return (
    <View style={Estilos.container}>
      <Text>Dobro : {dobro(2)} | Soma : {soma(5, 10)} </Text>
      <Image 
        source={require('./assets/logo.png')}
        style={estilo.logo}
      />
      <Text style={Estilos.textTitulo}>Thulio Barbosa</Text>
      <Text style={Estilos.textTitulo}>Aprendendo React-Native</Text>
      {vexibir ? <Text>Curso de react-native</Text> : <Text>- - -</Text>}
      {vexibir && <Text>Curso de react-native</Text>}
    </View>
  );
};

const estilo = StyleSheet.create({
  logo: {
    width: 250,
    resizeMode: 'contain'
  }
});

/* 
export default function App1() {
  return (
    <View>
      <View>
        <Text>CFB Cursos</Text>
        <Text>Cursos de React-native</Text>
      </View>
      <View>
        <Text>Aula 3</Text>
        <Text>www.cfbcursos.com.br</Text>
      </View>
    </View>
  );
};
*/


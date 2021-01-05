import React from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

// Componestes Personalizados
import Estilos from '../estilos/estilos.js';

export default function(props) {

  return (
    <Text style={Estilos.textoCurso}>CFB Cursos - Curso de {props.curso}: Nota = {props.nota}</Text>
  );
}



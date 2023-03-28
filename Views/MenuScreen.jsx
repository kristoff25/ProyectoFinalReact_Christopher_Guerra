import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Link} from 'react-router-native';
import SCREENS from './Routes';

function MenuScreen() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      padding: 24,
      height: 500,
    },

    texto: {
      backgroundColor: '#007aff',
      fontWeight: 'bold',
      fontSize: 50,
      marginTop: 10,
      textAlign: 'center',
      color: 'white',
    },

    texto1: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10,
    },

    button: {
      backgroundColor: '#007aff',
      padding: 10,
      borderRadius: 5,
    },

    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
    },
  });

  return (
    <SafeAreaView>
      <Text style={styles.texto}>Home</Text>
      <Text style={styles.texto1}>Proyecto Calculadora</Text>
      <Text style={styles.texto1}>Christopher Guerra Cisneros</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Link to={SCREENS.SCREEN1}>
            <Text style={styles.buttonText}>CALCULADORA</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default MenuScreen;

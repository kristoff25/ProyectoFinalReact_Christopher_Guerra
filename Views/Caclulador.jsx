import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Link} from 'react-router-native';
import SCREENS from './Routes';

function Calculador() {
  const [result, setResult] = useState('');

  const handleButtonPress = buttonValue => {
    if (buttonValue === '=') {
      setResult(eval(result).toString());
    } else if (buttonValue === 'C') {
      setResult('');
    } else {
      setResult(result + buttonValue);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultText: {
      fontSize: 80,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#18E4B6',
      borderRadius: 5,
      marginHorizontal: 5,
      height: 75,
    },
    buttonText: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    button2: {
      backgroundColor: '#007aff',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText2: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.container} />
      <Text style={styles.resultText}>{result}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Link to={SCREENS.MENU}>
          <Text style={styles.buttonText2}>GO BACK</Text>
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Calculador;

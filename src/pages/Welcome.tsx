import React from 'react'

// REACT NATIVE COMPONENTS
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

// IMAGES
import wateringImg from '../assets/watering.png'

// COLORS
import colors from '../styles/colors'

export function Welcome() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>
      <Image style={styles.image} source={wateringImg} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
          Avançar
      </Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    height: Dimensions.get('window').width * .7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  }
})
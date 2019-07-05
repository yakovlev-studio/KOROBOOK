import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableHighlight 
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from 'korobook/App.style'



const Button = ({ pressed=f=>f, customStyles={}, title="" }) => {

  return ( 
    <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, customStyles.customButtonSize]}
          onPress={pressed}
        >
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E65346', '#A354F2']} style={[styles.linearGradient, customStyles.customButtonSize]}>  
            <Text style={[styles.textButton, customStyles.sizeOfTitleOfShuffleButton]}>
                  {title}
            </Text>
          </LinearGradient>
        </TouchableHighlight> 
    </View>
  )
}

 
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  button: {
    height: 50,
    width: 250

  },
  textButton: {
    color: colors.white,
    fontWeight: '600'
  }
})

export default Button

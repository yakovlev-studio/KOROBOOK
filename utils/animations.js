import { Animated } from 'react-native'


export const fadeIn = (initialValue= new Animated.Value(0)) =>  {               
    Animated.timing(
        initialValue,           
        {
        toValue: 1,                   
        duration: 200,              
        }
    ).start();                        
}
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens(); 

Navigation.startSingleScreenApp({
  screen: {
    screen: "Korobook.LaunchScreen"
  }, 
   passProps: {},
   animationType: 'slide-down'
});
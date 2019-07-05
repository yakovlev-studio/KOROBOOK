import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from 'korobook/store/configureStore'

const store = configureStore()


// Register Screens
import LaunchScreen from './LaunchScreen/LaunchScreen';
import MainMenuScreen from './MainMenuScreen/MainMenuScreen';
import FotoBookScreen from './FotoBookScreen/FotoBookScreen';
import FotoCardScreen from './FotoCardScreen/FotoCardScreen';


// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent("Korobook.LaunchScreen", () => LaunchScreen, store, Provider)
    Navigation.registerComponent("Korobook.MainMenuScreen", () => MainMenuScreen, store, Provider)
    Navigation.registerComponent("Korobook.FotoBookScreen", () => FotoBookScreen, store, Provider)
    Navigation.registerComponent("Korobook.FotoCardScreen", () => FotoCardScreen, store, Provider)
}


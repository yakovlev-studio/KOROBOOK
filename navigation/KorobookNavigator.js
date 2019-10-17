import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import CategoriesScreen from "korobook/screens/CategoriesScreen/CategoriesScreen.component";
import FotoBookScreen from "korobook/screens/FotoBookScreen/FotoBookScreen.component";
import FotoCardScreen from "korobook/screens/FotoCardScreen/FotoCardScreen.component";
import CanvasScreen from "korobook/screens/CanvasScreen/CanvasScreen.component";
import LaunchScreen from "korobook/screens/LaunchScreen/LaunchScreen.component";
import ImageBrowserScreen from "korobook/screens/ImageBrowserScreen/ImageBrowserScreen.component";

import colors from "korobook/constants/colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : ""
  },
  headerTitleStyle: {
    textAlign: "left",
    fontSize: 20
  },
  headerTintColor: colors.primary
};

const KorobookNavigator = createStackNavigator(
  {
    Launch: {
      screen: LaunchScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    FotoBook: {
      screen: FotoBookScreen
    },
    FotoCard: {
      screen: FotoCardScreen
    },
    Canvas: {
      screen: CanvasScreen
    },
    ImageBrowser: {
      screen: ImageBrowserScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

export default createAppContainer(KorobookNavigator);

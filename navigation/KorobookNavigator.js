import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import CategoriesScreen from "korobook/screens/CategoriesScreen/CategoriesScreen";
import FotoBookScreen from "korobook/screens/FotoBookScreen/FotoBookScreen";
import FotoCardScreen from "korobook/screens/FotoCardScreen/FotoCardScreen";
import CanvasScreen from "korobook/screens/CanvasScreen/CanvasScreen";
import LaunchScreen from "korobook/screens/LaunchScreen/LaunchScreen";

import colors from "korobook/constants/colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.Androidprimary : ""
  },
  headerTitleStyle: {
    textAlign: "left",
    fontSize: 20
  },
  headerTintColor: Platform.OS === "android" ? colors.Androidprimary : colors.IOSPrimary
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
    }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

export default createAppContainer(KorobookNavigator);

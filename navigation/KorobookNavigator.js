import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoriesScreen from "korobook/screens/CategoriesScreen/CategoriesScreen";
import FotoBookScreen from "korobook/screens/FotoBookScreen/FotoBookScreen";
import LaunchScreen from "korobook/screens/LaunchScreen/LaunchScreen";

const KorobookNavigator = createStackNavigator({
  Launch: {
    screen: LaunchScreen
  },
  Categories: {
    screen: CategoriesScreen
  },
  FotoBook: {
    screen: FotoBookScreen
  }
});

export default createAppContainer(KorobookNavigator);

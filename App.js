import React from "react";
import KorobookNavigator from "./navigation/KorobookNavigator";
import { Provider } from "react-redux";
import store from "korobook/store/store";
import { useScreens } from "react-native-screens";

useScreens();

const App = () => {
  return (
    <Provider store={store}>
      <KorobookNavigator />
    </Provider>
  );
};

export default App;

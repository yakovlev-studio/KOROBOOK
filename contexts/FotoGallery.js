import React from "react";

export default React.createContext({
  scrollEnabled: true,
  panHandlers: {},
  handlePressIn: () => {},
  handleLongPress: () => {},
  selectedFotoUri: ""
});

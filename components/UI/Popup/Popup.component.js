import React from "react";
import { View, Modal } from "react-native";
import styles from "./Popup.style";

const Popup = ({ children, ...otherProps }) => {
  return (
    <View styles={styles.modalWrapper}>
      <Modal {...otherProps}>
        <View style={styles.contentWrapper}>{children}</View>
      </Modal>
    </View>
  );
};

export default Popup;

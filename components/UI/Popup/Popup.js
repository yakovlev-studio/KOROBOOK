import React from "react";
import { View, Text, Modal, Alert, SafeAreaView } from "react-native";
import styles from "./Popup.style";

const Popup = ({ children, ...otherProps }) => {
  return (
    <View styles={styles.modalWrapper}>
      <Modal {...otherProps} onRequestClose={() => alert("sdfsd")}>
        <View style={styles.contentWrapper}>{children}</View>
      </Modal>
    </View>
  );
};

export default Popup;

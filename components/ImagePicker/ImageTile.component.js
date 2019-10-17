import React from "react";
import { Dimensions, Image, TouchableHighlight } from "react-native";
const { width } = Dimensions.get("window");

class ImageTile extends React.PureComponent {
  render() {
    let { item, index, selected, selectImage } = this.props;
    if (!item) return null;
    return (
      <TouchableHighlight
        style={{ opacity: selected ? 0.2 : 1 }}
        underlayColor="transparent"
        onPress={() => selectImage(index)}
      >
        <Image style={{ width: width / 4, height: width / 4 }} source={{ uri: item }} />
      </TouchableHighlight>
    );
  }
}
export default ImageTile;

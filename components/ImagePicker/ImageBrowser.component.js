import React from "react";
import { StyleSheet, Text, View, CameraRoll, FlatList, Dimensions } from "react-native";
import ImageTile from "./ImageTile.component";
const { width } = Dimensions.get("window");
import colors from "korobook/constants/colors";

const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.primary, fontSize: 24 }}>Загрузка...</Text>
    </View>
  );
};

export default class ImageBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getPhotos();
  }

  selectImage = index => {
    let newSelected = { ...this.props.photosSelection.selected };
    if (newSelected[index]) {
      delete newSelected[index];
    } else {
      newSelected[index] = true;
    }
    if (Object.keys(newSelected).length > this.props.max) return;
    if (!newSelected) newSelected = {};
    this.props.setPhotosSelection(prevPhotosSelection => ({
      ...prevPhotosSelection,
      selected: newSelected
    }));
  };

  getPhotos = () => {
    let params = {
      first: 50,
      mimeTypes: ["image/jpeg"],
      assetType: "Photos"
    };
    if (this.props.photosSelection.after) params.after = this.props.photosSelection.after;
    if (!this.props.photosSelection.has_next_page) return;
    CameraRoll.getPhotos(params).then(this.processPhotos);
  };

  processPhotos = r => {
    if (this.props.photosSelection.after === r.page_info.end_cursor) return;
    let uris = r.edges
      .map(i => i.node)
      .map(i => i.image)
      .map(i => i.uri);

    this.props.setPhotosSelection(prevPhotosSelection => {
      return {
        ...prevPhotosSelection,
        photos: [...prevPhotosSelection.photos, ...uris],
        after: r.page_info.end_cursor,
        has_next_page: r.page_info.has_next_page
      };
    });
  };

  getItemLayout = (data, index) => {
    let length = width / 4;
    return { length, offset: length * index, index };
  };

  renderHeader = () => {
    let selectedCount = Object.keys(this.props.photosSelection.selected).length;
    let headerText = selectedCount + " Выбрано";
    if (selectedCount === this.props.max) headerText = headerText + " (Максимум)";
    return (
      <View style={styles.header}>
        <Text>{headerText}</Text>
      </View>
    );
  };
  renderImageTile = ({ item, index }) => {
    let selected = this.props.photosSelection.selected[index] ? true : false;
    return (
      <ImageTile item={item} index={index} selected={selected} selectImage={this.selectImage} />
    );
  };

  renderImages() {
    return (
      <FlatList
        data={this.props.photosSelection.photos}
        numColumns={4}
        renderItem={this.renderImageTile}
        keyExtractor={(_, index) => index}
        onEndReached={() => {
          this.getPhotos();
        }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Loading />}
        initialNumToRender={24}
        getItemLayout={this.getItemLayout}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderImages()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 40,
    width: width,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
    // marginTop: 10
  }
});

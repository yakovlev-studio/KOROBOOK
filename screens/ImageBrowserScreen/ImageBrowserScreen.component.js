import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import ImageBrowser from "korobook/components/ImagePicker/ImageBrowser.component";
import * as FileSystem from "expo-file-system";
import colors from "korobook/constants/colors";

// Redux
import { useDispatch } from "react-redux";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";

const ImageBrowserScreen = ({ navigation }) => {
  const [photosSelection, setPhotosSelection] = useState({
    photos: [],
    selected: {},
    after: null,
    has_next_page: true
  });

  const dispatch = useDispatch();

  const imageBrowserCallback = useCallback(callback => {
    callback
      .then(images => {
        dispatch(actions.savePhotos(images));
        navigation.goBack();
      })
      .catch(e => console.log(e));
  }, []);

  const prepareCallback = useCallback(() => {
    let selectedPhotos = photosSelection.photos.filter((item, index) => {
      return photosSelection.selected[index];
    });
    let files = selectedPhotos.map(i => FileSystem.getInfoAsync(i, { md5: true }));
    let callbackResult = Promise.all(files).then(imageData => {
      return imageData.map((data, i) => {
        return { file: selectedPhotos[i], ...data };
      });
    });
    return imageBrowserCallback(callbackResult);
  }, [photosSelection, imageBrowserCallback]);

  useEffect(() => {
    navigation.setParams({ prepareCb: prepareCallback });
  }, [prepareCallback]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <ImageBrowser
          max={10}
          callback={imageBrowserCallback}
          photosSelection={photosSelection}
          setPhotosSelection={setPhotosSelection}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  screen: {
    flex: 1
  }
});

ImageBrowserScreen.navigationOptions = ({ navigation }) => ({
  title: "Галерея",
  headerRightContainerStyle: {
    paddingRight: 16
  },
  headerRight: (
    <TouchableOpacity onPress={navigation.getParam("prepareCb")}>
      <Text style={{ fontSize: 16, color: colors.primary }}>Готово</Text>
    </TouchableOpacity>
  )
});

export default ImageBrowserScreen;

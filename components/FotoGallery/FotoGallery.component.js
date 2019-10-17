import React from "react";
import { View, FlatList, Image } from "react-native";
import FotoGalleryItem from "korobook/components/FotoGallery/FotoGalleryItem/FotoGalleryItem.component";
import styles from "./FotoGallery.style";
import colors from "korobook/constants/colors";
import Buttons from "../FotoGallery/FotoGalleryButtons/FotoGalleryButtons.component";
import FotoGalleryContext from "korobook/contexts/FotoGallery";
// Redux
import { useSelector } from "react-redux";

// Lib
import { getDataForPhotoGalleryFlatList } from "korobook/utils/lib";

const FotoGallery = props => {
  const photos = useSelector(({ shuffleBook }) => shuffleBook.photos);
  const data = getDataForPhotoGalleryFlatList(photos);

  const renderFotoGalleryItem = ({ item, index }) => {
    return <FotoGalleryItem item={item} key={item.id} />;
  };

  return (
    <View style={styles.fotoGalleryContainer}>
      <FotoGalleryContext.Consumer>
        {({ scrollEnabled, panHandlers }) => {
          return (
            <React.Fragment>
              <FlatList
                contentContainerStyle={styles.fotoGallery}
                ItemSeparatorComponent={FlatListItemSeparator}
                horizontal
                keyExtractor={item => item.id}
                data={data}
                renderItem={renderFotoGalleryItem}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={scrollEnabled}
                {...panHandlers}
              />
              <Buttons />
            </React.Fragment>
          );
        }}
      </FotoGalleryContext.Consumer>
    </View>
  );
};

const FlatListItemSeparator = () => <View style={styles.flatListItemSeparator} />;

export default FotoGallery;

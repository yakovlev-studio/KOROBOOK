import React, { Component } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry/SliderEntry.style';
import SliderEntry from './SliderEntry/SliderEntry';
import { colors } from 'korobook/App.style';
import styles from './Slider.style'
import { SLIDER_ENTRIES } from 'korobook/static/sliderEntries';

const SLIDER_FIRST_ITEM = 1;

export default class Slider extends Component {
    state = {
        sliderActiveSlide: SLIDER_FIRST_ITEM
    }
  
    _renderItem ({item}) {
        return <SliderEntry data={item} />;
    }


    render () {
        const { sliderActiveSlide } = this.state;
        return (
            <View style={styles.carouselContainer}>
                <Carousel
                ref={c => this._slider1Ref = c}
                data={SLIDER_ENTRIES}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={SLIDER_FIRST_ITEM}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                onSnapToItem={(index) => this.setState({ sliderActiveSlide: index }) }
                />
                <Pagination
                dotsLength={SLIDER_ENTRIES.length}
                activeDotIndex={sliderActiveSlide}
                containerStyle={styles.paginationContainer}
                dotColor={'#A05BE5'}
                dotStyle={styles.paginationDot}
                inactiveDotColor={colors.black}
                inactiveDotOpacity={0.2}
                inactiveDotScale={0.8}
                carouselRef={this._slider1Ref}
                tappableDots={!!this._slider1Ref}
                />
            </View>
        )
    }
}
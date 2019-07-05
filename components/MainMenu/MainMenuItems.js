// Loading Components...
import React, { Component } from 'react';
import { View, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Product from './MainMenuItem/MainMenuItem'

// Loading Styles...
import styles from './MainMenuItems.style';
import { slideHeight } from './MainMenuItem/MenuMenuItem.style';

// Loading static data
import { PRODUCTS } from 'korobook/static/products';


export default class Products extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeProduct: 0,
        };

        this._renderProduct = this._renderProduct.bind(this)
        this._productsSlider = this._productsSlider.bind(this)
    }

    _renderProduct ({item, index}) {
        return (
            <Product
              data={item}
              activeProductIndex={this.state.activeProduct}
              onProductClicked={this.props.onProductClicked}
            />
        );
    }

    _productsSlider () {
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={PRODUCTS}
                  renderItem={this._renderProduct}
                  sliderHeight={slideHeight * 2}  
                  itemHeight={slideHeight}
                  hasParallaxImages={true}
                  firstItem={0}
                  inactiveSlideScale={0.85}
                  inactiveSlideOpacity={0.9}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  vertical={true}
                  onSnapToItem={(index) => this.setState({ activeProduct: index }) }
                />
            </View>
        )}

    render () {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
          
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={100}
                    >
                        { this._productsSlider() }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}



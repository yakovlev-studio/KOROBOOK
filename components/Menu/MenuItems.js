import React, { Component } from 'react'
import { 
    View, 
    ScrollView, 
    SafeAreaView 
} from 'react-native'

import MenuSlider from 'react-native-snap-carousel'
import MenuMenuItem from './MenuItem/MenuItem'

import { PRODUCTS } from 'korobook/static/products'

import styles from './MenuItems.style'
import { slideHeight } from './MenuItem/MenuItem.style'


export default class Products extends Component {
    
    state = {
        activeProduct: 0
    }

    _renderProduct = ({ item }) => (
        <MenuMenuItem
            data={item}
            activeProductIndex={this.state.activeProduct}
            onProductClicked={this.props.onProductClicked}
        />
    )
    

    _productsSlider = () => (
        <View style={styles.menuContainer}>
            <MenuSlider
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
                loop={true}
                loopClonesPerSide={2}
                vertical={true}
                onSnapToItem={(index) => this.setState({ activeProduct: index }) }
            />
        </View>
    )

    render () {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={50}
                    >
                        { this._productsSlider() }
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}



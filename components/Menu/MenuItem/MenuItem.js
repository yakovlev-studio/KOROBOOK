import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { PRODUCTS } from 'korobook/static/products';

import styles from './MenuItem.style';


let product = null

export default class MenuItem extends Component {

    render(){
        const { 
            data: { title, subtitle, illustration }, 
            activeProductIndex, 
            onProductClicked
        } = this.props
        
        if(PRODUCTS[activeProductIndex].title === title) {
            product = (
                <View style={styles.productContainer}>
                    <Image
                        source={{ uri: illustration }}
                        style={styles.image}
                    />
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.title}>
                            { title }
                        </Text>
                        <Text style={styles.subtitle}>
                            { subtitle }
                        </Text> 
                    </View>
  
                </View>
            )
        } else {
            product = (
                <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#E65346', '#A354F2']} 
                    style={styles.productContainer}
                >
                    <Text style={styles.title}>
                        { title }
                    </Text>
                    <Text style={styles.subtitle}>
                        { subtitle }
                    </Text> 
                </LinearGradient>
            )
        }

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => onProductClicked(title)}
                >
 
                { product }
            </TouchableOpacity>
        );

    }

}

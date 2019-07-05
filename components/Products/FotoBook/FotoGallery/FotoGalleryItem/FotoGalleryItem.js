import React from 'react';
import {  
    StyleSheet, 
    Animated,
    TouchableWithoutFeedback,
    Easing,
    View
} from 'react-native'
import { connect } from 'react-redux'


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);

class ImageGalleryItem extends React.Component {

    state = {
        longPressed: false,
        doFadeOut: false,
    }

    fade = new Animated.Value(1)

    _transition = () => {
        this.fade.setValue(1)
        Animated.parallel([
            Animated.spring(
                this.fade,           
                {
                    toValue: 0,                   
                    friction: 10,
                    easing: Easing.ease              
                }
            ),
            this.props.animateFloatingFoto()
        ]).start()
    }

    _handleLongPress = (event, image) => {
        this.props.handleLongPress(event, image)
        this._transition()
    }


    render() {
        const { item, handlePress }  = this.props

        return (
            <AnimatedTouchable
                onLongPress={(event) => {
                    this.setState({ longPressed: true })
                    this._handleLongPress(event, item)
                }}
                onPressIn={(event) => handlePress(event, item)}
            >
                <View style={styles.itemWrapper}>
                    <Animated.Image style={[
                            { width: 80, height: 80, opacity: this.fade }
                        ]} source={{ uri: item.uri }} /> 
                </View>
                
            </AnimatedTouchable>
            
        )
    }
   
}

const styles = StyleSheet.create({
    itemWrapper: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#ccc",
        borderRightWidth: 0
    },
    image: {
        resizeMode: "cover",
        ...StyleSheet.absoluteFillObject,
    }
})

const mapStateToProps = (state) => ({
    selectedFoto: state.fotoBook.selectedFoto
})

export default connect(mapStateToProps)(ImageGalleryItem)

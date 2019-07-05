import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);

export default class ImageGalleryItem extends React.Component {
    state = {
        longPressed: false
    }

    render() {
        const { image, handleLongPress, handlePress, opacityValue=1 }  = this.props

        return (
            <AnimatedTouchable
                onLongPress={(event) => {
                    this.setState({ longPressed: true })
                    handleLongPress(event, image)
                }}
                onPressIn={(event) => handlePress(event, image)}
            >
                <Animated.Image style={{ width: 80, height: 80, opacity: this.state.longPressed ? opacityValue : 1}} source={{ uri: image.uri }} /> 
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
        backgroundColor: '#777',
    },
    image: {
        resizeMode: "cover",
        ...StyleSheet.absoluteFillObject,
    }
})

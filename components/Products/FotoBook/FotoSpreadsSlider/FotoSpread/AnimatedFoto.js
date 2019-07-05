import React, { Component } from 'react'
import { 
    Animated,
    PanResponder,
    StyleSheet,
    Easing,
    TouchableWithoutFeedback 
} from 'react-native'
import { connect } from 'react-redux'
import * as actionCreators from 'korobook/store/Fotobook/actions'

const DEFAULT_SCALE_VALUE = 1;
const SPRING_SCALE_VALUE = 1.05;

class AnimatedFoto extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
            longTouchOnImageOccured: false,
        }

        this._positionOfImage = new Animated.ValueXY()
        this._animatedValue = new Animated.Value(DEFAULT_SCALE_VALUE)

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                // If amount of fotoFrames > 1 => do not set responder
                const amountOfFotoFrames = this.props.fotoSpreads[this.props.activeFotoSpread].fotoSpreadTemplate.length
                if(amountOfFotoFrames > 1 ) {
                    return true
                }
                return false
            },
            onPanResponderGrant: (evt, gestureState) => {
                this.props.toggleScrollOnFotospreadSlider()
                this.props.detectResponder(this.props.indexOfFoto)
                this.onLongPressTimeout = setTimeout(() => {
                    this._handleLongTouchOnImage()
                }, 300);
   
            },
            onPanResponderMove: (evt, gestureState) => {
                this.state.longTouchOnImageOccured ? (
                    this._positionOfImage.setValue({ x: gestureState.dx, y: gestureState.dy })
                )  : null
            },
            onPanResponderTerminationRequest: () => true,

            onPanResponderRelease: (evt, { dx, dy }) => {
                
                clearTimeout(this.onLongPressTimeout);
                this.props.toggleScrollOnFotospreadSlider()
                this._handleAnimationOnImage(DEFAULT_SCALE_VALUE)

                this.state.longTouchOnImageOccured ? (
                    this.props.handleUpdateFotospreadLayout({ xOffset: dx, yOffset: dy }) 
                ) : null
                
                this._positionOfImage.setValue({ x: 0, y: 0})
            
            },
            onPanResponderTerminate: () => {
               clearTimeout(this.onLongPressTimeout);
            },
            onShouldBlockNativeResponder: () => {
              return true;
            },
          });
    }






    _handleLongTouchOnImage = () => {

        this._handleAnimationOnImage(SPRING_SCALE_VALUE)
        this.setState(() => ({ 
            longTouchOnImageOccured: true
        }))
    }


    _handleAnimationOnImage = (springValue) => {
        Animated.spring(
          this._animatedValue,
          {
            toValue: springValue,
            bounciness: 20,
            easing: Easing.ease
          }
        ).start()
      }





    render() {


        return (
                <Animated.Image
                    source={{ uri: this.props.foto.uri }}
                    style={[
                        styles.image,
                        this._positionOfImage.getLayout(),
                        {
                            transform: [
                                { scale: this._animatedValue },
                            ],
                            opacity: this.fadeOut

                        }
                    ]}
                    {...this._panResponder.panHandlers}   
                />
            
        )
    }
}

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        zIndex: 1
    },
})

const mapStateToProps = (state) => ({
    activeFotoSpread: state.fotoBook.activeFotoSpread,
    activeFotoTemplate: state.fotoBook.activeFotoTemplate,
    fotoSpreads: state.fotoBook.fotoSpreads,
})

const mapDispatchToProps = dispatch => ({
    handleUpdateFotospreadLayout: (offsetCoordinates) => dispatch(actionCreators.updateFotospreadLayout(offsetCoordinates))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedFoto)

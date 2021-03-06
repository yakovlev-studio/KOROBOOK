import React, { Component } from 'react';
import { 
    View,  
    SafeAreaView,
    Animated,
    PanResponder,
    Easing
} from 'react-native';

// Redux
import { connect } from 'react-redux';
import * as actions from 'korobook/store/Fotobook/actions';

// Components
import FotoSpreadsSlider from './FotoSpreadsSlider/FotoSpreadsSlider';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import FotoGalleryButtons from './FotoGallery/FotoGalleryButtons/FotoGalleryButtons';
import FotoGallery from './FotoGallery/FotoGallery';

// Styles
import styles from './FotoBook.style';

// import coords from 'korobook/utils/fotoBook/calculateCoordinatesOfFrames';
// import templates from 'korobook/static/fotoSpreadTemplates';


class FotoBook extends Component {

    componentDidMount(){
        // console.log(coords)
    }
    // componentDidUpdate(){
    //     console.log(this.props.fotoBookState)
    // }
  
    floatingFotoSpringValue = new Animated.Value(1)
    fade = new Animated.Value(1)
    
    x0 = 0;
    y0 = 0;

  
    _getFloatingFoto = () => {
        if (!this.props.nativeEvent) {
            return null;
        }
        return (
            <Animated.Image
                style={[
                    styles.floatingFoto,
                    { 
                        top: this.y0, 
                        left: this.x0,
                        transform: [
                            {
                                scale: this.floatingFotoSpringValue
                            }
                        ]
                    }
                ]}
                ref={floating => {
                    this.floating = floating;
                }}
                source={{ uri: this.props.selectedFoto.uri }}
            />
        );
    }

    _animateFloatingFoto = (animatedValue=this.floatingFotoSpringValue, toValue=1.1) => {
        Animated.spring(
            animatedValue,
            {
                toValue: toValue,
                bounciness: 12,
                easing: Easing.bounce
            }
        ).start()
    }

    _updateNativeStyles = () => {
        this.floating &&
            this.floating.setNativeProps({
            style: { left: this.x0, top: this.y0 }
        });
    }

    
    _handlePress = (event, item) => {
        this.x0 = event.nativeEvent.pageX - 50;
        this.y0 = event.nativeEvent.pageY - 30;
        this.props.handleSelectFotoFromGallery(item)
    }

   
    _handleLongPress = (event) =>  {
        this.props.handleActivatePanresponderOnSelectedFoto(event.nativeEvent)           
    }


   
    _panResponder = PanResponder.create({

        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderMove: (event) => {
            this.x0 = event.nativeEvent.pageX - 50;
            this.y0 = event.nativeEvent.pageY - 30;
            this._updateNativeStyles();
            this.props.handleUpdateFloatingfotoCoordinates({
                leftCoordinateOfFloatingFoto: this.x0,
                topCoordinateOfFloatingFoto: this.y0
            })

        },
       
        onPanResponderRelease: () => {
            this.floatingFotoSpringValue.setValue(0)
            this.props.handleUpdateFotosOfFotospread()
            this.x0 = 0
            this.y0 = 0
        }

    })
   
    render(){
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>

                    <FotoSpreadsSlider />
                    <ShuffleButton />

                    <FotoGallery 
                        fotoPressed={this._handlePress}
                        fotoLongPressed={this._handleLongPress}
                        panHandlers={this._panResponder.panHandlers}
                        opacityValue={this.fade}
                        animateFloatingFoto={this._animateFloatingFoto}
                    />

                    <FotoGalleryButtons />

                </View>

                {this._getFloatingFoto()} 
               
            </SafeAreaView>
        )
    }
}

const mapStateToProps = ({ fotoBook }) => ({
    fotoBookState: fotoBook,
    selectedFoto: fotoBook.selectedFoto,
    displayFloatingFotos: fotoBook.displayFloatingFotos,
    fotoSpreads: fotoBook.fotoSpreads,
    activeFotoSpread: fotoBook.activeFotoSpread,
    nativeEvent: fotoBook.nativeEvent,
})

const mapDispatchToProps = dispatch => ({
    handleUpdateFotosOfFotospread: () => dispatch(actions.updateFotosOfFotospread()),
    handleSelectFotoFromGallery: foto => dispatch(actions.selectFotoFromGallery(foto)),
    handleActivatePanresponderOnSelectedFoto: e => dispatch(actions.activatePanresponderOnSelectedFoto(e)),
    handleUpdateFloatingfotoCoordinates: (coords) => dispatch(actions.updateFloatingfotoCoordinates(coords))
})


export default connect(mapStateToProps, mapDispatchToProps)(FotoBook)
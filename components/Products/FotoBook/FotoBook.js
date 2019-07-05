import React, { Component } from 'react'
import { 
    View,  
    SafeAreaView,
    Animated,
    PanResponder
} from 'react-native'

import { connect } from 'react-redux'
import * as actions from 'korobook/store/Fotobook/actions'

import FotoSpreadsSlider from './FotoSpreadsSlider/FotoSpreadsSlider'
import ShuffleButton from './ShuffleButton/ShuffleButton'
import FotoGalleryButtons from './FotoGallery/FotoGalleryButtons/FotoGalleryButtons'
import FotoGallery from './FotoGallery/FotoGallery'

import styles from './FotoBook.style'


class FotoBook extends Component {

    componentDidUpdate(){
        console.log(this.props.fotoBookState)
    }
  
    state = {
        fadeIn: new Animated.Value(0),
        fadeOut: new Animated.Value(1),
    }
    
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
                    { top: this.y0, left: this.x0,  zIndex: 300 }
                ]}
                ref={floating => {
                    this.floating = floating;
                }}
                source={{ uri: this.props.selectedFoto.uri }}
            />
        );
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
            this.props.handleUpdateFotoSpreadFotos()
            this.x0 = 0
            this.y0 = 0
        }

    })
   
    render(){

        // const fotosAttachedToActiveFotoSpread = this.props.fotoSpreads[this.props.activeFotoSpread].fotos.map(foto => renderDroppedFloatingFoto(foto))

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
{/* 
                    {
                       this.props.displayFloatingFotos && fotosAttachedToActiveFotoSpread
                    } */}
              
                    <FotoSpreadsSlider />
                    <ShuffleButton />

                    <FotoGallery 
                        fotoPressed={this._handlePress}
                        fotoLongPressed={this._handleLongPress}
                        panHandlers={this._panResponder.panHandlers}
                    
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
    handleUpdateFotoSpreadFotos: () => dispatch(actions.updateFotoSpreadFotos()),
    handleSelectFotoFromGallery: foto => dispatch(actions.selectFotoFromGallery(foto)),
    handleActivatePanresponderOnSelectedFoto: e => dispatch(actions.activatePanresponderOnSelectedFoto(e)),
    handleUpdateFloatingfotoCoordinates: (coords) => dispatch(actions.updateFloatingfotoCoordinates(coords))
})


export default connect(mapStateToProps, mapDispatchToProps)(FotoBook)
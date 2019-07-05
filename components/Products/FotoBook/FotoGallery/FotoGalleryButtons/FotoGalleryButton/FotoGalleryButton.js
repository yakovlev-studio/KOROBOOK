import React, { Component } from 'react';
import { 
    TouchableOpacity, 
    View, 
    Image
} from 'react-native';

// Third-party libraries
import { connect } from 'react-redux'
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-crop-picker'

// Styles
import styles from './FotoGalleryButton.style'

// Action Creators
import * as actions from 'korobook/store/Fotobook/actions'


class ImageGalleryButton extends Component {

    state = {
        iconUri: null
    }

    componentDidMount(){
        const { icon: { iconName, size=20, color, style=FA5Style.solid } } = this.props;

       FontAwesome5
        .getImageSource(iconName, size, color, style)
        .then(source => {
            this.setState({ iconUri: source.uri })
        })
    }

    _renderIcon = () => {
        return this.state.iconUri ? <Image source={{uri: this.state.iconUri}} style={styles.icon}/> :
        null
    }

    _handlePickFotos = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
        })
        .then((fotos) => this.props.handleAddPickedDeviceImages(fotos))
        .catch(e => alert(e));
    }

    
    _handleChangeScreen = () => {
        alert("Change screen")
    }


    _handleFotoGalleryButtonPressed = () => {
        switch(this.props.typeOfButton){
            case "fotoPicker": return this._handlePickFotos()
            case "changeScreen": return this._handleChangeScreen()  
        }
    }

    

    render() {
       
        return (
            <TouchableOpacity onPress={this._handleFotoGalleryButtonPressed} style={[styles.galleryButtonWrapper, this.props.style]}>
                <View>
                    {this._renderIcon()}
                </View>
            </TouchableOpacity>
        )
        
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    handleAddPickedDeviceImages: (fotos) => dispatch(actions.addPickedDeviceImages(fotos))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryButton)





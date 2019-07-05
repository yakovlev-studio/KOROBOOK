import React, { Component } from 'react'
import { View } from 'react-native'

// Custom Components
import FotoGalleryButton from './FotoGalleryButton/FotoGalleryButton'

// Styles
import styles from './FotoGalleryButtons.style'

class FotoGalleryButtons extends Component {

    render() {
        return (
            <View style={styles.buttonsWrapper}>
                <FotoGalleryButton
                    typeOfButton="fotoPicker"
                    icon={{iconName: "plus", color: "#A354F2"}} 
                />
                <FotoGalleryButton
                    typeOfButton="changeScreen" 
                    icon={{iconName: "check", color: "#fff"}} 
                    style={{ backgroundColor: '#ccc'}} 
                    pressed={() => this._changeScreenHandler()}
                />
            </View>
        )
    }
}


export default FotoGalleryButtons

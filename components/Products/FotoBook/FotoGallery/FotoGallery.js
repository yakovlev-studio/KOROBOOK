import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FotoGalleryItem from './FotoGalleryItem/FotoGalleryItem'

export class FotoGallery extends Component {

    static propTypes = {
        fotoPressed: PropTypes.func,
        fotoLongPressed: PropTypes.func

    }

    static defaultProps = {
        fotoPressed: f=>f,
        fotoLongPressed: f=>f
    }

    _keyExtractor = item => item.key

    _renderFoto = ({item}) => (
        <FotoGalleryItem 
            image={item}
            handleLongPress={this.props.fotoLongPressed}
            handlePress={this.props.fotoPressed}
        />
    ) 
    render() {
        return (
            <View style={styles.galleryListWrapper}>
                {
                    this.props.panResponderActivated ? (
                        <FlatList
                            contentContainerStyle={{flex: 1}}
                            scrollEnabled={this.props.scrollOnFotoGalleryEnabled}
                            horizontal={true}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderFoto}
                            data={this.props.fotos}
                            extraData={this.props.fotoBookState}
                            {...this.props.panHandlers}
                        /> 
                    ) : (
                        <FlatList
                            contentContainerStyle={{flex: 1}}
                            scrollEnabled={this.props.scrollOnFotoGalleryEnabled}
                            horizontal={true}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderFoto}
                            data={this.props.fotos}
                            extraData={this.props.fotoBookState}
                        /> 
                    )
                }
            </View>     
            
                        
        )
    }
}

const styles = StyleSheet.create({
    galleryListWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 80
    },
})


export const mapStateToProps = ({ fotoBook }) => ({
    fotoBookState: fotoBook,
    fotos: fotoBook.fotos,
    selectedFoto: fotoBook.selectedFoto,
    displayFloatingFotos: fotoBook.displayFloatingFotos,
    fotoSpreads: fotoBook.fotoSpreads,
    activeFotoSpread: fotoBook.activeFotoSpread,
    nativeEvent: fotoBook.nativeEvent,
    panResponderActivated: fotoBook.panResponderActivated,
    scrollOnFotoGalleryEnabled: fotoBook.scrollOnFotoGalleryEnabled

});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FotoGallery)


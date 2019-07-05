import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class FotoFrame extends React.Component {

    render(){
        const { style, children } = this.props

        return (
            <View 
                style={[styles.fotoFrameContainer, style]} 
            >
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fotoFrameContainer: {
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default FotoFrame
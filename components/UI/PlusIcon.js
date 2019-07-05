import React from 'react'
import { StyleSheet, View } from 'react-native'


const cross = ({ style={} }) => {
    return (
        <View style={{}}>
            <View style={[styles.crossUp]} />
            <View style={[styles.crossFlat]} /> 
        </View> 
    )
} 


const styles = StyleSheet.create({
    crossUp: {
        height: 41,
        width: 1,
        backgroundColor: '#ccc'
    },
    crossFlat: {
        height: 1,
        width: 41,
        position: 'absolute',
        left: -20,
        top: 20,
        backgroundColor: '#ccc'
    }
})

export default cross

  

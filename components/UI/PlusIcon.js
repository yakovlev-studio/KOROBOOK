import React from 'react'
import { StyleSheet, View } from 'react-native'

const defineStyles = (style) => {
    const [p1, p2] = style
    const coordinatesOfFlatSide = (p1 - p2) / 2 // LEFT and TOP

    return {
        up: {
            width: p2,
            height: p1,
        },
        flat: {
            width: p1,
            height: p2,
            left: -coordinatesOfFlatSide,
            top: coordinatesOfFlatSide
        }
        
        
    } 
}


export default ({ size=[] }) => {
    const { up, flat } = defineStyles(size)
    return (
        <View>
            <View style={[styles.crossUp, up]} />
            <View style={[styles.crossFlat, flat]} /> 
        </View> 
    )
} 



const styles = StyleSheet.create({
    crossUp: {
        backgroundColor: '#ccc'
    },
    crossFlat: {
        position: 'absolute',
        backgroundColor: '#ccc'
    }
})


  

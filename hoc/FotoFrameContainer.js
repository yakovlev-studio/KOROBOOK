import React from 'react'
import {View} from 'react-native'

export default ({style={}, children}) => (
    <View style={[{ flex: 1 }, style]}>
        {children}
    </View>
)


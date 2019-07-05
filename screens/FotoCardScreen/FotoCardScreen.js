import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

// Importing Components...
import PhotoCard from 'korobook/components/Products/PhotoCard/PhotoCard'

export default  class PhotoBookScreen extends Component {
    constructor(props){
        super(props)

        this.props.navigator.setOnNavigatorEvent(e => {
            if (e.type == 'NavBarButtonPress') { 
                if (e.id == 'cancel') {
                    Alert.alert('NavBar', 'Cancel button pressed');
                }
            }
        })
    }

    componentDidMount() {
        FontAwesome5
            .getImageSource("user-circle", 30, "#A354F2",  FA5Style.light)
            .then(source => {
                this.props.navigator.setButtons({
                    rightButtons: [
                        {
                            title: 'user-circle',
                            id: 'user-circle',
                            icon: source
                        }
                    ]
                })
            })   
    }

    render(){
        return (
            <View style={{ flex: 1 }}>
                <PhotoCard />
            </View>
        )
    }
}


import React, { Component } from 'react';
import { View, Alert, FlatList } from 'react-native';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

// Components
import Instructions from 'korobook/components/Products/FotoBook/Instructions/Instructions'
import FotoBook from 'korobook/components/Products/FotoBook/FotoBook'


// Import Styles
import styles from './FotoBookScreen.style'



export default class FotoBookScreen extends Component {
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

            // Здесь нужно вызвать метод this.setModalVisible(true) из дочернего компонента
            //  this.fotoBookInstructions.setModalVisible(true)
          
    }


    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) =>  <ImageGalleryItem image={item}/>

    render(){

        return (
            <View style={styles.container}>
                <Instructions ref={ref => this.Instructions=ref} />
                <FotoBook />
             
            </View>
        )
    }
}


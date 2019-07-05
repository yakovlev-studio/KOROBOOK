import React, { Component } from 'react';
import { Alert } from 'react-native';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

// import components
import Products from 'korobook/components/Menu/MenuItems'

// import styles
import styles from './MainMenuScreen.style'

export default class MainMenuScreen extends Component {
    constructor(props){
        super(props)

        this.props.navigator.setOnNavigatorEvent(e => {
            if (e.type == 'NavBarButtonPress') { // this is the event type for button presses
                if (e.id == 'user-circle') {
                    Alert.alert('NavBar', 'User button pressed');
                }
            }
        });

        this.navigateToProductScreen = this.navigateToProductScreen.bind(this)
    }

    navigateToProductScreen(title=""){
        let screen = ''
        switch(title){
            case('Фотокнига'):
                screen = 'Korobook.FotoBookScreen'
                break;
            case('Фотокарточка'):
                screen = 'Korobook.FotoCardScreen'
                break;
            default:
                screan = null

        }
       
        this.props.navigator.push({
            screen,
            title,
            backButtonTitle: 'Назад',
        });
       

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


    render() {
        return (
            <Products onProductClicked={this.navigateToProductScreen}/>       
        )
    }
}

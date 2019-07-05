import React, { Component } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import styles from './LaunchScreen.style';

// Componenets
import Slider from 'korobook/components/Slider/Slider'
import Button from 'korobook/components/Button';

export default class LaunchScreen extends Component {
    constructor(props){
        super(props)

        this.state = {}
        this.navigateToMainMenuScreen = this.navigateToMainMenuScreen.bind(this)

    }

    navigateToMainMenuScreen(){
        this.props.navigator.push({
            screen: 'Korobook.MainMenuScreen',
            title: 'Продукция',
            backButtonTitle: 'Назад'
          });
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 80 }}> 
                        <Image 
                            source={require('../../assets/logo.png')}
                        />  
                    </View>
                
                    <View style={{ marginTop: 30 }}>
                        <Slider />
                    </View>
                    <Button 
                        pressed={() => this.navigateToMainMenuScreen()}
                        title="Создать фотокнигу"
                    />
                </View>
            </SafeAreaView>
        )
    }
}

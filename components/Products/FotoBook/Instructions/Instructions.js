import React, { Component } from 'react'
import { View, Modal, Text } from 'react-native'
import PropTypes from 'prop-types'

// import icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import styles
import styles from './Instructions.style'

// import Components
import Button from 'korobook/components/UI/GradientButton';

// import Instructions
import INSTRUCTIONS from 'korobook/static/photoBookInstructions'


class FotoBookInstructions extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            modalVisible: false
        }

        this.setModalVisible = this.setModalVisible.bind(this)

    }

    static propTypes = {
        modalVisible: PropTypes.bool,
        onModalVisibilityChanged: PropTypes.func
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }



    render(){
        const closeIcon = <FontAwesome5 name={'times-circle'} size={25} color="#DADADA" solid />;
        const alertIcon = <FontAwesome5 name={'exclamation-circle'} size={35} color="#A354F2" solid />;

        const { modalVisible } = this.state
        const { setModalVisible } = this

        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
            
                        <Text onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', top: 10, left: 10 }}>{closeIcon}</Text>
                        <View style={{ alignItems: 'center', marginTop: 10}}>
                            <Text>{alertIcon}</Text>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 24, paddingTop: 20 }}>Создание фотокниги</Text>

                        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                        {
                            INSTRUCTIONS.map((instruction, index) => (
                                <View key={instruction.id} style={{flexDirection: 'row', paddingBottom: 6}}>
                                    <Text style={{ fontSize: 14 }}>{index + 1}. </Text>
                                    <Text style={{ fontSize: 14, paddingLeft: 7 }}>{instruction.title}</Text>
                                </View>
                            ))
                        }
                        </View>
                
                         <Button 
                            pressed={() => setModalVisible(!modalVisible)}
                            title="Понятно"
                            customStyles={{ borderRadius: 14 }}
                        /> 
                      
                    </View>
                </View>
            </Modal>
        )
    }
}


export default FotoBookInstructions







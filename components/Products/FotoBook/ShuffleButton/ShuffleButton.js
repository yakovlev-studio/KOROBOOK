import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'korobook/components/UI/CircularMenu/ActionButton';

// Custom Components
import Button from 'korobook/components/UI/GradientButton'

// Styles
import styles from './ShuffleButton.style'

// Action creators
import * as actionTypes from 'korobook/store/Fotobook/actions/fotoBook'


const ShuffleButton = ({ handleUpdateTemplateOnFotospread=f=>f }) => {
  return (
      <View style={styles.shuffleButtonWrapper}>
        {/* <Button 
            pressed={handleUpdateTemplateOnFotospread}
            customStyles={{customButtonSize: styles.shuffleButton, sizeOfTitleOfShuffleButton: styles.shuffleButtonSize}}
            title="S"
        /> */}
          <ActionButton 
            onPress={handleUpdateTemplateOnFotospread}
            size={80}
            
             
          >
            <ActionButton.Item buttonColor='#9b59b6'  onPress={() => console.log("notes tapped!")}>
              <Icon name="android-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' onPress={() => {}}>
              <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
              <Icon name="android-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
              <Icon name="android-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
              <Icon name="android-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
       </View>
  )
}

ShuffleButton.propTypes = {
  handleUpdateTemplateOnFotospread: PropTypes.func
}


const mapDispatchToProps = dispatch => ({
  handleUpdateTemplateOnFotospread: () => dispatch(actionTypes.updateTemplateOnFotospread())
})

export default connect(null, mapDispatchToProps)(ShuffleButton)

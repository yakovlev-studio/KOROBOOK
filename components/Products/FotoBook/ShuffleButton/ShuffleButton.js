import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Custom Components
import Button from 'korobook/components/Button'

// Styles
import styles from './ShuffleButton.style'

// Action creators
import * as actionTypes from 'korobook/store/Fotobook/actions/fotoBook'


const ShuffleButton = ({ handleUpdateTemplateOnFotospread=f=>f }) => {
  return (
      <View style={styles.shuffleButtonWrapper}>
        <Button 
            pressed={handleUpdateTemplateOnFotospread}
            customStyles={{shuffleButtonSize: styles.shuffleButton, sizeOfTitleOfShuffleButton: styles.shuffleButtonSize}}
            title="S"
        />
       </View>
  )
}

ShuffleButton.propTypes = {
  handleUpdateTemplateOnFotospread: PropTypes.func
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  handleUpdateTemplateOnFotospread: () => dispatch(actionTypes.updateTemplateOnFotospread())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShuffleButton)









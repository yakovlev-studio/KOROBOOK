import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Dash from 'react-native-dash'
import PropTypes from 'prop-types'

import FotoFrame from './FotoFrame/FotoFrame'
import PlusIcon from 'korobook/components/UI/PlusIcon'
import AnimatedFoto from './AnimatedFoto'
import Aux from 'korobook/utils/Aux'


// Styles...
import styles from './FotoSpread.style'

// FotoTemplates
import templates from 'korobook/static/fotoSpreadTemplates'

// Redux
import * as actionCreators from 'korobook/store/Fotobook/actions'
import { connect } from 'react-redux'



export class FotoSpread extends Component {

    static defaultProps = {
        activeFotoSpread: 0,
        activeFotoSpreadIndex: 0,
        activeFotoTemplate: 1
    }

    state = {
        longTouchOnImageOccured: false,
        activeIndex: 0
    }

    _calculateAmountOfFrames = (templateIndex = 1, positionOfFrame='left' ) => {
      return Object.keys(templates[templateIndex][positionOfFrame].fotoFramesContainer.fotoFrames).length
    }

    componentDidMount(){
        // console.log(templates[this.props.activeFotoTemplate])
    }
    // componentDidUpdate(){
    //     console.log(`UPDATE: amountOfFramesOnFirstHalfOfFotoSpread - ${this.state.amountOfFramesOnFirstHalfOfFotoSpread}`)
    //     console.log(`UPDATE: amountOfFramesOnSecondHalfOfFotoSpread - ${this.state.amountOfFramesOnSecondHalfOfFotoSpread}`)
    // }

    get frames () {
        return Object.keys(templates[this.props.activeFotoTemplate])
    }


    _renderFoto = (foto, indexOfFoto) => {
        if(foto){
            return (
                <AnimatedFoto 
                    toggleScrollOnFotospreadSlider={this.props.toggleScrollOnFotospreadSlider}
                    foto={foto}
                    indexOfFoto={indexOfFoto}
                    detectResponder = {this.detectResponder}
                /> 
            )
        }
            
    }


    detectResponder = (indexOfFoto) => {
        this.setState({ activeIndex: indexOfFoto })
    }

    _renderFotoFrame = (positionOfFrame, i) => {

        return (
            <View key={i}  style={templates[this.props.activeFotoTemplate][positionOfFrame]}>
                <View style={templates[this.props.activeFotoTemplate][positionOfFrame].fotoFramesContainer}>
                    {
                        Array.from({ length: this._calculateAmountOfFrames(this.props.activeFotoTemplate, positionOfFrame) }).map((_, fotoFrameIndex) => {
                            return (
                                <FotoFrame 
                                    key={fotoFrameIndex} 
                                    style={[ templates[this.props.activeFotoTemplate][positionOfFrame].fotoFramesContainer.fotoFrames[fotoFrameIndex + 1] ]} 
                                >
                                    <PlusIcon size={templates[this.props.activeFotoTemplate][positionOfFrame].fotoFramesContainer.fotoFrames[fotoFrameIndex + 1].iconSize}/> 
                                </FotoFrame>
                    
                            )
                        })
                    }
                   
                </View>
            </View>
        )
    }

    _renderFotoframes = () => {
        fotoFrames = null
        dash = null
        if(this.frames.length > 1) {
            dash = (
                <View style={styles.dashContainer}>
                    <Dash 
                        style={styles.dash}
                        dashGap={16}
                        dashLength={8}
                        dashThickness={1}
                        dashColor={'#ccc'}
                    />
                </View>
            )
        }
        
        if(this.props.activeFotoSpreadIndex === this.props.activeFotoSpread) {

            fotoFrames = (
                <Aux>
                    { dash }
                    { this.frames.map((side, i) => this._renderFotoFrame(side, i)) }
                </Aux>
 
            )
        }

        return fotoFrames
    }

 
    render() {
      
        return (
            <View style={styles.slideInnerContainer}>
                { this._renderFotoframes() }
            </View>
        )
    }

}

FotoSpread.propTypes = {
    activeFotoSpread: PropTypes.number.isRequired,
    activeFotoTemplate: PropTypes.number.isRequired,
    activeFotoSpreadIndex: PropTypes.number.isRequired,
    fotoSpreads: PropTypes.array,
}

const mapStateToProps = state => ({
    activeFotoSpread: state.fotoBook.activeFotoSpread,
    activeFotoTemplate: state.fotoBook.activeFotoTemplate,
    fotoSpreads: state.fotoBook.fotoSpreads,
})

const mapDispatchToProps = dispatch => ({
    handleUpdateFotospreadLayout: (offsetCoordinates) => dispatch(actionCreators.updateFotospreadLayout(offsetCoordinates))
})


export default connect(mapStateToProps, mapDispatchToProps)(FotoSpread)

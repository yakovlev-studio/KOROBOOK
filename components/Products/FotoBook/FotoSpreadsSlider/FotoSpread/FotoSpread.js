import React, { Component } from 'react'
import { 
    View, 
    Image,
    Animated,
    PanResponder,
    Easing 
} from 'react-native'
import Dash from 'react-native-dash'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Custom Components
import FotoFrame from './FotoFrame/FotoFrame'
import FotoFrameContainer from 'korobook/hoc/FotoFrameContainer'
import PlusIcon from 'korobook/components/UI/PlusIcon'
import TestAnimatedImage from './TestAnimatedImage'

// Styles...
import styles from './FotoSpread.style'

// FotoTemplates...
import fotoSpreadTemplates from 'korobook/static/fotoSpreadTemplates'


// action Creators
import * as actionCreators from 'korobook/store/Fotobook/actions'

const DEFAULT_SCALE_VALUE = 1;
const SPRING_SCALE_VALUE = 1.05;
export class FotoSpread extends Component {

    static defaultProps = {
        activeFotoSpread: 0,
        activeFotoSpreadIndex: 0,
        activeFotoTemplate: 0
    }

    constructor(props) {
        super(props)
    
        this.state = {
            longTouchOnImageOccured: false,
            activeIndex: 0
        }

        this._positionOfImage = new Animated.ValueXY()
        this._animatedValue = new Animated.Value(DEFAULT_SCALE_VALUE)

    }

 
   
    get amountOfFotoFrames () {
       return fotoSpreadTemplates[this.props.activeFotoTemplate].length
    }


    _renderFoto = (foto, indexOfFoto) => {

        if(foto){
            return (

                    <TestAnimatedImage 
                        toggleScrollOnFotospreadSlider={this.props.toggleScrollOnFotospreadSlider}
                        foto={foto}
                        indexOfFoto={indexOfFoto}
                        detectResponder = {this.detectResponder}
                    />

                
            )
        }
            
    }

    componentDidUpdate(){
        console.log(this.state);
    }


    detectResponder = (indexOfFoto) => {
        this.setState({ activeIndex: indexOfFoto })
    }
           
        

    _renderFotoframes = () => {
        fotoFrames = null
        
        if(this.props.activeFotoSpreadIndex === this.props.activeFotoSpread) {
            fotoFrames = (
                Array.from({ length: this.amountOfFotoFrames }).map((_, i) => {
                    let zIn = 1
                    if(i === this.state.activeIndex) {
                        zIn = 200
                    }
                    const foto = this.props.fotoSpreads[this.props.activeFotoSpread].fotos[i]
                    return (
                        <FotoFrameContainer key={i} style={[
                            fotoSpreadTemplates[this.props.activeFotoTemplate][i].fotoFrameContainerStyles,
                            {zIndex: zIn}
                        ]}>
                            <FotoFrame 
                                style={[fotoSpreadTemplates[this.props.activeFotoTemplate][i].fotoFrameStyles]}
                            >
                                {
                                   this.props.fotoSpreads[this.props.activeFotoSpread].fotos.length > 0 && this._renderFoto(foto, i)
                                } 
                                
                                <PlusIcon />
                            </FotoFrame>
                        </FotoFrameContainer>
                    )
                }) 
            )
        }

        return fotoFrames
    }



 
    render() {
      
        return (
            <View style={styles.slideInnerContainer}>
    
                    { this._renderFotoframes() }

                

                    {
                         (this.amountOfFotoFrames > 1) && (
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
            </View>
        )
    }

}

FotoSpread.propTypes = {
    activeFotoSpread: PropTypes.number.isRequired,
    activeFotoTemplate: PropTypes.number.isRequired,
    activeFotoSpreadIndex: PropTypes.number.isRequired,
    fotoSpreads: PropTypes.array
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

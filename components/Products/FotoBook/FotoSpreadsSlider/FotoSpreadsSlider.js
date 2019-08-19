import React, { Component } from 'react';
import { 
    View,  
    ScrollView
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import FotoSpread from './FotoSpread/FotoSpread';

// Redux
import { connect } from 'react-redux';
import * as actions from 'korobook/store/Fotobook/actions';

// Styles
import styles from './FotoSpreadsSlider.style';
import { slideHeight } from './FotoSpread/FotoSpread.style';


let FIRST_SPREAD = 0
export class FotoSpreadsSlider extends Component {

  state = {
    scrollEnabled: true
  }

  _toggleScrollOnFotospreadSlider = () => {
    this.setState(prevState => ({ scrollEnabled: !prevState.scrollEnabled }))

  }

  _renderFotoSpread = ({_, index}) => (
    <FotoSpread 
      toggleScrollOnFotospreadSlider={this._toggleScrollOnFotospreadSlider} 
      activeFotoSpreadIndex={index}
    />
  ) 

  _renderFotoSpreadsSlider = () => {
    return (
        <View style={styles.carouselContainer}>
            <Carousel
              scrollEnabled={this.state.scrollEnabled}
              ref={c => this._slider1Ref = c}
              data={this.props.fotoSpreads}
              renderItem={this._renderFotoSpread}
              sliderHeight={slideHeight * 2}  
              itemHeight={slideHeight}
              firstItem={FIRST_SPREAD}
              inactiveSlideScale={0.9}
              inactiveSlideOpacity={0.2}
              containerCustomStyle={styles.slider}
              vertical={true}
              onSnapToItem={(index) =>  this.props.handleSnapFotoSpread(index)}
            />
        </View>
)}

  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          scrollEventThrottle={50}
          scrollEnabled={false}
        >
          { this._renderFotoSpreadsSlider() }
        </ScrollView>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  fotoSpreads: state.fotoBook.fotoSpreads
})

const mapDispatchToProps = (dispatch) => ({
  handleSnapFotoSpread: (indexOfFotoSpread) => dispatch(actions.snapFotoSpread(indexOfFotoSpread))
})

export default connect(mapStateToProps, mapDispatchToProps)(FotoSpreadsSlider)

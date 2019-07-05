import React, { Component } from 'react';
import { View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render () {
        const { data: { title, subtitle } } = this.props;

        return (
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    { title }
                </Text>
                <Text
                    style={styles.subtitle}
                >
                    { subtitle }
                </Text>
            </View>
        );
    }
}

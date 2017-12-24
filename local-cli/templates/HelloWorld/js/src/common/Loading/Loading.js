import React from 'react';
import {
    View,
    Text,
    InteractionManager,
    ActivityIndicatorIOS,
    ActivityIndicator,
    Platform
} from 'react-native';
import LoadingStyles from './LoadingStyles';

export default class questionComponent extends React.Component {
    render() {
        return (
            <View style={LoadingStyles.loading}>
                <ActivityIndicator styleAttr='Inverse' color='#FF4500' />
            </View>
        )
    }
}

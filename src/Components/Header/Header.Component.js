import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.Component.Style';

import GoBackButton from './../GoBackButton/GoBackButton.Component';

export default Header = (props) => {
    return (
        <View style={styles.header}>
            {
                (props.showBackButton) &&
                <GoBackButton
                    onPressHandler={() => props.defaultProps.history.goBack}
                />
            }
            <Text style={styles.headerText}>Assignment</Text>
        </View>
    );
}
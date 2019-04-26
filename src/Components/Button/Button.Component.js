import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.Component.Style';

export default Button = (props) => {
    return (
        <TouchableOpacity
            style={[styles.button, (props.active) ? styles.active : styles.disabled, props.styles || {}]}
            activeOpacity={(!props.active) ? 1 : 0.5}
            onPress={() => props.onPressHandler()}
        >
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}
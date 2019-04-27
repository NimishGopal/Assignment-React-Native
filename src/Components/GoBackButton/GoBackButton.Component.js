import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './GoBackButton.Component.Style';


export default GoBackButton = (props) => 
    <TouchableOpacity onPress={props.onPressHandler()} style={styles.goBackButton}>
        <Icon name='chevron-left' size={35} color="#000" style={styles.goBackButtonIcon}/>
    </TouchableOpacity>
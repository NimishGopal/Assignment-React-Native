import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    header:{
        flex: 0.1,
        height: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
        zIndex: 2
    },
    headerText:{
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '600'
    }
});
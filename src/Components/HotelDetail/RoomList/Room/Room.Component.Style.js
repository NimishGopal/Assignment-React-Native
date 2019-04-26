import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    roomWrapper:{
        alignItems: 'center',
        width: 120,
        paddingVertical: 10,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#545454'
    },
    roomNameStyle: {
        fontSize: 14,
        textTransform: 'uppercase'
    },
    roomPriceStyle: {
        fontSize: 14,
        fontWeight: '500'
    },
    active: {
        borderColor: '#65b823',
        borderWidth: 2,
    },
    activeText: {
        color: '#65b823'
    }
});
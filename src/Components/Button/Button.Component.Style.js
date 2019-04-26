import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    button: {
        flex: 1,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: "#FFF",
        textTransform: 'uppercase'
    },
    active: {
        backgroundColor: "#65b823"
    },
    disabled: {
        backgroundColor: "#545454"
    }
});
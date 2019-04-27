import {StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
    hotelWrapper:{
        flex: 1 / 3,
        marginTop: 10, 
        marginHorizontal: 10,
        borderWidth: 1, 
        borderColor: "#ebebeb",
        paddingBottom: 10,
    },
    textWrapper: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        paddingTop: 5
    },
    sidePadding:{
        paddingHorizontal: 15
    },
    buttonStyle: {
        marginTop: 10,
        marginHorizontal: 15
    },
    bold: {
        fontWeight: '500',
        color: "#121212"
    },
    font18: {
        fontSize: 18,
        color: '#a3a3a3'
    },
    font24: {
        fontSize: 24,
        color: '#a3a3a3'
    },
    font12: {
        fontSize: 12,
        color: '#a3a3a3'
    }
});
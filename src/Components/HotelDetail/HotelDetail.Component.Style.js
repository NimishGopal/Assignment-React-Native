import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer:{ 
        flex: 1, 
        position: "relative" 
    },
    contentContainerStyle: {
        flexGrow: 1
    },
    carouselImageWrapper: {
        flex: 1
    },
    carouselImage: {
        width: 250,
        height: 200
    },
    hotelDetailContentWrapper: {
        flex: 1
    },
    hotelNameWrapper: {
        paddingTop: 15
    },
    hotelNameStyle: {
        fontSize: 24,
        paddingBottom: 10,
        fontWeight: '600',
        color: '#121212'
    },
    buttonWrapper: {
        width: width,
        position: 'absolute',
        bottom: 0
    },
    sidePadding:{
        paddingHorizontal: 15
    },
    iconListWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 35
    },
    iconStyle: {
        width: 20, 
        height: 20, 
        marginBottom: 10
    },
    policiesWrapper: {
        paddingTop: 5,
        paddingBottom: 10
    },
    policiesHeading: {
        fontSize: 18,
        fontWeight: '500',
        color: '#121212',
        paddingBottom: 10,
        textTransform: 'capitalize'
    },
    policiesText: {
        fontSize: 14,
        paddingBottom: 5
    }
});
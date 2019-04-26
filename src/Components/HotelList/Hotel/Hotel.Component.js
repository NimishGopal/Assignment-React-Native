import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../Button/Button.Component';
import styles from './Hotel.Component.Style';
export default Hotel = (props) => {
    const { hotelName, hotelPrice, hotelCity, hotelLocality, hotelImage, history, id } = props;
    const { hotelWrapper, textWrapper, buttonStyle, font18, font24, font12, bold, sidePadding } = styles;
    return (
        <View style={hotelWrapper}>
            <Image source={{ uri: hotelImage }} style={{ flex: 1, height: 150 }} resizeMode="cover" />
            <View style={[textWrapper, sidePadding]}>
                <Text style={[font18, bold]}>{hotelName}</Text>
                <Text style={[font24, bold]}>{(hotelPrice) ? `₹${hotelPrice}` : ''}</Text>
            </View>
            <View style={[textWrapper, sidePadding]}>
                <Text style={font12}>{hotelCity}</Text>
                <Text style={font12}>{hotelLocality}</Text>
            </View>
            <View style={buttonStyle}>
                <Button
                    buttonText={(hotelPrice) ? "Book Now" : "Sold Out"}
                    active={(hotelPrice) ? true : false}
                    onPressHandler={() => (hotelPrice) ? history.push({
                        pathname: '/detail',
                        state: {
                            hotelCity: hotelCity,
                            hotelImage: hotelImage,
                            hotelLocality: hotelLocality,
                            hotelName: hotelName,
                            hotelPrice: hotelPrice,
                            id: id
                        }
                    }) : console.log('Sold Out!')}
                />
            </View>
        </View>
    );
}

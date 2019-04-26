import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { selectedRoomPrice } from './../../../../Actions';
import styles from './Room.Component.Style';

const { roomWrapper, roomNameStyle, roomPriceStyle, active, activeText } = styles;

class Room extends React.Component {
    render() {
        const { selectedRoomPriceValue, roomValue, roomName, selectedRoomPrice } = this.props;
        return (
            <TouchableOpacity
                style={[
                    roomWrapper, 
                    (selectedRoomPriceValue === roomValue) ? active : {},
                    (roomValue!==null) ? {opacity: 1} : {opacity: 0.5}
                ]}
                onPress={() => (roomValue!==null) ? selectedRoomPrice(roomValue): console.log("Sold Out")}
                activeOpacity={(roomValue!==null) ? 0.6 : 0.5}>
                <Text style={[roomNameStyle, (selectedRoomPriceValue === roomValue) ? activeText : {}]}>{roomName}</Text>
                <Text style={[roomPriceStyle, (selectedRoomPriceValue === roomValue) ? activeText : {}]}>{(roomValue) ? roomValue : 'Sold Out'}</Text>
            </TouchableOpacity>
        );
    };
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {
    selectedRoomPrice: selectedRoomPrice
})(Room);
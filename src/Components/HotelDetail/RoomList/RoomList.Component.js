import React from 'react';
import { ScrollView } from 'react-native';
import Room from './Room/Room.Component'
import styles from './RoomList.Component.Style'


const { roomListWrapper } = styles;

export default RoomList = (props) => {
    const { roomList, roomPrice } = props;
    return (
        <ScrollView contentContainerStyle={roomListWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                Object.entries(roomList).map((value) =>
                    <Room
                        roomName={value[0]}
                        roomValue={value[1]}
                        selectedRoomPriceValue={roomPrice}
                    />
                )
            }
        </ScrollView>
    );
}
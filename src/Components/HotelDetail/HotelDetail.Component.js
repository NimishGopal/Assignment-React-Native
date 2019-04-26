import React from 'react';
import { View, FlatList, Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updatePolicies, updateEssentials, selectedRoomPrice } from '../../Actions';
import RoomList from './RoomList/RoomList.Component';
import styles from './HotelDetail.Component.Style';
import Button from '../Button/Button.Component';

import { ImageCarousel, essentialIcons } from '../../Data';


const { carouselImageWrapper,
    carouselImage,
    hotelDetailContentWrapper,
    hotelNameStyle,
    sidePadding,
    hotelNameWrapper,
    buttonWrapper,
    iconListWrapper,
    iconWrapper,
    iconStyle,
    policiesWrapper,
    policiesHeading,
    policiesText } = styles;

const policyAndEssentialsURL = 'http://www.mocky.io/v2/5a7f265b2e00005d00b56877';

const Essential = (props) => {
    return (
        <View style={iconWrapper}>
            <Image
                source={{ uri: props.icon }}
                style={iconStyle} />
            <Text>{props.name}</Text>
        </View>
    );
}

class HotelDetail extends React.Component {
    componentDidMount() {
        fetch(policyAndEssentialsURL)
            .then((res, err) => {
                if (err) console.log(err);
                res.json().then((result) => {
                    this.props.updatePolicies(result.data.policies);
                    let refactoredEssentials = this.refactorEssentials(result.data.essentials);
                    this.props.updateEssentials(refactoredEssentials);
                    this.props.selectedRoomPrice(this.props.location.state.hotelPrice);
                });
            });
    }
    refactorEssentials = (essentials) => {
        let refactoredEssentails = [];
        essentials.map((item, key) => {
            refactoredEssentails.push({
                icon: essentialIcons[key],
                essential: item
            });
        });
        return refactoredEssentails;
    }
    renderRooms = (roomList) =>
        <RoomList
            roomList={roomList}
            roomPrice={this.props.roomPrice}
            selectedRoomPrice={() => this.props.selectedRoomPrice}
        />

    render() {
        const { hotelName } = this.props.location.state;
        let key = this.props.location.state.id - 1;
        const roomList = this.props.prices[key].price;
        return (
            <ScrollView contentContainerStyle={{ flex: 1, position: "relative", flexGrow: 1 }}>
                <View style={carouselImageWrapper}>
                    <FlatList
                        keyExtractor={(item, index) => index}
                        horizontal={true}
                        data={ImageCarousel}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Image style={carouselImage} source={{ uri: item }} />}
                    />
                </View>
                <View style={[hotelDetailContentWrapper, sidePadding]}>
                    <View style={hotelNameWrapper}>
                        <Text style={hotelNameStyle}>
                            {hotelName}
                        </Text>
                    </View>
                    <View style={iconListWrapper}>
                        <FlatList
                            keyExtractor={(item, index) => index}
                            data={this.props.essentials}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <Essential
                                    icon={item.icon}
                                    name={item.essential}
                                />}
                        />
                    </View>
                    <View style={policiesWrapper}>
                        <Text style={policiesHeading}>
                            Policies
                            </Text>
                        <FlatList
                            keyExtractor={(item, index) => index}
                            data={this.props.policies}
                            renderItem={({ item }) => <Text style={policiesText}>• {item}</Text>}
                        />
                    </View>
                    <View style={policiesWrapper}>
                        <Text style={policiesHeading}>
                            Select different rooms
                        </Text>
                        {this.renderRooms(roomList)}
                    </View>
                </View>
                <View style={buttonWrapper}>
                    <Button
                        active={true}
                        buttonText={`Book Now @ ${this.props.roomPrice}`}
                        onPressHandler={() => console.log('Enjoy Your Booking!!')}
                    />
                </View>
            </ScrollView>
        );

    }
};

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, {
    updatePolicies: updatePolicies,
    updateEssentials: updateEssentials,
    selectedRoomPrice: selectedRoomPrice
})(HotelDetail)


import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { updateHotelList, updatePrices } from '../../Actions';
import Hotel from './Hotel/Hotel.Component';
import styles from './HotelList.Component.Style';

const hotelListURL = 'http://www.mocky.io/v2/5a7f23442e00005000b56873';
const hotelPriceUrl = 'http://www.mocky.io/v2/5a7f24f02e00005200b56875';
const hotelImagePlaceholder = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80';


class HotelList extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        // Will fetch hotel list and price data
        this.fetchHotelList()
            .then((success) => {
                if (success) {
                    this.fetchHotelPrices();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    fetchHotelList = () => {
        return new Promise((resolve, reject) => {
            fetch(hotelListURL)
                .then((res, err) => {
                    if (err) reject(err);
                    res.json().then((result) => {
                        this.props.updateHotelList(result.data);
                        resolve(true);
                    });
                });
        });
    }
    fetchHotelPrices = () => {
        return new Promise((resolve, reject) => {
            fetch(hotelPriceUrl)
                .then((res, err) => {
                    if (err) console.log(err);
                    res.json().then((result) => {
                        this.props.updatePrices(result.data);
                        let cheapestPrice = this.getCheapestPrice(this.props.prices);
                        this.setState({ loading: false, cheapestPrice: cheapestPrice }, () => resolve(true));
                    });
                });
        });
    }
    getCheapestPrice = (data) => {
        let cheapestPrices = [];
        data.map((item) => {
            let priceArr = Object.values(item.price).filter((price) => price !== null);
            (priceArr.length) ? cheapestPrices.push(Math.min(...priceArr)) : cheapestPrices.push(null);
        });
        return cheapestPrices;
    }
    render() {
        const { hotels, prices, history } = this.props;
        const { cheapestPrice } = this.state;
        return (
            (!this.state.loading) ?
                <FlatList
                    data={hotels}
                    style={styles.hotelListWrapper}
                    keyExtractor={(item, index) => item.name}
                    renderItem={({ item }) => {
                        return (
                            <Hotel
                                hotelImage={hotelImagePlaceholder}
                                hotelName={item.name}
                                hotelPrice={cheapestPrice[item.id - 1]}
                                hotelLocality={item.locality}
                                hotelCity={item.city}
                                id={item.id}
                                history={history}
                                prices={prices[item.id -1].price}
                                defaultProps={this.props.defaultProps}
                            />
                        );
                    }}
                />
                :
                <View></View>
                // <View style={styles.indicatorWrapper}>
                //     <ActivityIndicator size={50} color="#545454" />
                // </View>
        );
    };
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {
    updateHotelList: updateHotelList,
    updatePrices: updatePrices
})(HotelList);

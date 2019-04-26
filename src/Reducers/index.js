import { combineReducers } from 'redux';

const listHotelReducer = (hotelList = [], action) => {
    if(action.type === 'UPDATE_HOTEL_LIST'){
        return action.payload;
    };
    return hotelList;
};

const updatePoliciesReducer = (policies = [], action) => {
    if(action.type === 'UPDATE_POLICIES'){
        return action.payload;
    };
    return policies;
};

const updateEssentialsReducer = (essentials = [], action) => {
    if(action.type === 'UPDATE_ESSENTIALS'){
        return action.payload;
    };
    return essentials;
};

const updatePriceReducer = (prices = [], action) => {
    if(action.type === 'UPDATE_PRICES'){
        return action.payload
    };
    return prices;
}

const selectedRoomPriceReducer = (selectedRoomPrice = 0, action) => {
    if(action.type === 'SELECTED_ROOM_PRICE'){
        return action.payload
    };
    return selectedRoomPrice;
}

export default combineReducers({
    hotels: listHotelReducer,
    policies: updatePoliciesReducer,
    prices: updatePriceReducer,
    essentials: updateEssentialsReducer,
    roomPrice: selectedRoomPriceReducer
});
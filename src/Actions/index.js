export const updatePolicies = (data) => {
    return {
        type: 'UPDATE_POLICIES',
        payload: data
    };
};

export const updateEssentials = (data) => {
    return {
        type: 'UPDATE_ESSENTIALS',
        payload: data
    };
};

export const updateHotelList = (data) => {
    return {
        type: 'UPDATE_HOTEL_LIST',
        payload: data
    };
};

export const updatePrices = (data) => {
    return {
        type: 'UPDATE_PRICES',
        payload: data
    };
};

export const selectedRoomPrice = (data) => {
    return {
        type: 'SELECTED_ROOM_PRICE',
        payload: data
    };
};
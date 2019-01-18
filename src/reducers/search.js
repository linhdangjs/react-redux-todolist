import * as types from './../constants/ActionTypes';


// state mặc định
var initialState = '';

// function xử lý của 'reducer: item editing'
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            state = action.keyword;
            return state;
        default:
            return state;
    }
};

export default myReducer;
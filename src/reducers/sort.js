import * as types from './../constants/ActionTypes';


// state mặc định
var initialState = {
    by: 'name',
    value: 1 // 1 : tăng , -1 : giảm
};

// function xử lý của 'reducer: item editing'
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
           return {
               by: action.sort.by,
               value: action.sort.value
           }
        default:
            return state;
    }
};

export default myReducer;
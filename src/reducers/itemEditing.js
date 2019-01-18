import * as types from './../constants/ActionTypes';


// state mặc định
var initialState = {
    id: '',
    name: '',
    status: false
}

// function xử lý của 'reducer: item editing'
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        default: return state;
    }
};

export default myReducer;
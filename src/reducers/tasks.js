import * as types from './../constants/ActionTypes';

/*Ham xu ly tao ra ID random */
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

var findIndex = (tasks, id) => {
    var result = -1;

    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}


// lấy dữ liệu từ localStorage
if (localStorage.getItem('tasks')) {
    var data = JSON.parse(localStorage.getItem('tasks'));
}


// state mặc định
var initialState = data ? data : [];

// function xử lý của 'reducer: tasks'
var myReducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true: false
            }
            //nếu k có id -> tạo id mới -> push vào danh sách task
            if (!task.id) {
                task.id = generateID();
                state.push(task);
            // nếu đã có id thì tìm index -> state[index] = task
            } else {
               index = findIndex(state, task.id);
               state[index] = task;
            }

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            index = findIndex(state, action.id);
            // state[index].status = !state[index].status;
            // trường hợp này là nested property: truy vấn thay đổi các giá trị lồng nhau(object->value)
            // chúng ta không cập nhật được view
            // C1:
            // var cloneTask = {...state[index]}; //copy 1 task(object) mới từ task cũ
            // cloneTask.status = !cloneTask.status;
            // state[index] = cloneTask;

            // C2:
            state[index] = {
                ...state[index],
                status: !state[index].status
            }

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};

export default myReducer;
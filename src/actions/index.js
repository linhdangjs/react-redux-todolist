import * as types from './../constants/ActionTypes';

// action 'list_all'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

// action 'add_task'
export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task // task : task
    }
}

// action 'toggle-form'
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
};

// action 'open-form'
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
};

// action 'close-form'
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
};

//action 'update-status'
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id // id : id
    }
}

//action 'delete-status'
export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id // id : id
    }
}

//action 'edit-item'
export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

//action 'filter-table'
export const filterTask = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
}

//action 'search'
export const searchTask = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
}

//action 'sort'
export const sortTask = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}
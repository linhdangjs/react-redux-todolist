//combineReducers 
import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import searchTask from './search';
import sortTask from './sort';
//gộp các reducer vào 'myReducer'
const myReducer =  combineReducers({
    tasks, // tasks: tasks
    isDisplayForm, // isDisplayform : isDisplayForm
    itemEditing,
    filterTable,
    searchTask,
    sortTask

});

export default myReducer;
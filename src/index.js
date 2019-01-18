import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Create Store (REDUX)
import { createStore } from 'redux';
import myReducer from './reducers/index';
// dùng 'Provider' để cung cấp 'store' cho 'view'
import { Provider } from 'react-redux';
//muốn tạo một store phải truyền vào 'createStore' một tham số là 'reducer'
const store = createStore(
    myReducer,
    // thêm config -> sử dụng redux developer tool trên trình duyệt
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

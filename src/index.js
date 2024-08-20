import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Components/Routing';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store}>
        <Routing />
    </Provider>
);

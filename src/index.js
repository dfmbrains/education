import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './style/scroll.css';
import './style/index.css';
import {Provider} from "react-redux";
import {store} from "./redux";
import Preloader from "./components/Preloader";

ReactDOM.render(
    <Suspense fallback={<Preloader/>}>
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);

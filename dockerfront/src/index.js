import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';


const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware( thunk ))
);

if ( localStorage.ApiToken ){
    const user = { token: localStorage.ApiToken };
    store.dispatch(userLoggedIn( user ));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <Route component={ App } />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
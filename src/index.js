import Main from './Main';
import Login from './Login'
import registerServiceWorker from './registerServiceWorker';

import React from 'react'
import ReactDOM from 'react-dom'
import axios from "./Axios";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers'; // Or wherever you keep your reducers
// debugger;
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// debugger;
// console.log(reducers);
const store = createStore(
    combineReducers({
        reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
axios.get("/get_names_database").then(function (response) {
    let data = [];

    for(let i = 0;i<response.data.length;i++){
        data.push(response.data[i].database);
    }
    // console.log(data);
    store.dispatch({type:"UPDATE_DATABASES_NAME",data:data});
});
ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <Route path="/test" component={()=>{return <Main/>}}/>
                <Route path="/login" component={()=>{return <Login/>}}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<FormExample />, document.getElementById('root'));
registerServiceWorker();


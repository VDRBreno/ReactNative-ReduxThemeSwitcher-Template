import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './src/redux/themeReducer';

import HomeScreen from './src/pages/HomeScreen';

const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk));

export default function App() {

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}


import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStore } from 'redux';
import { NativeRouter, Route, Switch, nativeHistory, BackButton } from "react-router-native";

import Reducers from './src/Reducers';
import HotelList from './src/Components/HotelList/HotelList.Component';
import HotelDetail from './src/Components/HotelDetail/HotelDetail.Component';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <NativeRouter history={nativeHistory}>
          <Switch>
            <Route exact path="/" component={HotelList} />
            <BackButton>
              <Route exact path="/detail" component={HotelDetail} />
            </BackButton>
          </Switch>
        </NativeRouter>
      </Provider>
    );
  };
};
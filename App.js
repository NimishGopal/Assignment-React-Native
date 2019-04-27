

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStore } from 'redux';
import { NativeRouter, Route, Switch, nativeHistory, BackButton } from "react-router-native";

import Reducers from './src/Reducers';
import HotelList from './src/Components/HotelList/HotelList.Component';
import HotelDetail from './src/Components/HotelDetail/HotelDetail.Component';
import Header from './src/Components/Header/Header.Component';

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <NativeRouter history={nativeHistory}>
          <Switch>
            <Route exact path="/" render={(props) =>
              <View style={{ flex: 1 }}>
                <Header showbackButton={false} defaultProps={props} />
                <HotelList defaultProps={props}/>
              </View>
            } />
            <BackButton>
              <Route exact path="/detail" render={(props) =>
                <View style={{ flex: 1 }}>
                  <Header showBackButton={true} defaultProps={props} />
                  <HotelDetail defaultProps={props} />
                </View>
              } />
            </BackButton>
          </Switch>
        </NativeRouter>
      </Provider>
    );
  };
};
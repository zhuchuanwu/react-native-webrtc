import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import {UnAuthRouter} from './src/routers/router';

const App: () => React$Node =  ({ token,dispatch }) => {
  dispatch({type:'user/autoLogin'});
  return  <UnAuthRouter/>;
}
export default connect()(App);
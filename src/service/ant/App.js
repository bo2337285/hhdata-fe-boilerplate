import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Nav from './Nav';
import Header from './Header';

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);
//debugger
const App = React.createClass({
  getInitialState() {
    return {
      isPack: false,
    };
  },
  handleClick(isPack) {
      console.log("header:" + isPack);
      var b = isPack;
      this.setState({ isPack: isPack },function(){
        console.log("this:" + this.state.isPack);
      });
  },
  render() {
    return (
      <div>
        <Header onClick={this.handleClick} />
        <div className="bodyDiv">
          <div className="navDiv" style={{ width:(this.state.isPack?0:240)}}>
            <Nav />
          </div>
          <div className="cotainerDiv" style={{ marginLeft:(this.state.isPack?0:240)}}>

          </div>
        </div>
      </div>
    );
  },
});

module.exports = App;

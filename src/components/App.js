import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <Header
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
        <Nav
          open={this.state.open}
          onRequestChange={(open) => {this.setState({open})}}
          />
        <Content
          itemKey="aaa"
          url="./service/a/index.html"
        />
      </div>
    );
  }

}

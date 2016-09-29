import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Nav extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={this.props.onRequestChange}>
          <MenuItem>菜单0</MenuItem>
          <MenuItem>菜单1</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }

}

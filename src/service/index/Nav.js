import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Nav extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={this.props.onRequestChange}
            >
            {
              props.items.map(item =>
              <MenuItem
                id={item.id}
                key={item.id}
                onTouchTap={() => props.onItemClick(item)}
                >
                {item.name}
              </MenuItem>
            )}
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }

}

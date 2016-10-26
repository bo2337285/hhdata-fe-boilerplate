import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class Header extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Demo"
            style={{
              position: "fixed",
              top: 0,left:0,right:0,
              zIndex: 1000
            }}
            onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
            iconElementRight= {
              <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="用户资料" />
                  <MenuItem primaryText="注销" />
                </IconMenu>
              }
          />
        </MuiThemeProvider>

      </div>
    );
  }

}

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

import { connect } from 'react-redux'
import { toggleMenu } from '../service/index/actions'


injectTapEventPlugin();

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.open
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleMenu(false))
    },
    onChange: () =>{
      dispatch(toggleMenu(true))
    }
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(class App extends React.Component {
  // constructor (props) {
  //   super(props);
  //   // this.state = {open: false};
  // }

  // handleToggle () {
  //   this.props.dispatch(toggleMenu(true));
  //   // this.setState({open: !this.state.open})
  // }

  render() {
    return (
      <div>
        <Header
          // onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          onLeftIconButtonTouchTap={this.props.onClick}
        />
        <Nav
          open={this.props.open}
          // onRequestChange={(open) => {this.setState({open})}}
          onRequestChange={this.props.onChange}
          />
        <Content
          itemKey="aaa"
          url="./service/a/index.html"
        />
      </div>
    );
  }

}
)

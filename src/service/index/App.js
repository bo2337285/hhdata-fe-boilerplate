import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions'
import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// let items = [
//   {id:0,name:"a",url:"service/a/index.html"},
//   {id:1,name:"b",url:"service/b/index.html"},
// ]

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.open,
    items: state.items,
    currItem: state.currItem
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(class App extends React.Component {
  constructor (props) {
    super(props);
    this.props.getMenu();
  }
  render() {
    return (
      <div>
        <Header
          onLeftIconButtonTouchTap={this.props.menuOpen}
        />
        <Nav
          open={this.props.open}
          onRequestChange={this.props.menuClose}
          onItemClick={this.props.onItemClick}
          items = {this.props.items||[]}
          />
        <Content
          itemKey={this.props.currItem?this.props.currItem.id:""}
          url={this.props.currItem?this.props.currItem.url:""}
        />
      </div>
    );
  }

}
)

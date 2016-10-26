import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions'
import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let items = [
  {id:0,name:"百度",url:"www.baidu.com"},
  {id:1,name:"新浪",url:"www.sina.com"},
]

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.open,
    items: state.items || items,
    currItem: state.currItem || items[0]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(class App extends React.Component {
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
          items = {this.props.items}
          />
        <Content
          itemKey={this.props.currItem.id}
          url={"http://"+this.props.currItem.url}
        />
      </div>
    );
  }

}
)

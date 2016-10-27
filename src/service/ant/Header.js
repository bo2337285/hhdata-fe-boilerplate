import React from 'react';

const Header = React.createClass({
  getInitialState() {
    return {
      isPack: false,
    };
  },
  handleClick(e) {
    this.setState({ isPack: !this.state.isPack },function(){
      this.props.onClick(this.state.isPack);
    });
  },
  render() {
    return (
      <div className="headerDiv">
          <div className="left-area">
            <div className="nav-toggle"
              onClick={this.handleClick}>
              <a className="banner-icon"></a>
            </div>
          </div>
          <div className="right-area">
            Header
          </div>
      </div>
    );
  },
});

module.exports = Header;

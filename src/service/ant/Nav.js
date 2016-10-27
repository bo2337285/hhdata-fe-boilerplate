import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const Nav = React.createClass({
  getInitialState() {
    return {
      current: '',
      openKeys: [],
    };
  },
  handleClick(e) {
    if(!!e.key && e.key != this.state.current){
      var isAppend = true;
      $(".cotainerDiv iframe").each(function(i, o){
        if($(o).attr("src") == e.key){
          isAppend = false;
          $(o).show();
        }else{
          $(o).hide();
        }
      });
      if(isAppend){
        $(".cotainerDiv > iframe").hide();
        $(".cotainerDiv").append("<iframe src='" + e.key + "'></iframe>");
      }
      this.setState({ current: e.key });
    }
  },
  onOpenChange(openKeys) {
    this.setState({ openKeys: this.getKeyPath(openKeys.key) });
  },
  getKeyPath(key) {
    const map = {
      sub1: ['sub1'],
      sub2: ['sub2'],
      sub3: ['sub2', 'sub3'],
      sub4: ['sub4'],
    };
    return map[key] || [];
  },
  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ width: 240, height: "100%" }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="./src/frame/testFrame/testFrame.html">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  },
});

module.exports = Nav;

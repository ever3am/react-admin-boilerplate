import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Navbar.scss';

const { Header, Sider, Content } = Layout;

class Navbar extends React.Component {
	render () {
    return (
			<Header style={{ background: '#fff', padding: 0 }}>
			<Icon
        className="Navbar__trigger"
        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={this.props.toggleMenu}/>
			</Header>
    );
  }
}

export default Navbar;

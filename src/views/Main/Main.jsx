import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import * as actions from '../App/store/actions';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

import './Main.scss';

const { Content } = Layout;

const mapStateToProps = state => ({
  collapsed: state.app.menuCollapsed
});

const mapDispatchToProps = dispatch => ({
  onMenuCollapsed: () => dispatch(actions.collapseMenu())
});

class Main extends React.Component {
  render () {
    return (
      <div className="Main">
        <Layout className="Main__content">
					<Sidebar collapsed={this.props.collapsed}/>
					<Layout>
						<Navbar collapsed={this.props.collapsed} toggleMenu={this.props.onMenuCollapsed}/>
						<Content>
							Main
						</Content>
					</Layout>
				</Layout>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

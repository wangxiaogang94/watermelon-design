import React from 'react';
// import { Helmet } from 'react-helmet';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import 'antd/es/layout/style/css';
import 'antd/es/menu/style/css';

import menu from './router';

import './index.css';
import './highlight.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class Index extends React.Component {
    state = { themenu: 'install' };
    renderMenu = list => {
        return list.map(item => {
            const { key, name, component } = item;
            if (Array.isArray(component)) {
                return (
                    <SubMenu key={key} title={name}>
                        {this.renderMenu(component)}
                    </SubMenu>
                );
            } else {
                return <Menu.Item key={key}>{name}</Menu.Item>;
            }
        });
    };
    renderChildren = list => {
        let component = null;
        list.forEach(item => {
            if (item.key === this.state.themenu) {
                component = item.component;
            }
            if (Array.isArray(item.component)) {
                item.component.forEach(child => {
                    if (child.key === this.state.themenu) {
                        component = child.component;
                    }
                });
            }
        });
        return component;
    };
    render() {
        return (
            <>
                <Layout style={{ background: '#fff' }}>
                    <Header
                        className="header"
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            maxWidth: '100%',
                            background: '#fff',
                            boxShadow: '0 2px 8px #f0f1f2',
                        }}
                    >
                        <div className="logo" style={{ fontSize: 20 }}>
                            Watermelon Design
                        </div>
                    </Header>
                    <Layout style={{ background: '#fff', marginTop: 20 }}>
                        <Sider
                            width={200}
                            style={{
                                background: '#fff',
                                overflow: 'auto',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                                borderRight: '1px solid #e8e8e8',
                            }}
                        >
                            <Menu
                                mode="inline"
                                selectedKeys={[this.state.themenu]}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                onClick={({ key }) => {
                                    this.setState({ themenu: key });
                                }}
                            >
                                {this.renderMenu(menu)}
                            </Menu>
                        </Sider>
                        <Layout style={{ marginLeft: 200 }}>
                            {/* <Header /> */}
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {this.renderChildren(menu)}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        );
    }
}

export default Index;

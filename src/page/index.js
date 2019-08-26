import React from 'react';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import 'antd/es/layout/style/css';
import 'antd/es/menu/style/css';
import 'antd/es/icon/style/css';

import './index.css';
import './highlight.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class Index extends React.Component {
    state = { themenu: '/' }
    componentDidMount(){
        const { pathname } = window.location;
        this.setState({themenu: pathname})
    }
    render() {
        const { children } = this.props;
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
                            {/* <Router> */}
                            <Menu
                                mode="inline"
                                selectedKeys={[this.state.themenu]}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                onClick={({ key }) => {this.setState({themenu: key})}}
                            >
                                <Menu.Item key="/">
                                    <Link to="/">首页</Link>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            组件
                                        </span>
                                    }
                                >
                                    <Menu.Item key="/watermark">
                                        <Link to="/watermark">水印</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            函数
                                        </span>
                                    }
                                >
                                    <Menu.Item key="/fileToBase64">
                                        <Link to="/fileToBase64">base64</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                            {/* </Router> */}
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
                                {children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
                {/* {children} */}
            </>
        );
    }
}

export default Index;

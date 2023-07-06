import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, TrophyOutlined, ContactsOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key="3" icon={<TrophyOutlined />}>
            Achievements
          </Menu.Item>
          <Menu.Item key="4" icon={<ContactsOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"> Trying to Build my Profile Here</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> Rohith R &copy; {new Date().getFullYear()}</Footer>
    </Layout>
  );
}

export default App;

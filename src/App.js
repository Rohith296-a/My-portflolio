import React from 'react';
import { Layout, Menu, Card } from 'antd';
import { HomeOutlined, UserOutlined, TrophyOutlined, ContactsOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';
import './App.css';
import 'animate.css';

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
      <Content className="content">
        <div className="site-layout-content">
          <h1 className="animate__animated animate__fadeInDown">Welcome to My Portfolio</h1>
          <Card
            title="About Me"
            bordered={false}
            style={{ width: 300 }}
            className="card animate__animated animate__fadeInUp"
          >
            <p>
              I am a passionate web developer with expertise in React.js,
              JavaScript, and HTML/CSS.
            </p>
          </Card>
          <Card
            title="Achievements"
            bordered={false}
            style={{ width: 300 }}
            className="card animate__animated animate__fadeInUp"
          >
            <ul>
              <li>Completed a full-stack web development course</li>
              <li>Published two mobile apps on App Store</li>
            </ul>
          </Card>
          <Card
            title="Contact Details"
            bordered={false}
            style={{ width: 300 }}
            className="card animate__animated animate__fadeInUp"
          >
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Your Name &copy; {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}

export default App;

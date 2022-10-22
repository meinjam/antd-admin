import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DateRangePicker from '../common/DateRangePicker';

const { Header, Sider, Content, Footer } = Layout;

const menues = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Dashboard',
    path: '/',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'Users',
    path: '/users',
  },
  // {
  //   key: '3',
  //   icon: <UploadOutlined />,
  //   label: 'nav 3',
  //   children: [{ label: 'item 3', key: 'submenu-item-1' }],
  // },
];

const AdminMaster = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('1');

  useEffect(() => {
    // console.log(location?.pathname);
    handleSelectedMenu(location?.pathname);
  }, [location]);

  const handleSelectedMenu = (menu) => {
    // console.log(menu);
    const menuItem = menues.filter((item) => item?.path === menu);
    const key = menuItem[0]?.key || '1';
    console.log(key);
    console.log(selectedMenu);
    setSelectedMenu(key);
  };

  const handleMenuNavigation = (id) => {
    console.log(id);
    const menuItem = menues.filter((item) => item?.key === id);
    const url = menuItem[0]?.path;
    // console.log(url || '/');
    navigate(url);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          {/* <div className='logo' /> */}
          {/* <img
            src='https://uploads-ssl.webflow.com/625bcc250b9c6b71921a004d/62ad9c09371b05d3fdc0f99a_Logo%20Biniyog.svg'
            alt=''
          /> */}
        </div>
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={[selectedMenu]}
          items={menues}
          onClick={(item) => {
            handleMenuNavigation(item.key);
          }}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <div className='semi-header'>
          {/* <span>hello</span> */}
          <DateRangePicker />
        </div>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '81vh',
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminMaster;

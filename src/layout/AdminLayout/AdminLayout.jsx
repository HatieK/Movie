import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  ADMIN_PATH_ACCOUNT,
  ADMIN_PATH_CINEMA,
  ADMIN_PATH_MOVIE,
  ADMIN_PATH_USER,
} from "../../constants/path";
import { Content, Header } from "antd/es/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authenticUser);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(removeUser(null));
    setIsModalOpen(false);
    message.success("Logout Thành Công");
  };

  const items = [
    {
      key: "1",
      label: <p onClick={handleLogout}>Đăng Xuất</p>,
    },
  ];
  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical"
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="../../../public/img/header-logo.webp"
            width={120}
            height={60}
            alt=""
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname || ADMIN_PATH_USER]}
          onSelect={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: ADMIN_PATH_USER,
              icon: <UserOutlined />,
              label: "User management",
            },
            {
              key: ADMIN_PATH_MOVIE,
              icon: <VideoCameraOutlined />,
              label: "Movie Management",
            },
            {
              key: ADMIN_PATH_CINEMA,
              icon: <UploadOutlined />,
              label: "Cinema Management",
            },
            {
              key: ADMIN_PATH_ACCOUNT,
              icon: <SettingOutlined />,
              label: "Account Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown
            menu={{
              items,
            }}
            className="auth-ava"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src="../../../public/img/ic-header-auth.svg" alt="" />
                <p className="authentic-user">{currentUser.taiKhoan}</p>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

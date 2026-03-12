import { useState } from 'react'
import { Layout, Menu, theme } from 'antd'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'

const { Header, Content, Footer, Sider } = Layout

const App = () => {
  const [selectedKey, setSelectedKey] = useState('posts')
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
          TanStack Query
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={[
            {
              key: 'users',
              label: 'User Page (Thực hành)',
            },
            {
              key: 'posts',
              label: 'Post Page (Bài tập)',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedKey === 'users' && <UserPage />}
            {selectedKey === 'posts' && <PostPage />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React Query Tutorial ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App

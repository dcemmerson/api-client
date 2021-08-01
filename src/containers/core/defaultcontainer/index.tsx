import React from 'react'
import SideMenu from 'src/containers/core/sidemenu/index'
import Topbar from 'src/containers/core/topbar/index'


import {Layout} from 'antd'
const { Header, Footer, Sider, Content } = Layout

interface Props {
  children : JSX.Element | JSX.Element[]
}

function DefaultContainer(props: Props) {
  // const {} = props
  const sidebarWidth = 250

  return (
    <>
    <Layout>
      <Header>
        <Topbar />
      </Header>
      <Layout>
        <Sider theme="light" width={sidebarWidth} style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        }}>
          <SideMenu />
        </Sider>
        <Layout style={{ padding: `0 24px 24px ${sidebarWidth}px` }}>
          <Content>
            { props.children }
          </Content>
        </Layout>
        
      </Layout>
      <Footer>Footer...</Footer>
    </Layout>
      {/* <Topbar />
      <Row wrap={false}>
        <Col flex="none">
          <SideMenu />
        </Col>
        <Col flex="auto">
          { props.children }
        </Col>
      </Row> */}
    </>
  )
}

export default DefaultContainer

import React from 'react'
import SideMenu from 'src/containers/core/sidemenu/index'
import Topbar from 'src/containers/core/topbar/index'


import {Row, Col} from 'antd'

interface Props {
  children : JSX.Element | JSX.Element[]
}

function DefaultContainer(props: Props) {
  // const {} = props

  return (
    <>
      <Topbar />
      <Row wrap={false}>
        <Col flex="none">
          <SideMenu />
        </Col>
        <Col flex="auto">
          { props.children }
        </Col>
      </Row>
    </>
  )
}

export default DefaultContainer

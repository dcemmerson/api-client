import React from 'react'
import {Row, Col, Button} from 'antd'

interface Props {}

function Topbar(props: Props) {
  const {} = props

  return (
    <Row wrap={false} align="middle" justify="space-between" gutter={16}>
      <Col>
        <Button type="link" href="/" size="large">Home</Button>
      </Col>
      <Col>def</Col>
    </Row>
  )
}

export default Topbar

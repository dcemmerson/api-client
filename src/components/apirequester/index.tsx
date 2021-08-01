import React from 'react'
import { Input } from 'antd'
import { SettingOutlined } from '@ant-design/icons';

import styles from './index.module.scss'

interface Props {}

function Index(props: Props) {
  const {} = props

  const handleApiRequest = () => console.log("handle api req")

  return (
    <>
      <div className={styles.test} >
      </div>

      <Input.Search
        placeholder="Enter url to see response" 
        addonBefore={<SettingOutlined />} 
        enterButton="Go!" 
        size="large" 
        allowClear={true}
        onSearch={handleApiRequest}
      />
    </>
  )
}

export default Index

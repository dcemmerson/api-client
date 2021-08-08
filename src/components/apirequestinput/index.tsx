import { Input } from 'antd'
import { SettingOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux'
import { apiClientRequestSelector, newApiClientRequest } from 'src/slices/apiclientslice'

import styles from './index.module.scss'

interface Props {}

function Index(props: Props) {
  const dispatch = useDispatch()
  console.log('use select')
  console.log(useSelector(apiClientRequestSelector))
  const {isLoading, isError} = useSelector(apiClientRequestSelector)

  const {} = props

  const handleApiRequest = (e : any) => {
    console.log(e)
    dispatch(newApiClientRequest(e))
  }

  return (
    <>
      <div className={styles.test} >
      </div>
      {isError && <div>Something isn't right...</div>}
      <Input.Search
        placeholder="Enter url to see response" 
        addonBefore={<SettingOutlined />} 
        enterButton="Go!" 
        size="large" 
        allowClear={true}
        onSearch={handleApiRequest}
        disabled={isLoading}
      />
    </>
  )
}

export default Index

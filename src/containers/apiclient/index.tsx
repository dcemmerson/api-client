import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postsSelector, fetchPosts } from 'src/slices/postslice'
import DefaultContainer from 'src/containers/core/defaultcontainer/index'
import ApiRequestInput from 'src/components/apirequestinput/index'


function ApiClient() {
  const dispatch = useDispatch()
  const {posts, loading, hasErrors} = useSelector(postsSelector)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])  
  
  const render = () => {
    if(loading) return [<div>loading...</div>]
    if(hasErrors) return [<div>has errors...</div>]
    
    return posts.map((post, index) => (
      <div key={index} className={`${index}`}>
        {`id: ${post.id} ${post.title}`}
      </div>)
    )
    
  }

  return (
    <>
      <DefaultContainer>
          {[
            <ApiRequestInput />,
          ...render(),
          ]}
        </DefaultContainer>
        
    </>
  )
}

// const mapStateToProps = (state: State)  : PostList => state.posts

export default ApiClient
// export default connect(mapStateToProps)(ApiClient)


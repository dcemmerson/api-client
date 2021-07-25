import { createSlice } from "@reduxjs/toolkit";
import { State } from "src/slices"

export interface PostList {
  posts: Array<Post>
  loading: boolean
  hasErrors: boolean 
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export const initialState : PostList = {
  posts: [
    { id: 0, userId: 0, title: 'hello...', body: '...' }, 
    { id: 0, userId: 0, title: 'agaiddn?', body: '...' },
  ],
  loading: false,
  hasErrors: false,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: state => {
      state.loading = true
    },
    getPostsSuccess: (state, {payload}) => {
      state.posts = payload
      state.loading = false
      state.hasErrors = false
    },
    getPostsFailure: state => {
      state.loading = false
      state.hasErrors = true
    }
  },
})


export const {getPosts, getPostsSuccess, getPostsFailure} = postsSlice.actions
export const postsSelector = (state : State) => state.posts

export default postsSlice.reducer

export function fetchPosts() {
  return ( dispatch : (arg: {}) => void) => {
    dispatch(getPosts())
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        dispatch(getPostsSuccess(data))
      })
      .catch(err => {
        console.error(err)
        dispatch(getPostsFailure())
      })
  }
}

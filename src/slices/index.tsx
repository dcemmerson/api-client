import {combineReducers} from 'redux';
import PostsReducer, { PostList } from "./postslice";

export interface State {
  posts: PostList
}


const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;

import {combineReducers} from 'redux';
import PostsReducer, { PostList } from "./postslice";
import ApiClientReducer, { ApiClientState } from "./apiclientslice";


export interface State {
  posts: PostList
  apiClient: ApiClientState
  // apiClientResponseList: ApiClientResponseList
  // apiClientRequest: ApiClientRequest
}


const rootReducer = combineReducers({
  posts: PostsReducer,
  apiClient: ApiClientReducer,
});

export default rootReducer;

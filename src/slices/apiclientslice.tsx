import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { State } from "src/slices"

import ApiClientResponse from "src/models/apiclientresponse"
import Loadable from "src/core/interfaces/loadable"
import { requestServerUrl } from "src/core/environment/index"

// import ApiClientResponseList from "src/models/apiclientresponselist"

// export interface ApiClientRequestList {
//   posts: Array<Post>
//   loading: boolean
//   hasErrors: boolean 
// }


export interface ApiClientState {
  apiClientResponseList : ApiClientResponseList
  apiClientRequest : ApiClientRequest
}

export interface ApiClientResponseList extends Loadable {
  list: ApiClientResponse[]
}

export interface ApiClientRequest extends Loadable {

}

export const initialState : {apiClientResponseList : ApiClientResponseList, apiClientRequest : ApiClientRequest} = {
  apiClientRequest: {
    isLoading: false,
    isError: false,
  },
  apiClientResponseList: {
    isLoading: false,
    isError: false,
    list: [],
  }
}

const apiClientSlice = createSlice({
  name: 'apiclientresponselist',
  initialState,
  reducers: {
    getApiClientResponseList: state => {
      state.apiClientResponseList.isLoading = true
    },
    getApiClientResponseListSuccess: (state, {payload}) => {
      state.apiClientResponseList.list.push(payload)
      state.apiClientResponseList.isLoading = false
      state.apiClientResponseList.isError = false
    },
    getApiClientResponseListFailure: state => {
      state.apiClientResponseList.isLoading = false
      state.apiClientResponseList.isError = true
    },
    getNewApiClientRequest: state => {
      state.apiClientRequest.isLoading = true
    },
    getNewApiClientRequestSuccess: (state, { payload }) => {
      state.apiClientRequest.isLoading = false
      state.apiClientRequest.isError = false
      console.log('payload = ')
      console.log(payload)
    },
    getNewApiClientRequestFail: state => {
      state.apiClientRequest.isLoading = false
      state.apiClientRequest.isError = true
    },
  },
})


export const {
  getApiClientResponseList, getApiClientResponseListSuccess, getApiClientResponseListFailure,
  getNewApiClientRequest, getNewApiClientRequestSuccess, getNewApiClientRequestFail,
} = apiClientSlice.actions

export const apiClientResponseSelector = (state : State) => state.apiClient.apiClientResponseList
export const apiClientRequestSelector = (state : State) => {
  console.log("SSTATE = ")
  console.log(state)
  return state.apiClient.apiClientRequest
}

export default apiClientSlice.reducer

export function fetchSavedApiClientResponseList() {
  return ( dispatch : (arg: {}) => void) => {
    dispatch(getApiClientResponseList())
    
    axios.get('/apiclient/getsaved')
      // .then(res => res.json())
      .then(data => {
        dispatch(getApiClientResponseListSuccess(data))
      })
      .catch(err => {
        console.error(err)
        dispatch(getApiClientResponseListFailure())
      })
  }
}

interface NewApiClientRequest {
  type: 'GET' | 'POST' | 'PUT' | 'DELETE'
  request : string
}

export function newApiClientRequest(request: NewApiClientRequest)  {
  return (dispatch : (arg: {}) => void) => {
    dispatch(getNewApiClientRequest())
    console.log('fetching new...')
    return axios.post(`${requestServerUrl}/apiclient/newrequest`, request)
      .then(data => {
        dispatch(getNewApiClientRequestSuccess(data))
      })
      .catch(err => {
        console.error(err)
        dispatch(getNewApiClientRequestFail())
      })
  }
}


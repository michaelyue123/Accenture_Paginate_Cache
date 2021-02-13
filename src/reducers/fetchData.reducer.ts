// src/store/system/reducers.ts

import { FETCH_DATA } from '../constants';

interface InitialState {
    currentPage: number
    backendPages: number
    
}



export function fetchDataReducer(
  state = initialState,
  action: SystemActionTypes
): InitialState {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}
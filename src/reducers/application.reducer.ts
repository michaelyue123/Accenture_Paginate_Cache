// src/store/system/reducers.ts

import {
  BACK_PREVIOUS_PAGE,
  FetchDataAction,
  FETCH_DATA,
  INITIAL_CACHED_PAGES,
  MAX_CACHED_PAGES,
  MOVE_NEXT_PAGE,
  PaginateActionTypes,
  UpdateCacheIndexAction,
  UPDATE_CACHE_INDEX,
} from "../constants";

interface SystemState {
  currentPage: number;
  totalPage: number;
  cachedPage: number;
}

const initialState: SystemState = {
  currentPage: 0,
  totalPage: 0,
  cachedPage: 0,
};

export const applicationReducer = (
  state = initialState,
  action: FetchDataAction | PaginateActionTypes | UpdateCacheIndexAction
) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        currentPage: 1,
        totalPage: action.payload,
        cachedPage: INITIAL_CACHED_PAGES,
      };
    }
    case MOVE_NEXT_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    case BACK_PREVIOUS_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case UPDATE_CACHE_INDEX: {
      return {
        ...state,
        cachedPage: state.cachedPage + MAX_CACHED_PAGES,
      };
    }
    default:
      return state;
  }
};

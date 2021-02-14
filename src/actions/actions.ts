import { type } from "os";
import {
  BACK_PREVIOUS_PAGE,
  FETCH_DATA,
  MOVE_NEXT_PAGE,
  UPDATE_CACHE_INDEX,
  FetchDataAction,
  UpdateCacheIndexAction,
  PaginateActionTypes,
} from "../constants";

// fetch data action
export const fetchData = (data: {}): FetchDataAction => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const moveNextPage = (): PaginateActionTypes => {
  return {
    type: MOVE_NEXT_PAGE,
  };
};

export const backPreviousPage = (): PaginateActionTypes => {
  return {
    type: BACK_PREVIOUS_PAGE,
  };
};

export const updateNewIndexToCache = (
  index: number
): UpdateCacheIndexAction => {
  return {
    type: UPDATE_CACHE_INDEX,
    payload: index,
  };
};

import { type } from "os";
import {
  BACK_PREVIOUS_PAGE,
  FETCH_DATA,
  MOVE_NEXT_PAGE,
  UPDATE_CACHE_INDEX,
} from "../constants";

export const fetchData = (data: any) => {
  return {
    type: typeof FETCH_DATA,
    payload: data,
  };
};

export const moveNextPage = () => {
  return {
    type: typeof MOVE_NEXT_PAGE,
  };
};

export const backPreviousPage = () => {
  return {
    type: typeof BACK_PREVIOUS_PAGE,
  };
};

export const updateNewIndexToCache = (index: any) => {
  return {
    type: typeof UPDATE_CACHE_INDEX,
    index,
  };
};

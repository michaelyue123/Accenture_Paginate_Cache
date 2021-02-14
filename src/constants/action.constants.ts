// fetch data contant type
export const FETCH_DATA = "FETCH_DATA";

// request next page constant type
export const REQUEST_NEXT_PAGE = "REQUEST_NEXT_PAGE";

// move to next page constant type
export const MOVE_NEXT_PAGE = "MOVE_NEXT_PAGE";

// back to previous page constant type
export const BACK_PREVIOUS_PAGE = "BACK_PREVIOUS_PAGE";

// update cache index constant type
export const UPDATE_CACHE_INDEX = "UPDATE_CACHE_INDEX";

export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: {};
}

interface MoveNextPageAction {
  type: typeof MOVE_NEXT_PAGE;
}

interface BackPreviousPageAction {
  type: typeof BACK_PREVIOUS_PAGE;
}

export type PaginateActionTypes = MoveNextPageAction | BackPreviousPageAction;

export interface UpdateCacheIndexAction {
  type: typeof UPDATE_CACHE_INDEX;
  payload: number;
}

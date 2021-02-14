import {
  BACK_PREVIOUS_PAGE,
  FETCH_DATA,
  MOVE_NEXT_PAGE,
  UPDATE_CACHED_PAGES,
  FetchDataAction,
  PaginateActionTypes,
  UpdateCachedPagesAction,
  ShowCardDetailsAction,
  SHOW_CARD_DETAILS,
  EmptyCardDetailsAction,
  EMPTY_CARD_DETAILS,
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

export const updateCachedPages = (): UpdateCachedPagesAction => {
  return {
    type: UPDATE_CACHED_PAGES,
  };
};

export const ShowCardDetails = (): ShowCardDetailsAction => {
  return {
    type: SHOW_CARD_DETAILS,
  };
};

export const EmptyCardDetails = (): EmptyCardDetailsAction => {
  return {
    type: EMPTY_CARD_DETAILS,
  };
};

import {
  BACK_PREVIOUS_PAGE,
  EmptyCardDetailsAction,
  EMPTY_CARD_DETAILS,
  FetchDataAction,
  FETCH_DATA,
  INITIAL_CACHED_PAGES,
  MAX_CACHED_PAGES,
  MOVE_NEXT_PAGE,
  PaginateActionTypes,
  ShowCardDetailsAction,
  SHOW_CARD_DETAILS,
  UpdateCachedPagesAction,
  UPDATE_CACHED_PAGES,
} from "../constants";

interface SystemState {
  currentPage: number;
  totalPage: number;
  totalFetchedPages: number;
  cardDetails: {};
}

const initialState: SystemState = {
  currentPage: 0,
  totalPage: 0,
  totalFetchedPages: 0,
  cardDetails: {},
};

export const applicationReducer = (
  state = initialState,
  action:
    | FetchDataAction
    | PaginateActionTypes
    | UpdateCachedPagesAction
    | ShowCardDetailsAction
    | EmptyCardDetailsAction
) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        currentPage: 1,
        totalPage: action,
        totalFetchedPages: INITIAL_CACHED_PAGES + 1,
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
    case UPDATE_CACHED_PAGES: {
      return {
        ...state,
        totalFetchedPages: state.totalFetchedPages + MAX_CACHED_PAGES,
      };
    }
    case SHOW_CARD_DETAILS: {
      return {
        ...state,
        cardDetails: action,
      };
    }
    case EMPTY_CARD_DETAILS: {
      return {
        ...state,
        cardDetails: {},
      };
    }
    default:
      return state;
  }
};

import {
  BACK_PREVIOUS_PAGE,
  EmptyCardDetailsAction,
  EMPTY_CARD_DETAILS,
  FetchDataAction,
  FETCH_DATA,
  GetTotalCardsAction,
  MAX_CACHED_PAGES,
  MOVE_NEXT_PAGE,
  PaginateActionTypes,
  ShowCardDetailsAction,
  SHOW_CARD_DETAILS,
  TOTAL_BACKEND_CARDS,
  UpdateCachedPagesAction,
  UPDATE_CACHED_PAGES,
} from "../constants";

interface SystemState {
  currentPage: number;
  totalBackendCards: number;
  totalFetchedPages: number;
  cardDetails: {};
  fetchedData: [];
}

const initialState: SystemState = {
  currentPage: 0,
  totalBackendCards: 0,
  totalFetchedPages: 0,
  cardDetails: {},
  fetchedData: [],
};

export const applicationReducer = (
  state = initialState,
  action:
    | FetchDataAction
    | PaginateActionTypes
    | UpdateCachedPagesAction
    | ShowCardDetailsAction
    | EmptyCardDetailsAction
    | GetTotalCardsAction
) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        currentPage: 1,
        fetchedData: action.payload,
      };
    }
    case TOTAL_BACKEND_CARDS: {
      return {
        ...state,
        totalBackendCards: action.payload,
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

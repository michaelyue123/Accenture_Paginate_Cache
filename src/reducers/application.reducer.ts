import {
  BACK_PREVIOUS_PAGE,
  FetchDataAction,
  FETCH_DATA,
  GetInitialFetchedPagesAction,
  GetTotalCardsAction,
  GET_INITIAL_FETCHED_PAGES,
  INITIAL_CACHED_PAGES,
  MAX_CACHED_PAGES,
  MOVE_NEXT_PAGE,
  PaginateActionTypes,
  TOTAL_BACKEND_CARDS,
  UpdateTotalFetchedPagesAction,
  UPDATE_TOTAL_FETCHED_PAGES,
} from "../constants";

interface SystemState {
  currentPage: number;
  totalBackendCards: number;
  totalFetchedPages: number;
  fetchedData: [];
}

const initialState: SystemState = {
  currentPage: 1,
  totalBackendCards: 0,
  totalFetchedPages: 0,
  fetchedData: [],
};

export const applicationReducer = (
  state = initialState,
  action:
    | FetchDataAction
    | GetInitialFetchedPagesAction
    | PaginateActionTypes
    | UpdateTotalFetchedPagesAction
    | GetTotalCardsAction
    
) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        fetchedData: action.payload,
      };
    }
    case TOTAL_BACKEND_CARDS: {
      return {
        ...state,
        totalBackendCards: action.payload,
      };
    }
    case GET_INITIAL_FETCHED_PAGES: {
      return {
        ...state,
        totalFetchedPages: INITIAL_CACHED_PAGES + 1,
      }
    }
    case UPDATE_TOTAL_FETCHED_PAGES: {
      return {
        ...state,
        totalFetchedPages: state.totalFetchedPages + MAX_CACHED_PAGES,
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
    default:
      return state;
  }
};

import * as constants from './constants';
import * as actions from './actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
  menuCollapsed: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.COLLAPSE_MENU:
			return {
        ...state,
        menuCollapsed: !state.menuCollapsed
      };
    case constants.LOADING:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export const createRootReducer = (history) => combineReducers({
  app: rootReducer,
  router: connectRouter(history)
});

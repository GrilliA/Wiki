import { Action } from "../stateModel";
import {
  ADD_ERROR,
  MODAL_CLOSE,
  MODAL_OPEN,
  REMOVE_ERROR,
  SET_LOADER,
  UNSET_LOADER,
} from "./ui.events";
import { UiModel } from "./ui.model";

const uiReducer = (state: UiModel, action: Action): UiModel => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.id]: {
            show: true,
            details: action.payload.details,
          },
        },
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.id]: {
            show: false,
            details: null,
          },
        },
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case REMOVE_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case SET_LOADER: {
      return {
        ...state,
        isLoading: state.loaders.length === 0,
        loaders: [...state.loaders, { id: action.payload }],
      };
    }
    case UNSET_LOADER: {
      return {
        ...state,
        loaders: state.loaders.filter((loader) => loader.id !== action.payload),
        isLoading: state.loaders.length > 1,
      };
    }
    default:
      return state;
  }
};

export default uiReducer;

import immutable from 'seamless-immutable';
import { Type as UiReducerType } from '../actions/uiActions';
  
const INITIAL_STATE = immutable({
    isLoading: false
  });

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.Type) {
        case UiReducerType.UI_START_LOADING:
        return {
            ...state,
            isLoading: true
        }
        case UiReducerType.UI_STOP_LOADING:
        return {
            ...state,
            isLoading: false
        }
        default:
        return state;
    }
}

export default reducer;
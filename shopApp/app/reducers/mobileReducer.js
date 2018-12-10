import immutable from 'seamless-immutable';
import { Type as MobileReducerType } from '../actions/mobileAction';
  
const INITIAL_STATE = immutable({
    mobiles: []
  });
  
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
     case MobileReducerType.SET_MOBILES:
      return {
        ...state,
        mobiles: action.mobiles
      }
      case MobileReducerType.REMOVE_MOBILE:
        return {
          ...state,
          mobiles: state.mobiles.filter(mobile => {
            return mobile.key !== action.key;
          }),
        };
      // case MobileReducerType.SELECT_MOBILE:
      //   return {
      //     ...state,
      //     selectedMobile: state.mobiles.find(mobile => {
      //       return mobile.key === action.mobileKey;
      //     })
      //   };
      // case MobileReducerType.DESELECT_MOBILE:
      //   return {
      //     ...state,
      //     selectedMobile: null
      //   };
      // case MobileReducerType.SET_MOBILE_PROPERTY: {
      //     let mobile = state.mobile.asMutable();
      //     mobile[action.name] = action.value;
      //     return state.merge({ mobile: mobile });
      // }
      default:
        return state;
    }
  };

  export default reducer;
  
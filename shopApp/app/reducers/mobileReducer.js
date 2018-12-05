import immutable from 'seamless-immutable';
import { Type as MobileReducerType } from '../actions/mobileAction';
  
const INITIAL_STATE = immutable({
    mobile: {
      key: '',
      name: '',
      description: '',
      model: ''
    },
    mobiles: [],
    selectedMobile: null
  });
  
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MobileReducerType.ADD_MOBILE:
        return {
          ...state,
          mobiles: state.mobiles.concat({
            key: Math.random(),
            name: action.mobile.name,
            description: action.mobile.description,
            model: action.mobile.model
          })
        };
      case MobileReducerType.DELETE_MOBILE:
        return {
          ...state,
          mobiles: state.mobiles.filter(mobile => {
            return mobile.key !== state.selectedMobile.key;
          }),
          selectedMobile: null
        };
      case MobileReducerType.SELECT_MOBILE:
        return {
          ...state,
          selectedMobile: state.mobiles.find(mobile => {
            return mobile.key === action.mobileKey;
          })
        };
      case MobileReducerType.DESELECT_MOBILE:
        return {
          ...state,
          selectedMobile: null
        };
      case MobileReducerType.SET_MOBILE_PROPERTY: {
          let mobile = state.mobile.asMutable();
          mobile[action.name] = action.value;
          return state.merge({ mobile: mobile });
      }
      default:
        return state;
    }
  };

  export default reducer;
  
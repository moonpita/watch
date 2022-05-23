import { ActionType, Actions } from '../../types/action';
import { State } from '../../types/state';

const inititalState = {
  city: {
    title: 'Amsterdam',
    lat: 40.835292,
    lng: -73.916236,
    zoom: 10,
  },
};

const catalogReducer = (state: State = inititalState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeCity:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default catalogReducer;

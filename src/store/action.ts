import { ActionType, ChangeCityAction } from '../types/action';
import { City } from '../types/main';

export const changeCity = (payload: City): ChangeCityAction => ({
  type: ActionType.changeCity,
  payload,
});



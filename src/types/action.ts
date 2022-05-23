import { City } from '../types/main';

export enum ActionType {
    changeCity = 'main/changeCity',
    addToFavorite = 'main/addToFavorite',
}

export type ChangeCityAction = {
    type: ActionType.changeCity;
    payload: City;
};

export type Actions = ChangeCityAction;

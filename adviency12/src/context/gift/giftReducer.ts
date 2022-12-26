import { Gift } from '../../interfaces/gifts';
import { GiftState } from './';

type GiftActionType =
    | { type: '[Gift] - Add Gift', payload: Gift }
    | { type: '[Gift] - Remove Gift', payload: Gift }
    | { type: '[Gift] - Remove All Gifts' }


export const giftReducer = (state: GiftState, action: GiftActionType): GiftState => {

    switch (action.type) {
        case '[Gift] - Add Gift':
            if(state.giftList.map( g => g.name).includes(action.payload.name)){
                const newGiftList = state.giftList.map( g => {
                    if(g.name === action.payload.name) {
                        return {...g, quantity: Number(g.quantity) + Number(action.payload.quantity)}
                    }
                    return g;
                })
                return {
                    ...state,
                    giftList: newGiftList
                }

            } 
            return {
                ...state,
                giftList: [action.payload, ...state.giftList]
            }

        case '[Gift] - Remove Gift':
            return {
                ...state,
                giftList: state.giftList.filter( g => g.name !== action.payload.name)
            }

        case '[Gift] - Remove All Gifts':
            return {
                ...state,
                giftList: []
            }

        default:
            return state;
    }

}
import { GiftList } from '../../components/GiftList';
import { Gift } from '../../interfaces/gift';
import { GiftState } from './';

type GiftActionType =
   | { type: '[Gift] - Add Gift', payload:Gift }
   | { type: '[Gift] - Remove Gift', payload:Gift }


export const giftReducer = (state: GiftState, action: GiftActionType): GiftState => {

   switch (action.type) {
       case '[Gift] - Add Gift':
          return {
               ...state,
               giftList: [action.payload, ...state.giftList]
           }
        case '[Gift] - Remove Gift':
            return {
                ...state,
                giftList: state.giftList.filter( g => g !== action.payload)
            }
        default:
           return state;
   }

}
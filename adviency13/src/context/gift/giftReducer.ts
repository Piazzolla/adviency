import { GiftState } from './';
import { Gift } from '../../interfaces/gift';

type GiftActionType =
   | { type: '[Gift] - Add Gift', payload: Gift }
   | { type: '[Gift] - Remove Gift', payload: Gift }
   | { type: '[Gift] - Edit Gift', payload: Gift }
   | { type: '[Gift] - Remove All Gifts' }


export const giftReducer = (state: GiftState, action: GiftActionType): GiftState => {

   switch (action.type) {
      case '[Gift] - Add Gift':
         if (state.giftList.map(g => g.name).includes(action.payload.name)) {
            const newList = state.giftList.map(gift =>
               gift.name === action.payload.name ?
                  {
                     ...gift,
                     quantity: Number(gift.quantity) + Number(action.payload.quantity) /*BANANAS!*/
                  }
                  : gift
            );

            return {
               ...state,
               giftList: newList
            }
         }

         return {
            ...state,
            giftList: [action.payload, ...state.giftList]
         }
      case '[Gift] - Edit Gift':
         const newList = state.giftList.map(gift =>
            gift.name === action.payload.name ?
                 action.payload
               : gift
         );

         return {
            ...state,
            giftList: newList
         }

      case '[Gift] - Remove All Gifts':

         return {
            ...state,
            giftList: []
         }
      case '[Gift] - Remove Gift':

         return {
            ...state,
            giftList: state.giftList.filter(gift => gift.name !== action.payload.name)
         }

      default:
         return state;
   }

}
import { GiftsState } from './';
import { Gift } from '../../interfaces/gift';

type GiftsActionType =
   | { type: '[Gifts] - Agregar Item', payload: Gift }


export const giftsReducer = (state: GiftsState, action: GiftsActionType): GiftsState => {

   switch (action.type) {
       case '[Gifts] - Agregar Item':
          return {
               ...state, 
               giftList: [action.payload, ...state.giftList ],
           }

        default:
           return state;
   }

}
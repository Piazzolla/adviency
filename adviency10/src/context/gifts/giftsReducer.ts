import { GiftsState } from './';
import { Gift } from '../../interfaces/gift';

type GiftsActionType =
   | { type: '[Gifts] - Agregar Item', payload: Gift }


export const giftsReducer = (state: GiftsState, action: GiftsActionType): GiftsState => {

   switch (action.type) {
       case '[Gifts] - Agregar Item':
          if(!action.payload.name) {return {...state}}
          if( state.giftList.map( gift => gift.name).includes(action.payload.name)){
            const newGiftList = state.giftList.map( gift => {
                if( gift.name === action.payload.name){
                    gift.quantity = gift.quantity + action.payload.quantity;
                }
                return gift;
            }) 
            return {
                ...state,
                giftList: newGiftList
            }
          }
          return {
               ...state, 
               giftList: [action.payload, ...state.giftList ],
           }

        default:
           return state;
   }

}
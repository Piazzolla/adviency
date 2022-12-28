import { FC, useReducer } from 'react';
import { GiftContext, giftReducer } from './';
import { Gift } from '../../interfaces/gift';
import { initialGiftList } from '../../data/initialData';

export interface GiftState {
   giftList: Gift[];
}

const GIFT_INITIAL_STATE: GiftState = {
   giftList: initialGiftList,
}


type Props = {
   children?: React.ReactNode
  };

export const GiftProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(giftReducer, GIFT_INITIAL_STATE);

   const addGift = (gift:Gift) => {
    dispatch({type: '[Gift] - Add Gift', payload: gift})
   }
   const removeGift = (gift:Gift) => {
    dispatch({type: '[Gift] - Remove Gift', payload: gift})
   }
   const editGift = (gift:Gift) => {
    dispatch({type: '[Gift] - Edit Gift', payload: gift})
   }

   const removeAllGifts = () => {
    dispatch({type: '[Gift] - Remove All Gifts'})
   } 

   return (
       <GiftContext.Provider value={{
           ...state,
           addGift,
           removeAllGifts,
           removeGift,
           editGift
       }}>
           { children }
       </GiftContext.Provider>
   )
}
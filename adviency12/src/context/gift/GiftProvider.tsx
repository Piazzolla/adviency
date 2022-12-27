import { FC, useReducer } from 'react';
import { GiftContext, giftReducer } from './';
import { Gift } from '../../interfaces/gifts';
import { initialGiftList } from '../../data/initialGifts';

export interface GiftState {
   giftList: Gift[];
}

const GIFT_INITIAL_STATE: GiftState = {
   giftList: initialGiftList,
}

const dataFromStorage = JSON.parse(localStorage.getItem('gift-list') || '[]') ;

type Props = {
   children?: React.ReactNode
  };

export const GiftProvider:FC<Props> = ({ children }) => {

   console.log(dataFromStorage);

   const [state, dispatch] = useReducer(giftReducer, dataFromStorage.length? {giftList: dataFromStorage } : GIFT_INITIAL_STATE)

   const addGift = (gift:Gift) => {
      if(!gift.name || !gift.imageUrl || !gift.quantity) return;
    dispatch({type: '[Gift] - Add Gift', payload: gift})
   }
   const removeGift = (gift:Gift) => {
    dispatch({type: '[Gift] - Remove Gift', payload: gift})
   }

   const removeAllGifts = () => {
    dispatch({ type: '[Gift] - Remove All Gifts'});
   }



   return (
       <GiftContext.Provider value={{
           ...state,
           addGift,
           removeGift,
           removeAllGifts
       }}>
           { children }
       </GiftContext.Provider>
   )
}
import { FC, useReducer } from 'react';
import { GiftsContext, giftsReducer } from './';
import { Gift } from '../../interfaces/gift';

export interface GiftsState {
   giftList: Gift[];
}

const initialGiftList: Gift[] = [
    { name: 'bici', quantity: 1 },
    { name: 'libro', quantity: 2 },
    { name: 'playstation', quantity: 1 },
]

const GIFTS_INITIAL_STATE: GiftsState = { giftList: initialGiftList }


type Props = {
   children?: React.ReactNode
  };

export const GiftsProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(giftsReducer, GIFTS_INITIAL_STATE);

   const addGift = (newGift:Gift) => {
        dispatch({type: '[Gifts] - Agregar Item', payload: newGift})

   }

   return (
       <GiftsContext.Provider value={{
           ...state,

           //Methods
           addGift
       }}>
           { children }
       </GiftsContext.Provider>
   )
}
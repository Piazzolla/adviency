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

const retrievedState = localStorage.getItem('gift-list')? JSON.parse(localStorage.getItem('gift-list')!) : null;

type Props = {
   children?: React.ReactNode
  };

export const GiftsProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(giftsReducer, retrievedState? {giftList: retrievedState } : GIFTS_INITIAL_STATE);

   const addGift = (newGift:Gift) => {
        dispatch({type: '[Gifts] - Agregar Item', payload: newGift})
   }

   const deleteGift = (gift:Gift) => {
    dispatch({type: "[Gifts] - Borrar Item", payload: gift})
   }

   const deleteAllGifts = () => {
    dispatch({ type: '[Gifts] - Borrar Todos los Items'})
   }

   return (
       <GiftsContext.Provider value={{
           ...state,

           //Methods
           addGift,
           deleteGift,
           deleteAllGifts
       }}>
           { children }
       </GiftsContext.Provider>
   )
}
import { FC, useReducer } from 'react';
import { GiftContext, giftReducer } from './';
import { Gift } from '../../interfaces/gift';


export interface GiftState {
    giftList: Gift[];
}

const initialGiftList: Gift[] = [
    { name: 'bici', quantity: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1280px-Left_side_of_Flying_Pigeon.jpg' },
    { name: 'libro', quantity: 2, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/L_Block_Still_life_with_books.jpg' },
    { name: 'playstation', quantity: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/PlayStation_Four.png' },
]
const GIFT_INITIAL_STATE: GiftState = {
   giftList: initialGiftList,
}


type Props = {
   children?: React.ReactNode
  };

export const GiftProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(giftReducer, GIFT_INITIAL_STATE)

    const addGift = (gift:Gift) => {
        dispatch({type: '[Gift] - Add Gift', payload: gift});
    }

    const removeGift = (gift:Gift) => {
        dispatch({type: '[Gift] - Remove Gift', payload: gift});
    }

    const removeAllGifts = () => {
        dispatch({type: '[Gift] - Remove All Gifts'});
    }


   return (
       <GiftContext.Provider value={{
           ...state,

           addGift,
           removeGift,
           removeAllGifts,
       }}>
           { children }
       </GiftContext.Provider>
   )
}
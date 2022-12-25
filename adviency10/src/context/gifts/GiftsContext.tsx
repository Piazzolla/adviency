import { createContext } from 'react';
import { Gift } from '../../interfaces/gift';

interface ContextProps {
    giftList: Gift[];
    addGift: (newGift: Gift) => void;
    deleteGift: (newGift: Gift) => void;
    deleteAllGifts: () => void;
}

export const GiftsContext = createContext({} as ContextProps);
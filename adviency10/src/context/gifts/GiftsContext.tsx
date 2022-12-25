import { createContext } from 'react';
import { Gift } from '../../interfaces/gift';

interface ContextProps {
    giftList: Gift[];
    addGift: (newGift: Gift) => void;
}

export const GiftsContext = createContext({} as ContextProps);
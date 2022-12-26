import { createContext } from 'react';
import { Gift } from '../../interfaces/gift';

interface ContextProps {
    giftList: Gift[];
    addGift: (gift: Gift) => void
    removeGift: (gift: Gift) => void
}

export const GiftContext = createContext({} as ContextProps);
import { createContext } from 'react';
import { Gift } from '../../interfaces/gift';

interface ContextProps {
    showAddGiftForm: boolean;
    showEditGiftForm: {show: boolean, gift: Gift};
    setShowAddGiftForm: (value: boolean) => void;
    setShowEditGiftForm: (showElement: boolean, gift: Gift) => void
}

export const UiContext = createContext({} as ContextProps);
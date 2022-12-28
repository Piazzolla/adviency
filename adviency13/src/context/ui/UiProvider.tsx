import { FC, useReducer, useContext } from 'react';
import { UiContext, uiReducer } from './';
import { GiftContext } from '../gift/GiftContext';
import { Gift } from '../../interfaces/gift';

export interface UIState {
   showAddGiftForm: boolean;
   showEditGiftForm: {show: boolean, gift: Gift};
}

const UI_INITIAL_STATE: UIState = {
     showAddGiftForm: false,
     showEditGiftForm: {gift: {} as Gift, show:false},
  }


type Props = {
   children?: React.ReactNode
  };
  
  export const UiProvider:FC<Props> = ({ children }) => {
     
   const { giftList } = useContext(GiftContext);



   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

   const setShowAddGiftForm = (value: boolean) => {
      dispatch({type: '[Ui] - Set Show Add Gift Form', payload: value});
   }
   const setShowEditGiftForm = ( showElement: boolean, gift: Gift) => {
      dispatch({type: '[Ui] - Set Show Edit Gift Form', payload: {showElement, gift}});
   }

   return (
       <UiContext.Provider value={{
           ...state,
           setShowAddGiftForm,
           setShowEditGiftForm
       }}>
           { children }
       </UiContext.Provider>
   )
}
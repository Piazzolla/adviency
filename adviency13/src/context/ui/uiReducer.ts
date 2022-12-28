import { Gift } from '../../interfaces/gift';
import { UIState } from './';

type UiActionType =
   | { type: '[Ui] - Set Show Add Gift Form', payload: boolean }
   | { type: '[Ui] - Set Show Edit Gift Form', payload: {showElement: boolean, gift: Gift} }


export const uiReducer = (state: UIState, action: UiActionType): UIState => {

   switch (action.type) {
       case '[Ui] - Set Show Add Gift Form':
          return {
               ...state,
               showAddGiftForm: action.payload
           }
       case '[Ui] - Set Show Edit Gift Form':
          return {
               ...state,
               showEditGiftForm: {show:action.payload.showElement, gift: action.payload.gift}
           }

        default:
           return state;
   }

}
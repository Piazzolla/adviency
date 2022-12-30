import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Gift } from '../../interfaces/gift';
import { initialGiftList } from '../../data/initialData';


interface GiftState {
    giftList:Gift[] 
}

export const giftSlice = createSlice({
    name: 'gift',
    initialState: {
        giftList: [...initialGiftList]
    },
    reducers: {
        addGift: (state, action: PayloadAction<Gift>) => {
            state.giftList.push(action.payload)
        },
        removeGift: (state, action: PayloadAction<Gift>) => {
            state.giftList = state.giftList.filter(gift => gift.id !== action.payload.id)
        }
    }


});


export const { addGift, removeGift } = giftSlice.actions

export default giftSlice.reducer
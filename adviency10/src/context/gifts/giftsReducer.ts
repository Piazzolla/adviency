import { GiftsState } from './';
import { Gift } from '../../interfaces/gift';

type GiftsActionType =
    | { type: '[Gifts] - Agregar Item', payload: Gift }
    | { type: '[Gifts] - Borrar Item', payload: Gift }
    | { type: '[Gifts] - Borrar Todos los Items' }


export const giftsReducer = (state: GiftsState, action: GiftsActionType): GiftsState => {

    switch (action.type) {
        case '[Gifts] - Agregar Item':
            if (!action.payload.name) { return { ...state } }
            if (state.giftList.map(gift => gift.name).includes(action.payload.name)) {
                const newGiftList = state.giftList.map(gift => {
                    if (gift.name === action.payload.name) {
                        const modifiedGift:Gift = {
                            name: gift.name,
                            quantity: gift.quantity + action.payload.quantity,
                            imageUrl: gift.imageUrl
                        }
                        return modifiedGift;
                    }
                    return gift;
                })
                return {
                    ...state,
                    giftList: newGiftList
                }
            }
            return {
                ...state,
                giftList: [action.payload, ...state.giftList],
            }
        case '[Gifts] - Borrar Item':
            const newGiftList = state.giftList.filter(g => g.name !== action.payload.name)
            return {
                ...state,
                giftList: newGiftList
            }

        case '[Gifts] - Borrar Todos los Items':
            return {
                ...state,
                giftList: []
            }

        default:
            return state;
    }

}
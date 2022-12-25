import { useContext, useState } from 'react';
import { GiftsContext } from '../context/gifts/GiftsContext';
import { useForm } from '../hooks/useForm';
import { GiftListItem } from './GiftListItem';

//const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const range = [...Array(10).keys()];

export const GiftList = () => {

    const { giftList, addGift, deleteAllGifts } = useContext(GiftsContext);
    const { regaloInput, selectValue, onInputChange, onSelectChange } = useForm({ regaloInput: '', selectValue: 1})


    return (
        <>
            <h2>Regalos:</h2>
            <form>
                <input
                    name="regaloInput"
                    value={regaloInput}
                    onChange={(event) => onInputChange(event.target) }
                />
                <select
                    name="selectValue"
                    onChange = { (event) => onSelectChange(event.target) }
                >
                    {
                        range.map(n => <option key={n}>{n+1}</option>)
                    }
                </select>
                <button
                    type='button'
                    onClick={() => addGift({ name: regaloInput, quantity: selectValue })}
                >Agregar
                </button>
            </form>
            {
                giftList.map(gift =>
                    <GiftListItem  key={gift.name} gift={gift} />
                )
            }
            <button
                onClick={ deleteAllGifts }
            >Borrar Todo</button>
        </>
    )
}

import { useContext, useState } from 'react';
import { GiftsContext } from '../context/gifts/GiftsContext';
import { useForm } from '../hooks/useForm';

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const GiftList = () => {

    const { giftList, addGift } = useContext(GiftsContext);
    const { regaloInput, onInputChange } = useForm({ regaloInput: '', selectValue: 1})


    return (
        <>
            <h2>Regalos:</h2>
            <form>
                <input
                    name="regaloInput"
                    value={regaloInput}
                    onChange={(event) => onInputChange(event.target) }
                />
                <select>
                    {
                        range.map(n => <option key={n}>{n}</option>)
                    }
                </select>
                <button
                    type='button'
                    onClick={() => addGift({ name: regaloInput, quantity: 1 })}
                >Agregar
                </button>
            </form>
            {
                giftList.map(gift =>
                    <li key={gift.name}>{gift.name}{gift.quantity}</li>
                )
            }
        </>
    )
}

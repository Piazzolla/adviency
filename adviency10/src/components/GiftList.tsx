import { useContext, useEffect, useState } from 'react';
import { GiftsContext } from '../context/gifts/GiftsContext';
import { useForm } from '../hooks/useForm';
import { GiftListItem } from './GiftListItem';

//const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const range = [...Array(10).keys()];

export const GiftList = () => {

    const { giftList, addGift, deleteAllGifts } = useContext(GiftsContext);
    const { regaloInput, imageUrl, selectValue, onInputChange, onSelectChange } = useForm({ regaloInput: '', selectValue: 1, imageUrl: '' })

    useEffect(() => {
            if(giftList.length > 0) {
                localStorage.setItem('gift-list', JSON.stringify(giftList));
            } 
            else {
                localStorage.removeItem('gift-list');
            }
    }, [giftList])

    return (
        <>
            <h2>Regalos:</h2>
            <form>
                <label>Regalo</label>
                <input
                    name="regaloInput"
                    value={regaloInput}
                    onChange={(event) => onInputChange(event.target)}
                />
                <label>Url de Imagen</label>
                <input
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(event) => onInputChange(event.target)}

                />
                <select
                    name="selectValue"
                    onChange={(event) => onSelectChange(event.target)}
                >
                    {
                        range.map(n => <option key={n}>{n + 1}</option>)
                    }
                </select>
                <button
                    type='button'
                    onClick={() => addGift({ name: regaloInput, quantity: selectValue, imageUrl: imageUrl })}
                >Agregar
                </button>
            </form>
            {
                giftList.map(gift =>
                    <GiftListItem key={gift.name} gift={gift} />
                )
            }
            <button
                onClick={deleteAllGifts}
            >Borrar Todo</button>
        </>
    )
}

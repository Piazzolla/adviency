import { useContext, useState } from 'react';
import { GiftsContext } from '../context/gifts/GiftsContext';



export const GiftList = () => {

    const { giftList, addGift } = useContext( GiftsContext );
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <h2>Regalos:</h2>
            <input 
                onChange={ (event) => setInputValue(event.target.value)}
            />
            <button
                onClick={() => addGift({ name: inputValue, quantity: 1})}
            >Agregar</button>
            {
                giftList.map(gift =>
                    <li>{gift.name}{gift.quantity}</li>
                )
            }
        </>
    )
}

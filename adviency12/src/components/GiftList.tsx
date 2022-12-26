import { useContext, useState } from 'react';
import { GiftListItem } from "./GiftListItem"
import { GiftContext } from '../context/gift/GiftContext';
import { AddGift } from './AddGift';

export const GiftList = () => {

    const { giftList, removeAllGifts } = useContext(GiftContext);
    const [showAddGiftForm, setShowAddGiftForm] = useState(false)

    return (
        <>
            {
                showAddGiftForm? <AddGift setShowAddGiftForm={setShowAddGiftForm}/> : null
            }

            <button
                onClick={() => setShowAddGiftForm(true)}
            >Agregar Regalo</button>
            <h2>Regalos:</h2>
            {
                giftList.map( (gift, index) => {
                    return <GiftListItem key={index} gift={gift}/>
                })
            }
            <button
                onClick={ removeAllGifts }
            >Borrar Todo</button>
        </>
    )
}

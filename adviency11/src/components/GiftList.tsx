import { useContext, useState } from 'react';
import { Gift } from "../interfaces/gift"
import { GiftListItem } from "./GiftListItem"
import { GiftContext } from '../context/gift/GiftContext';
import { AddGiftForm } from './AddGiftForm';

const initialGiftList: Gift[] = [
    { name: 'bici', quantity: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1280px-Left_side_of_Flying_Pigeon.jpg' },
    { name: 'libro', quantity: 2, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/L_Block_Still_life_with_books.jpg' },
    { name: 'playstation', quantity: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/PlayStation_Four.png' },
]

export const GiftList = () => {

    const { giftList } = useContext(GiftContext);
    const [showAddGift, setShowAddGift] = useState(false)

    return (
        <>
                {
                    showAddGift ?
                        (<AddGiftForm setShowAddGift={setShowAddGift} />) :
                        null
                }
                <button
                    onClick={() => setShowAddGift(true)}
                >Agregar Regalo</button>
                <h2>Regalos:</h2>
                {
                    giftList.map(gift =>
                        <GiftListItem key={gift.name} gift={gift} />)
                }


        </>
    )
}

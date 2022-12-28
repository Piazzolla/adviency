import { FC, useContext, useState } from 'react';
import { Gift } from "../interfaces/gift"
import { GiftContext } from '../context/gift/GiftContext';
// import { EditGiftForm } from './AddGiftForm';
import { UiContext } from '../context/ui/UiContext';

type Props = {
    gift: Gift;
}

export const GiftListItem: FC<Props> = ({ gift }) => {

    const { removeGift } = useContext(GiftContext);
    const { setShowEditGiftForm  } = useContext(UiContext);

    return (
        <>
            <li>
                <img
                    className="gift-image"
                    src={gift.imageUrl}
                >
                </img>
                <span>{gift.name}</span>
                <span>{gift.quantity}</span>
                <span>{gift.receiver}</span>
                <button
                    onClick={() => setShowEditGiftForm(true, gift) }
                >e</button>
                <button
                    onClick={() => removeGift(gift)}
                >x</button>
            </li>
        </>
    )
}

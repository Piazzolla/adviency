import { FC, useContext } from 'react';
import { Gift } from "../interfaces/gift"
import { GiftContext } from '../context/gift/GiftContext';

type Props = {
    gift: Gift;
}

export const GiftListItem:FC<Props> = ({gift}) => {

  const { removeGift } = useContext(GiftContext);

  return (
    <li>
      <img
        className="gift-image"
        src={gift.imageUrl}
      ></img>
        {gift.name}
        {gift.quantity}
        <button
          onClick={() => removeGift(gift)}
        >X</button>
    </li>
  )
}

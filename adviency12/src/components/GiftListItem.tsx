import { FC, useContext } from 'react';
import { Gift } from "../interfaces/gifts"
import { GiftContext } from '../context/gift/GiftContext';

type Props = {
    gift:Gift;
}

export const GiftListItem:FC<Props> = ({gift}) => {

    const { removeGift } = useContext(GiftContext);

  return (
    <li>
        <img
            className="gift-image"
            src={gift.imageUrl}
        ></img>
      <span>{gift.name}</span>  
      <span>{gift.quantity}</span>  
      <span>{gift.receiver}</span>  
      <button
        onClick={() => removeGift(gift)}
      >x</button>
    </li>
  )
}

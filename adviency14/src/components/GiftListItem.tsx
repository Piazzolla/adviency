import { Gift } from "../interfaces/gift";
import { removeGift } from '../store/gift/giftSlice'
import { useDispatch, useSelector } from 'react-redux';


interface Props {
    gift: Gift;
}

export const GiftListItem: React.FunctionComponent<Props> = ({ gift }) => {

    const dispatch =  useDispatch();

    const onRemoveItem = (item:Gift) => {
        dispatch(removeGift(item))
    }

    return (
        <>
            <li>
                <img
                    className="gift-image"
                    src={gift.imageUrl}
                />
                <span>
                    {gift.name}
                </span>
                <span>
                    {gift.receiver}
                </span>
                <span>
                    {gift.quantity}
                </span>
                <button
                    onClick={() => onRemoveItem(gift)}
                >x</button>
            </li>
        </>
    )
}

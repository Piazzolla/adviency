// import { initialGiftList } from '../data/initialData';
import { GiftListItem } from './GiftListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


export const GiftList = () => {
    const { giftList } = useSelector((state:RootState) => state.gift)
    return (
        <>
            <h2>Regalos:</h2>
            <ul>
                {giftList.map(gift => <GiftListItem key={gift.id} gift={gift} />)}
            </ul>
        </>
    )
}

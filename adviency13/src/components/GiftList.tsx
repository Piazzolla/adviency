import { useContext, useEffect } from "react"
import { GiftContext } from '../context/gift/GiftContext';
import { GiftListItem } from "./GiftListItem";
import { UiContext } from '../context/ui/UiContext';
import { EditGiftForm } from "./EditGiftForm";

export const GiftList = () => {

    const { giftList } = useContext(GiftContext);
    const { showEditGiftForm } = useContext(UiContext);


    useEffect(() => {
      localStorage.setItem('gift-list13', JSON.stringify(giftList));
    }, [giftList])
    

    return (
        <>
         { showEditGiftForm.show? <EditGiftForm /> : null }
            {
                giftList.map(gift => {
                    return <GiftListItem key={gift.name} gift={ gift }/>
                })
            }
        </>
    )
}

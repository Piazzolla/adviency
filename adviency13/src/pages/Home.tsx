import { GiftList } from "../components/GiftList"
import { useContext } from 'react';
import { GiftContext } from '../context/gift/GiftContext';
import { UiContext } from '../context/ui/UiContext';
import { AddGiftForm } from "../components/AddGiftForm";

export const Home = () => {
  const { removeAllGifts } = useContext(GiftContext);
  const { setShowAddGiftForm, showAddGiftForm } = useContext(UiContext);

  return (
    <>
      {
        showAddGiftForm ? <AddGiftForm /> : null
      }
      <h2>Regalos {showAddGiftForm}</h2>
      <button onClick={() => setShowAddGiftForm(true)}>
        Agregar
      </button>
      <GiftList />
      <button
        onClick={removeAllGifts}
      >Borrar Todo</button>
    </>
  )
}

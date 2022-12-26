import { ClickAwayListener } from "@mui/material"
import { FC, FormEvent, useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { Gift } from "../interfaces/gift";
import { GiftContext } from '../context/gift/GiftContext';

type Props = {
    setShowAddGift: React.Dispatch<React.SetStateAction<boolean>> // me dio paja hacer un contex para ui pero es mejor
}

const range = [...Array(10).keys()].map( k => k+1 );

export const AddGiftForm:FC<Props> = ({setShowAddGift}) => {

    const emptyGift:Gift = { name: '', imageUrl: '', quantity: 1 }
    const { formState, onInputChange, onSelectChange } = useForm(emptyGift);

    const { addGift } = useContext(GiftContext);

    const handleClickAway = () => {
        setShowAddGift(false);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addGift(formState)
    }

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <form 
                    onSubmit={ handleSubmit }
                    style={{ backgroundColor: 'green', padding: '15px'}} className="new-item-form">
                    <h2>AddGiftForm</h2>
                    <label>Nombre</label>
                    <input 
                        name='name'
                        onChange={(event) => onInputChange(event.target)}
                    />
                    <label>Url de Imagen</label>
                    <input 
                        name='imageUrl'
                        onChange={(event) => onInputChange(event.target)}
                    />
                    <select
                        name='quantity'
                        onChange={(event) => onSelectChange(event.target) }
                    >
                        {
                            range.map( opt => <option>{opt}</option>)
                        }
                    </select>
                    <button
                        type="submit"
                    >Agregar</button>

                </form>
            </ClickAwayListener>
        </>
    )
}

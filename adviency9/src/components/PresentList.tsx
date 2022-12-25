import { useState, ChangeEvent } from 'react';
import { PresentListItem } from './PresentListItem';
import { useList } from '../hooks/useList';

const listInit = ['bicicleta', 'zapatillas', 'libro']

export const PresentList = () => {

   
    const { listState, onBorrarTodo, onBorrarItem, onAgregar } = useList(listInit);
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    }

    return (
        <>
            <h2>Regalos: </h2>
            <input 
                onChange={ onInputChange }
            />
            <button
                onClick={() => onAgregar(inputValue)}
            >agregar</button>
            {
                listState.presents.map(p => (
                    <li> <PresentListItem present={p} onBorrarItem={onBorrarItem} /> </li>
                ))
            }
            <button
                onClick={ onBorrarTodo }
            >Borrar Todo</button>
        </>
    )
}

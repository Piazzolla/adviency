import { useState, ChangeEvent } from 'react';
import { PresentListItem } from './PresentListItem';
import { useList } from '../hooks/useList';
import { Present } from '../interfaces/Present';

const listInit: Present[] = [
    { name: 'bicicleta', quantity: 1 },
    { name: 'zapatillas', quantity: 1 },
    { name: 'libro', quantity: 1 }]


const range = [...Array(10).keys()].map(n => n + 1);

export const PresentList = () => {


    const { listState, onBorrarTodo, onBorrarItem, onAgregar } = useList(listInit);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState(range[0])

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <h2>Regalos: </h2>
            <input
                onChange={onInputChange}
            />
            <select
                onChange={(event:ChangeEvent<HTMLSelectElement>) => setSelectValue(Number(event.target.value))}
            >
                {
                    range.map(i => <option key={i}>{i}</option>)
                }
            </select>
            <button
                onClick={() => onAgregar(inputValue, Number(selectValue))}
            >agregar</button>
            {
                listState.map(p => (
                    <li key={p.name}> <PresentListItem present={p} onBorrarItem={onBorrarItem} /> </li>
                ))
            }
            <button
                onClick={onBorrarTodo}
            >Borrar Todo</button>
        </>
    )
}

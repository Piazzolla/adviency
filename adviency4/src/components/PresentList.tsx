import { ChangeEvent, MouseEvent, useState } from 'react';
import { PresentListItem } from './PresentListItem';


export const PresentList = () => {

    const [regalos, setRegalos] = useState(['bicicleta', 'reloj', 'isla en brasil'])

    const [inputValue, setInputValue] = useState('')

    const handleAddClick = () => {
        if(!inputValue) return;
        if(regalos.includes(inputValue)) return;
        setRegalos([inputValue, ...regalos])
    }


    const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleBorrar = (regalo: string) => {
        setRegalos(regalos.filter( r => (r !== regalo)));
    }

    return (
        <div className="presentList">
            <h1>Regalos !</h1>
            <input
                onChange={onInputValueChange}
            />
            <button
                onClick={handleAddClick}
            >Agregar</button>
            <ul>
                {
                    regalos.map( (regalo, idx) =>
                        <PresentListItem itemName={regalo} borrarCallback={ handleBorrar } />
                        // <li key={idx}> {regalo}
                        //     <button
                        //         onClick={ () => onBorrar(regalo)}
                        //     >
                        //         borrar
                        //     </button>
                        // </li>
                    )
                }
            </ul>

        </div>
    )
}

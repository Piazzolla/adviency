import { Regalo } from "../interfaces/Regalo"
import { RegaloListItem } from './RegaloListItem';
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

const regalosInit: Regalo[] = [
    { nombre: 'bicicleta' },
    { nombre: 'puta peonza' },
    { nombre: 'playstation' }
];

export const RegalosList = () => {

    const [regalos, setRegalos] = useState(regalosInit);
    const [inputValue, setInputValue] = useState('');

    const onAgregarRegalo = (event:FormEvent<HTMLFormElement>) => { 
        event.preventDefault();
        if(!inputValue) return;
        if( (regalos.map( regalo => regalo.nombre)).includes(inputValue)) return;
        setRegalos([ { nombre: inputValue }, ...regalos]);
    }

    const onInputChange = ( event:ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value )
    }

    const onBorrar = (regalo:string) => {
        setRegalos(regalos.filter( r => ( r.nombre !== regalo)));

    }

    const onBorrarTodo = () => {
        setRegalos([]);
    }

    return (
        <>
            <h2 className="regalos-list-title"> Regalos: </h2>
            <form onSubmit={onAgregarRegalo}>
                <input className="agregar-regalo-input" onChange={ onInputChange } />
                <button type={"submit"}
                >
                    Agregar
                </button>
            </form>
            <ul className="regalos-list">
                {
                    regalos.map(regalo =>
                        <div  key={regalo.nombre}>
                            <li  className="regalos-list-item-container">
                                <RegaloListItem regalo={regalo} />
                                <button className="regalo-borrar-button" onClick={() =>onBorrar(regalo.nombre)}>borrar</button></li>
                        </div>
                    )
                }
            </ul>
            <button className="borrar-todo-button"  onClick={onBorrarTodo}>Borrar Todo</button>
        </>
    )
}

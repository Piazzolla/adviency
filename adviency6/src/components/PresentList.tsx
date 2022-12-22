import { ChangeEvent, useState } from 'react';

const regalosInit = ['computadora', 'medias', 'libro', 'lamborghini huracan']

export const PresentList = () => {

    const [regalos, setRegalos] = useState(regalosInit);
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event?.target.value)
    }

    const onAgregar = () => {
        if (!inputValue) return;
        if (regalos.includes(inputValue)) return;
        setRegalos([inputValue, ...regalos]);
        setInputValue('');
    }

    const onBorrarItem = (regalo: string) => {
        setRegalos(regalos.filter(r => r !== regalo));
    }

    const onBorrarTodo = () => {
        setRegalos([]);
    }


    return (
        <>
            <h1>Regalos</h1>
            <input
                onChange={onInputChange}
            />
            <button
                onClick={onAgregar}
            >Agregar</button>
            <ul>
                {
                    (regalos.length) ? (

                        regalos.map(regalo =>
                            <>
                                <li key={regalo}>{regalo}
                                    <button onClick={() => onBorrarItem(regalo)}>borrar</button>
                                </li>
                            </>

                        )
                    ) :
                        (
                            <h3>No hay regalos en la lista</h3>
                        )

                }
            </ul>
            <button
                onClick={onBorrarTodo}
            >Borrar Todo
            </button>
        </>
    )
}

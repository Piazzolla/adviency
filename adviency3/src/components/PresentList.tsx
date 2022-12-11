import { Button, TextField } from "@mui/material"
import { ChangeEvent, useState } from 'react';



export const PresentList = () => {


    const [inputValue, setInputValue] = useState('');

    const [regalos, setRegalos] = useState(['bicicleta', 'reloj', 'libro']);


    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value )
    }

    const nuevoRegaloClick = () => {
        setRegalos([ inputValue, ...regalos])
    }

    return (
        <div className="presentListContainer">
            <TextField id="nuevo-textfield" label="Nuevo regalo" variant="outlined"
                onChange={onInputChange}
            />
            <Button sx={{ width: '50%', justifySelf: 'right', marginTop: '0.7em' }}
                variant="contained"
                onClick={ nuevoRegaloClick }
            >
                Agregar
            </Button>
            <ul>
                {
                    regalos.map((regalo, idx) => <li key={idx}>
                        {regalo}
                    </li>)
                }
            </ul>
        </div>
    )
}

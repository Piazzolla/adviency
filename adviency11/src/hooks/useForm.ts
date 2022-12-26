import { useState } from 'react';
import { Gift } from '../interfaces/gift';


export const useForm = (initialForm:Gift) => {

     const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({name, value}:HTMLInputElement | HTMLSelectElement) => {
        setFormState({
            ...formState,
            [ name ] : value
        });
    }

    const onSelectChange = ({name, value}:HTMLSelectElement) => {
        setFormState({
            ...formState,
            [ name ] : Number(value)
        });
    }


    return {
        ...formState,
        formState,

        //Methods
        onInputChange,
        onSelectChange
    };
}
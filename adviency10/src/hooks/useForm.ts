import { useState } from 'react';

interface Target {
    target: {
        name: string;
        value: string;
    }
}

interface FormProp {
     regaloInput: string;
     selectValue: number;
}

export const useForm = (initialForm: FormProp) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({name, value}:HTMLInputElement) => {
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const onSelectChange = ({name, value}:HTMLSelectElement) => {
        setFormState({
            ...formState,
            [ name ] : Number(value)
        })
    }


    return {
        ...formState,
        formState,

        onInputChange,
        onSelectChange
    }

}
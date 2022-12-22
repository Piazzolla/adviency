import { ChangeEvent, FormEvent, useState } from 'react';
import { Present } from '../interfaces/Present';

//const presentsInit = ['bicycle', 'playstation', 'book'];
const presentsInit: Present[] = [
    { quantity: 1, name: 'playstation' },
    { quantity: 1, name: 'book' },
    { quantity: 1, name: 'bicycle' }];

const quantities = [...Array(10).keys()].map(n => n + 1);

export const PresentList = () => {

    const [presents, setPresents] = useState(presentsInit);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState(1);


    const handleAddItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputValue) { return; };
        setPresents([{ quantity: selectValue, name: inputValue }, ...presents]);
    }

    const onDeleteItem = (present: string) => {
        setPresents(presents.filter(p => p.name !== present));
    }

    const onDeleteAll = () => {
        setPresents([]);
    }



    return (
        <div>
            <form onSubmit={handleAddItem}>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <select
                    onChange={ (e) => setSelectValue(Number(e.target.value))}
                >
                    {
                        quantities.map(q => <option value={q}>{q}</option>)
                    }
                </select>
                <button
                    type="submit"
                >Add Present</button>
            </form>
            <h2>Presents: </h2>
            {
                presents.map(present =>
                    <>
                        <li key={present.name}>
                            {present.name}
                            {present.quantity}
                            <button
                                onClick={() => onDeleteItem(present.name)}
                            >Delete</button>
                        </li>
                    </>
                )
            }
            <button
                onClick={onDeleteAll}
            >Delete All</button>
        </div>
    )
}

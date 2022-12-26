import { FC, FormEvent, useContext } from 'react';
import { GiftContext } from '../context/gift/GiftContext';
import { useFormik } from 'formik';

type Props = {
    setShowAddGiftForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const range = [...Array(10).keys()].map(k => k + 1);

export const AddGift: FC<Props> = ({ setShowAddGiftForm }) => {

    const { addGift } = useContext(GiftContext)
    // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     //  addGift()
    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            imageUrl: '',
            quantity: 1
        },
        onSubmit: values => {
            addGift(values);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label>Nombre:
                    <input
                        id='name' name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </label>
                <label>url de la imagen:
                    <input
                        id='imageUrl' name='imageUrl'
                        onChange={formik.handleChange}
                        value={formik.values.imageUrl}
                    />
                </label>
                <label>Cantidad:
                    <select
                        id='quantity' name='quantity'
                        onChange={formik.handleChange}
                        value={formik.values.quantity}
                    >
                        {
                            range.map(n => <option key={n}>{n}</option>)
                        }
                    </select>
                </label>
                <button type="submit">Agregar</button>
            </form>
            <button
                onClick={() => setShowAddGiftForm(false)}
            >cerrar</button>
        </>
    )
}

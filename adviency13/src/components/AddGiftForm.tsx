import { FC, useContext } from 'react';
import { UiContext } from '../context/ui/UiContext';
import { useFormik } from 'formik';
import { GiftContext } from '../context/gift/GiftContext';
import { Gift } from '../interfaces/gift';
import * as Yup from 'yup';

const range = [...Array(10).keys()].map(k => k + 1);

type Props = {
  gift?: Gift;
}

export const AddGiftForm:FC<Props> = () => {

  const { setShowAddGiftForm, setShowEditGiftForm } = useContext(UiContext);
  const { addGift, editGift } = useContext(GiftContext);


  const formik = useFormik({
    initialValues: {
      name: '',
      imageUrl: '',
      receiver: '',
      quantity: 1
    } ,
    validationSchema: Yup.object({
      name: Yup.string().label('Regalo').required('Este campo es requerido'),
      receiver: Yup.string().label('Destinatario').required('Este campo es requerido')
    }),
    onSubmit: (values: Gift) => {

        addGift(values);
    },
  });


  return (
    <>
    <h2>Agregar Regalo</h2>
      <form onSubmit={formik.handleSubmit}>
        <label >
          Regalo:
          <input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={` ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
          />
          {formik.touched.name && formik.errors.name && (
            <span className='text-red-400'>{formik.errors.name}</span>
          )}
        </label>
        <label>
          Destinatario:
          <input
            name='receiver'
            value={formik.values.receiver}
            onChange={formik.handleChange}
            className={` ${formik.touched.receiver && formik.errors.receiver ? 'border-red-400' : 'border-gray-300'}`}
          />
          {formik.touched.receiver && formik.errors.receiver && (
            <span className='text-red-400'>{formik.errors.receiver}</span>
          )}
        </label>
        <label>
          Url de imagen:
          <input
            name='imageUrl'
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
          />
        </label>
        <select
          name='quantity'
          value={formik.values.quantity}
          onChange={formik.handleChange}
        >
          {
            range.map(n => <option key={n}>{n}</option>)
          }
        </select>
        <button
          type="submit"
        >Agregar</button>

      </form>
      <button
        onClick={() => setShowAddGiftForm(false)}
      >
        Cerrar
      </button>
    </>
  )
}

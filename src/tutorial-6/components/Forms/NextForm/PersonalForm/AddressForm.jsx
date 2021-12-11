import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import styles from './style.module.scss';

const textFieldStyle = {
  margin: '5px 15px !important',
};

const schema = yup.object().shape({
  city: yup.string().required('Укажите город'),
  street: yup.string().required('Укажите улицу'),
  appartment: yup.string().required('Укажите номер квартиры')
});

export default function AddressForm({ nextStep, setFormValues }) {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      city: '',
      street: '',
      appartment: ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormValues(prev => {
      return {...prev, ...data}
    });
    nextStep('/result');
  };

  return (
    <>
      <div>
        <TextField
          name="city"
          label="Город"
          {...register('city')}
          helperText={
            formState.errors.city && formState.errors.city.message
          }
          error={!!formState.errors.city}
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="street"
          label="Улица"
          {...register('street')}
          helperText={
            formState.errors.street && formState.errors.street.message
          }
          error={!!formState.errors.street}
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="appartment"
          label="Дом"
          {...register('appartment')}
          helperText={
            formState.errors.appartment && formState.errors.appartment.message
          }
          error={!!formState.errors.appartment}
          fullWidth
          sx={textFieldStyle}
        />
      </div>
      <div className={styles.row}>
      <Button
          onClick={() => reset()}
          variant="contained"
          color="error"
          sx={textFieldStyle}
        >
          Очистить
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={textFieldStyle}
          onClick={handleSubmit(onSubmit)}
        >
          Зарегистрироваться
        </Button>
      </div>
    </>
  )
}
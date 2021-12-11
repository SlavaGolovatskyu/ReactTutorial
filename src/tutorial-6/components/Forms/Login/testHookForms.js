import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import styles from './style.module.scss';

const textFieldStyle = {
  margin: '0 15px !important',
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Это обьязательно поле!')
    .min(2, 'Слишком короткое имя'),
  lastName: yup
    .string()
    .required('Это обьязательно поле!')
    .min(3, 'Слишком короткая фамилия'),
  email: yup
    .string()
    .required('Это обьязательно поле!')
    .email('Неверная почта'),
  password: yup.string().required('Это обьязательно поле!').min(6).max(20),
});

export default function RegistrationForm() {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <TextField
          name="firstName"
          label="Имя"
          {...register('firstName')}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register('lastName')}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          fullWidth
          sx={textFieldStyle}
        />
      </div>
      <div className={styles.row}>
        <TextField
          name="email"
          label="Email"
          {...register('email')}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="password"
          label="Пароль"
          type="password"
          {...register('password')}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          fullWidth
          sx={textFieldStyle}
        />
      </div>
      <div className={styles.row}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={textFieldStyle}
        >
          Зарегистрироваться
        </Button>
        <Button
          onClick={() => reset()}
          variant="contained"
          color="secondary"
          sx={textFieldStyle}
        >
          Очистить
        </Button>
      </div>
    </form>
  );
}

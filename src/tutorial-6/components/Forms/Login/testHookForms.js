import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import styles from './style.module.scss';

const textFieldStyle = {
  margin: '0 15px !important',
};

export default function RegistrationForm() {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
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
          {...register('firstName', {
            required: 'Это обьязательное поле!',
          })}
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
          {...register('lastName', {
            required: 'Это обьязательное поле!',
          })}
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
          {...register('email', {
            required: 'Это обьязательное поле!',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="password"
          label="Пароль"
          type="password"
          {...register('password', {
            required: 'Это обьязательное поле!',
            minLength: 6,
            maxLength: 20,
          })}
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

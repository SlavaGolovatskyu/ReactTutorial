import React from 'react';
import { TextField, Button } from '@mui/material';
import styles from './style.module.scss';

const textFieldStyle = {
  margin: '0 15px !important',
};

export default function RegistrationForm() {
  const [fields, setFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleClickClear = () => {
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const handleClickRegister = () => {
    if (!fields.email.includes('@')) {
      alert('Почта неверная');
      return;
    }
    if (fields.firstName.length < 3 || fields.lastName.length < 3) {
      alert('Имя или фамилия указаны неверно');
      return;
    }
    if (fields.password.length < 6) {
      alert('Пароль должен быть больше 6 символов');
      return;
    }

    handleClickClear();
  };

  const isValid =
    !!fields.firstName &&
    !!fields.lastName &&
    !!fields.email &&
    !!fields.password;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.row}>
        <TextField
          name="firstName"
          onChange={handleChangeInput}
          value={fields.firstName}
          label="Имя"
          type="text"
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="lastName"
          onChange={handleChangeInput}
          value={fields.lastName}
          label="Фамилия"
          type="text"
          fullWidth
          sx={textFieldStyle}
        />
      </div>
      <div className={styles.row}>
        <TextField
          name="email"
          onChange={handleChangeInput}
          value={fields.email}
          label="Email"
          type="email"
          fullWidth
          sx={textFieldStyle}
        />
        <TextField
          name="password"
          onChange={handleChangeInput}
          value={fields.password}
          label="Пароль"
          type="password"
          fullWidth
          sx={textFieldStyle}
        />
      </div>
      <div className={styles.row}>
        <Button
          onClick={handleClickRegister}
          disabled={!isValid}
          variant="contained"
          color="primary"
          sx={textFieldStyle}
        >
          Зарегистрироваться
        </Button>
        <Button
          onClick={handleClickClear}
          variant="contained"
          color="secondary"
          sx={textFieldStyle}
        >
          Очистить
        </Button>
      </div>
    </>
  );
}

import React from 'react';
import './style.css';

const Form = () => {
  let email, password;

  const handleChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'email') {
      email = value;
    } else if (name === 'password') {
      password = value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim().length || !password.trim().length) {
      alert('Заполните все поля.');
    } else {
      console.log({ email, password });
      event.target.reset();
    }
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-Mail"
          onChange={handleChangeData}
          name="email"
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={handleChangeData}
          name="password"
        />
        <input type="submit" value="Войти" />
      </form>
    </div>
  );
};

export default Form;

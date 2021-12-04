import React from 'react';
import './style.css';

const Form = () => {
  const handleChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'email') {
      let email = value;
    } else {
      let password = value;
    }
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    if (!email.length || !password.length) {
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

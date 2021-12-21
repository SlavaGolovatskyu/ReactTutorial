import React from 'react';
import axios from 'axios';
import styles from '../App.module.scss';

export const FindUser = ({ setUser }) => {
  const [isSearchBtnActive, setIsSearchBtnActive] = React.useState(false);

  const findUser = async (event) => {
    event.preventDefault();

    const { value } = event.target.username;
    setIsSearchBtnActive((prev) => !prev);

    const url = `https://api.github.com/users/${value}`;

    try {
      let response = await axios.get(url);

      if (response.status === 200) {
        setUser(response.data);
      } else {
        throw new Error('Не удалось получить данные');
      }
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setUser(404);
      } else {
        alert(e);
      }
    }

    setIsSearchBtnActive((prev) => !prev);
  };

  return (
    <form onSubmit={findUser} className={styles.AppForm}>
      <input
        name="username"
        placeholder="Укажите GitHub-аккаунт"
        className={styles.seacrh}
      />
      <button disabled={isSearchBtnActive} className={styles.btn}>
        Найти
      </button>
    </form>
  );
};

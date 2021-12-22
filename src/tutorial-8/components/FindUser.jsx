import React from 'react';
import axios from 'axios';
import styles from '../App.module.scss';

export const FindUser = ({ setUserData }) => {
  const [isSearchBtnActive, setIsSearchBtnActive] = React.useState(false);

  const findUser = async (event) => {
    event.preventDefault();

    const { value } = event.target.username;
    setIsSearchBtnActive(true);

    const url = `https://api.github.com/users/${value}`;

    try {
      const response = await axios.get(url);
      const { data } = response;
      setUserData(data);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setUserData(404);
      } else {
        alert(e);
      }
    }

    setIsSearchBtnActive(false);
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

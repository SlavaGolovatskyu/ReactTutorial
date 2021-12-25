import React from 'react';
import axios from 'axios';
import styles from '../App.module.scss';

export const FindUser = ({ setUserData }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const findUser = async (event) => {
    const { value } = event.target.username;
    const url = `https://api.github.com/users/${value}`;
    setIsLoading(true);

    event.preventDefault();

    try {
      const { data } = await axios.get(url);
      setUserData({ ...data, notFound: false });
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setUserData({ notFound: true });
      } else {
        alert(e);
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={findUser} className={styles.AppForm}>
      <input
        name="username"
        placeholder="Укажите GitHub-аккаунт"
        className={styles.seacrh}
      />
      <button disabled={isLoading} className={styles.btn}>
        Найти
      </button>
    </form>
  );
};

import React from 'react';
import { FindUser } from './components/FindUser';
import { UserBlock } from './components/UserBlock';
import styles from './App.module.scss';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);

  const setUserData = (data) => {
    setUser(data);
  };

  const setDataNotFound = (isNotFound) => {
    setNotFound(isNotFound);
  };

  return (
    <div className={styles.App}>
      <FindUser setUserData={setUserData} notFound={setDataNotFound} />
      {user && <UserBlock user={user} />}
      {notFound && <h2>Человек не найден</h2>}
    </div>
  );
};

export default App;

import React from 'react';
import { FindUser } from './components/FindUser';
import { UserBlock } from './components/UserBlock';
import styles from './App.module.scss';

const App = () => {
  const [user, setUser] = React.useState({ notFound: false });

  const setUserData = (data) => {
    setUser(data);
  };

  return (
    <div className={styles.App}>
      <FindUser setUserData={setUserData} />
      {user.id && <UserBlock user={user} />}
      {user.notFound && <h2>Человек не найден</h2>}
    </div>
  );
};

export default App;

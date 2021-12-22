import React from 'react';
import { FindUser } from './components/FindUser';
import { UserBlock } from './components/UserBlock';
import styles from './App.module.scss';

const App = () => {
  const [user, setUser] = React.useState('');

  const setUserData = (data) => {
    setUser(data);
  };

  return (
    <div className={styles.App}>
      <FindUser setUserData={setUserData} />
      {user && <UserBlock user={user} />}
    </div>
  );
};

export default App;

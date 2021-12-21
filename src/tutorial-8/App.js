import React from 'react';
import { FindUser } from './components/FindUser';
import { UserBlock } from './components/UserBlock';
import styles from './App.module.scss';

const App = () => {
  const [user, setUser] = React.useState('');

  return (
    <div className={styles.App}>
      <FindUser setUser={setUser} />
      {user ? <UserBlock user={user} /> : null}
    </div>
  );
};

export default App;

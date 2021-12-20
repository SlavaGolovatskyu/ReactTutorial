import React from 'react';

export default function App() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      let response = await fetch(
        'https://61c0b4e833f24c00178235b1.mockapi.io/users'
      );
      if (!response.ok) throw new Error(response.statusText);
      await response.json().then((result) => {
        setUsers(result);
      });
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Найти людей</button>
    </div>
  );
}

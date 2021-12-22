import styles from '../App.module.scss';

export const UserBlock = ({ user }) => {
  if (user === 404) {
    return <h2>Человек не найден</h2>;
  }

  return (
    <div className={styles.UserBlock}>
      <div className={styles.MainInfo}>
        <div className={styles.UserAvatar}>
          <img
            src={user.avatar_url}
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
            alt="Здесь должна была быть аватарка"
          />
        </div>
        <div className={styles.Column}>
          <h2 className={styles.UserName}>{user.name}</h2>
          <h3 className={styles.UserTag}>@{user.login}</h3>
          <p className={styles.BIO}>{user.bio}</p>
        </div>
      </div>
      <div className={styles.stats}>
        <div>
          <h6>Публичных репозиториев</h6>
          <h5>{user.public_repos}</h5>
        </div>
        <div>
          <h6>Подписчиков</h6>
          <h5>{user.followers}</h5>
        </div>
        <div>
          <h6>Подписок</h6>
          <h5>{user.following}</h5>
        </div>
      </div>
      <ul className={styles.d_flex}>
        {user.location && (
          <li>
            <span className={styles.location}>{user.location}</span>
          </li>
        )}
        {user.blog && (
          <li className={styles.blog}>
            <a href={user.blog}>{user.blog}</a>
          </li>
        )}
      </ul>
    </div>
  );
};

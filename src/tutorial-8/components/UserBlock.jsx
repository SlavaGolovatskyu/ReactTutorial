import styles from '../App.module.scss';

const InfoAboutUser = ({ userinfo }) => {
  return (
    <>
      <div className={styles.MainInfo}>
        <div className={styles.UserAvatar}>
          <img
            src={userinfo.avatar_url}
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
            alt="Здесь должна была быть аватарка"
          />
        </div>
        <div className={styles.Column}>
          <h2 className={styles.UserName}>{userinfo.name}</h2>
          <h3 className={styles.UserTag}>@{userinfo.login}</h3>
          <p className={styles.BIO}>{userinfo.bio}</p>
        </div>
      </div>
      <div className={styles.stats}>
        <div>
          <h6>Публичных репозиториев</h6>
          <h5>{userinfo.public_repos}</h5>
        </div>
        <div>
          <h6>Подписчиков</h6>
          <h5>{userinfo.followers}</h5>
        </div>
        <div>
          <h6>Подписок</h6>
          <h5>{userinfo.following}</h5>
        </div>
      </div>
      <ul className={styles.d_flex}>
        {userinfo.location && (
          <li>
            <span className={styles.location}>{userinfo.location}</span>
          </li>
        )}
        {userinfo.blog && (
          <li className={styles.blog}>
            <a href={userinfo.blog}>{userinfo.blog}</a>
          </li>
        )}
      </ul>
    </>
  );
};

export const UserBlock = ({ user }) => {
  if (user === 404) {
    return <h2>Человек не найден</h2>;
  }

  return (
    <div className={styles.UserBlock}>
      <InfoAboutUser userinfo={user} />
    </div>
  );
};

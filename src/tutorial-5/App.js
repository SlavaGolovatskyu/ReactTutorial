import React, { useEffect } from 'react';
import Comments from './components/Comments';
import FeedBack from './components/FeedBack';
import styles from './index.module.scss';

function App() {
  const [comments, setComments] = React.useState([]);

  const addComment = (comment) => {
    setComments([comment, ...comments]);
  };

  const deleteComment = (userId) => {
    let new_comments = comments.filter((user) => user.id !== userId);
    setComments(new_comments);
  };

  useEffect(() => {
    let coms = JSON.parse(localStorage.getItem('comments'));
    if (coms.length) setComments(coms);
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className={styles.block}>
      {!comments.length ? null : (
        <Comments comments={comments} deleteCommentHandler={deleteComment} />
      )}
      <FeedBack addCommentHandler={addComment} />
    </div>
  );
}

export default App;

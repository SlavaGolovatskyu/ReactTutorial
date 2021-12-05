import React from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './index.module.scss';

const style = {
  width: '90%',
  margin: '0 auto',
  padding: '5px 0 15px 0',
};

export default function FeedBack({ addCommentHandler }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let text = event.target.comment.value;

    if (!name.trim().length || !email.trim().length || !text.trim().length) {
      alert('Введите все данный.');
    } else {
      let dtFormat = new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });

      let new_comment = {
        id: nanoid(),
        fullName: name,
        email: email,
        text: text,
        createdAt: dtFormat.format(new Date()),
      };
      addCommentHandler(new_comment);
      event.target.reset();
    }
  };

  return (
    <div className={styles.block}>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <h2>Feedback</h2>
        <TextField
          id="outlined-basic_1"
          label="Name"
          variant="outlined"
          name="name"
          required
          sx={style}
        />
        <TextField
          id="outlined-basic_2"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          sx={style}
        />
        <TextField
          id="outlined-textarea"
          label="Your comment"
          placeholder="Some text..."
          multiline
          name="comment"
          required
          sx={style}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ margin: '0 auto', width: '90%', marginBottom: '10px' }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

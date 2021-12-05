import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './index.module.scss';

export default function Comments({ comments, deleteCommentHandler }) {
  const toLocalTimeoptions = {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const createdAtToLocalTime = (user) => {
    let date = user.createdAt.toLocaleDateString('ru-RU', toLocalTimeoptions);
    return date;
  };

  return (
    <div className={styles.block}>
      <h2>Comments: </h2>
      {comments.map((user) => (
        <>
          <List
            sx={{
              width: '100%',
              maxWidth: 400,
              bgcolor: 'background.paper',
            }}
            key={user.id}
          >
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <AccountCircleIcon sx={{ width: 40, height: 60 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <strong>
                    {user.fullName} - {user.createdAt}
                  </strong>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.text}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <Button
            onClick={() => deleteCommentHandler(user.id)}
            size="small"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </>
      ))}
    </div>
  );
}

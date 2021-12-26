import React from 'react';
import { reducer } from './Reducer';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

function App() {
  const [state, dispatch] = React.useReducer(reducer, []);

  const addTask = (text, isComplete) => {
    if (!text.trim().length) {
      alert('Введите название задачи.');
    } else {
      dispatch({
        type: 'ADD_TASK',
        payload: { text: text, complete: isComplete },
      });
    }
  };

  const removeTask = (id) => {
    if (window.confirm('Вы действительно хотите удалить задание? ')) {
      dispatch({
        type: 'REMOVE_TASK',
        payload: id,
      });
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={addTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((obj) => {
            return (
              <Item
                key={obj.id}
                text={obj.name}
                completed={obj.complete}
                removeTask={removeTask}
                id={obj.id}
              />
            );
          })}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;

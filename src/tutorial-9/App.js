import React from 'react';
import { reducer } from './Reducer';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

function App() {
  const [state, dispatch] = React.useReducer(reducer, []);
  const [allTasksComplete, setAllTasksComplete] = React.useState(false);
  const [currentChoiceTasks, setCurrentChoiceTasks] = React.useState(0);

  const tasks = state.filter((obj) => {
    if (currentChoiceTasks === 2 && obj.complete) {
      return obj;
    } else if (currentChoiceTasks === 1 && !obj.complete) {
      return obj;
    } else if (currentChoiceTasks === 0) {
      return true;
    }
    return false;
  });

  const addTask = (text, isComplete) => {
    if (!text.trim()) {
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

  const onClickDeleteAll = () => {
    dispatch({
      type: 'REMOVE_ALL_TASKS',
    });
  };

  const onClickChangeComplete = () => {
    const isAllComplete = state.every((obj) => obj.complete);
    const complete = isAllComplete ? false : allTasksComplete ? false : true;

    dispatch({
      type: 'CHANGE_COMPLETE',
      payload: complete,
    });

    setAllTasksComplete(complete);
  };

  const toggleChecked = (id) => {
    dispatch({
      type: 'TOGGLE_CHECKED',
      payload: id,
    });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={addTask} />
        <Divider />
        <Tabs value={currentChoiceTasks}>
          <Tab label="Все" onClick={() => setCurrentChoiceTasks(0)} />
          <Tab label="Активные" onClick={() => setCurrentChoiceTasks(1)} />
          <Tab label="Завершённые" onClick={() => setCurrentChoiceTasks(2)} />
        </Tabs>
        <Divider />
        <List>
          {tasks.map((obj) => {
            return (
              <Item
                key={obj.id}
                text={obj.name}
                completed={obj.complete}
                removeTask={() => removeTask(obj.id)}
                toggleCheckbox={() => toggleChecked(obj.id)}
              />
            );
          })}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={onClickChangeComplete}>
            {allTasksComplete ? 'Снять отметки' : 'Отметить все'}
          </Button>
          <Button onClick={onClickDeleteAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;

import React from 'react';
import { reducer } from './Reducer';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    taskName: '',
    taskComplete: false,
    tasks: [],
  });

  const onChangeInput = (e) => {
    dispatch({
      type: 'ON_CHANGE_INPUT',
      payload: e.target.value,
    });
  };

  const onChangeCheckbox = () => {
    dispatch({
      type: 'TASK_COMPLETE',
      payload: !state.taskComplete,
    });
  };

  const addTask = () => {
    if (!state.taskName) {
      alert('Введите название задачи.');
    } else {
      dispatch({
        type: 'ADD_TASK',
        payload: { taskName: state.taskName, taskComplete: state.taskComplete },
      });
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField
          onChangeInput={onChangeInput}
          onChangeCheckBox={onChangeCheckbox}
          inputValue={state.taskName}
          checkBoxValue={state.taskComplete}
          addTask={addTask}
        />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.tasks.map((obj) => {
            return (
              <Item
                key={obj.id}
                text={obj.taskName}
                completed={obj.taskComplete}
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

import React from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({ addTask }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const onClickAdd = () => {
    addTask(inputValue, checked);
    setInputValue('');
    setChecked(false);
  };

  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        checked={checked}
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button onClick={onClickAdd}>
        <AddIcon />
      </Button>
    </div>
  );
};

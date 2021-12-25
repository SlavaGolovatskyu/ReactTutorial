import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({
  onChangeInput,
  onChangeCheckBox,
  inputValue,
  checkBoxValue,
  addTask,
}) => {
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        onChange={onChangeCheckBox}
        checked={checkBoxValue}
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        onChange={onChangeInput}
        value={inputValue}
        required
      />
      <Button onClick={addTask}>
        <AddIcon />
      </Button>
    </div>
  );
};

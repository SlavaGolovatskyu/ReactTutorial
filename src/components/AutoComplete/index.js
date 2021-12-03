import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoComplete = () => {
  const [movie, setMovie] = React.useState('');

  const handleOnChange = (event, value) => {
    setMovie(value.label);
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        onChange={handleOnChange}
        sx={{ width: 500 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <TextField label={movie} />
    </>
  );
};

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];

export default AutoComplete;

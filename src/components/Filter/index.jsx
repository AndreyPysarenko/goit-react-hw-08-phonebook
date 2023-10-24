import { useDispatch } from 'react-redux';
import { changeFilter } from 'store/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const filterValue = target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <>
      <TextField
        onChange={onChange}
        id="outlined-basic"
        type="text"
        label="Find contacts by name"
        name="filter"
        size="small"
        required
      />
    </>
  );
};

export default Filter;

import { useDispatch } from 'react-redux';
import { ContainerFilterStyled, InputFilterStyled } from './filter.styled';
import { changeFilter } from 'store/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const filterValue = target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <ContainerFilterStyled>
      <label>Find contacts by name</label>
      <InputFilterStyled name="filter" type="text" onChange={onChange} />
    </ContainerFilterStyled>
  );
};

export default Filter;

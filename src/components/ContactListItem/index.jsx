import { ListItemStyled, ListItemTextStyled } from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';
import { Button } from '@mui/material';

const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ListItemStyled>
        <ListItemTextStyled>
          {name}: {number}
        </ListItemTextStyled>

        <Button
          variant="contained"
          size="medium"
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </ListItemStyled>
    </>
  );
};

export default ContactListItem;

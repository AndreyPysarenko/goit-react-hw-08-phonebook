import { Button } from 'components/App.styled';
import { ListItemStyled, ListItemTextStyled } from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';

const ContactListItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ListItemStyled>
        <ListItemTextStyled>
          {name}: {phone}
        </ListItemTextStyled>

        <Button type="button" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </ListItemStyled>
    </>
  );
};

export default ContactListItem;

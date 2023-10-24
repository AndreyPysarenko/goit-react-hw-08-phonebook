import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selector';
import { addContact } from 'store/operations';
import { Box, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const findContact = name => {
    const normalizedNewContactName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedNewContactName
    );
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    findContact(name)
      ? toast.warn('This contact is already added!')
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Box
      onSubmit={handleFormSubmit}
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        size="small"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        id="outlined-basic"
        label="Number"
        name="number"
        size="small"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button variant="contained" size="medium" type="submit">
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;

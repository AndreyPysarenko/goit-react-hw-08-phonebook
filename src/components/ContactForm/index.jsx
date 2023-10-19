import { Button } from 'components/App.styled';
import {
  ContactFromStyled,
  InputContactFromStyled,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selector';
import { addContact } from 'store/operations';

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
    const phone = form.elements.phone.value;
    findContact(name)
      ? alert('This contact is already in contacts')
      : dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <ContactFromStyled onSubmit={handleFormSubmit}>
      <label>Name</label>
      <InputContactFromStyled
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label>Number</label>
      <InputContactFromStyled
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </ContactFromStyled>
  );
};

export default ContactForm;

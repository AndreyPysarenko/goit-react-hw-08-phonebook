import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/operations';
import Loader from './Loader';
import { selectContacts } from 'store/selector';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (<Filter />) : (<p>Your Phone book is empty!</p>)}
        {contacts.length > 0 && <ContactList />}
      </Container>
    </>
  );
};

export default App;

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selector';
import { Container } from './Contacts.styled';
import { fetchContacts } from 'store/operations';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <h2>Your contacts:</h2>

      {contacts &&
        (contacts.length === 0 ? (
          <p>There are no contacts in the list</p>
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        ))}
    </Container>
  );
};

export default Contacts;

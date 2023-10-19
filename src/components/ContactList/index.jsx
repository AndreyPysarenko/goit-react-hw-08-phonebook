import ContactListItem from 'components/ContactListItem';
import { ListStyled } from './contactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ListStyled>
        {visibleContacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
      </ListStyled>
    </>
  );
};

export default ContactList;

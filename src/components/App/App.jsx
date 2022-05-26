import Title from '../Title';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Message from '../Message';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { getItems, getFilterContacts } from 'redux/ContactSlice';
import { Wrapper, Section } from './App.styled';

export function App() {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilterContacts);

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContact();
  console.log(filteredContacts);
  return (
    <Wrapper>
      <Section>
        <Title text={'Phonebook'} />
        <ContactForm />
      </Section>
      <Section>
        <Title text={'Contacts'} />
        <Filter />
        {filteredContacts.length === 0 ? (
          <Message text={'Oooops, the contact list is empty ¯_(ツ) _/¯'} />
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </Section>
    </Wrapper>
  );
}

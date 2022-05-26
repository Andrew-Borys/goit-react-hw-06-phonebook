import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;

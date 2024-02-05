import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { Item, List } from './ContactList.styled';
import Notification from 'components/Notification';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return <Notification message="No contacts" />;

  return (
    <List>
      {contacts.map(({ id, ...rest }) => (
        <Item key={id}>
          <ContactItem
            {...rest}
            onClick={() => {
              onDelete(id);
            }}
          />
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};

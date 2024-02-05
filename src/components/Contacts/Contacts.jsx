import PropTypes from 'prop-types';
import ContactList from 'components/ContactList';

const Contacts = ({ children, ...rest }) => {
  return (
    <div>
      {children}
      <ContactList {...rest} />
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  children: PropTypes.node,
};

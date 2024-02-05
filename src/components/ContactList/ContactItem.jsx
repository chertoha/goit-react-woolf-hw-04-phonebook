import PropTypes from 'prop-types';
import { CardWrapper, Delete, Meta, Name, Tel } from './ContactList.styled';

const ContactItem = ({ name, tel, onClick }) => {
  return (
    <CardWrapper>
      <Meta>
        <Name>{name}</Name>
        <Tel>{tel}</Tel>
      </Meta>

      <Delete type="button" onClick={onClick}>
        Delete
      </Delete>
    </CardWrapper>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

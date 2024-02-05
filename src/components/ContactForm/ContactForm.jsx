import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
  Field,
  FieldWrapper,
  Form,
  Label,
  LabelValue,
  Submit,
} from './ContactForm.styled';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    addContact({ id: nanoid(4), name, tel });
    setName('');
    setTel('');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FieldWrapper>
        <Label>
          <LabelValue>Name</LabelValue>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </Label>

        <Label>
          <LabelValue> Phone Number</LabelValue>
          <Field
            type="tel"
            name="tel"
            pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={tel}
            onChange={e => {
              setTel(e.target.value);
            }}
          />
        </Label>
      </FieldWrapper>

      <Submit type="submit">Add contact</Submit>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

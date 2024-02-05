import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  Field,
  FieldWrapper,
  Form,
  Label,
  LabelValue,
  Submit,
} from './ContactForm.styled';

const initialState = {
  name: '',
  tel: '',
};

class ContactForm extends Component {
  state = initialState;

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const { addContact } = this.props;

    addContact({ id: nanoid(4), ...this.state });
    this.setState(initialState);
  };

  render() {
    const { name, tel } = this.state;
    return (
      <Form onSubmit={this.onSubmitHandler}>
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
              onChange={this.onChangeHandler}
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
              onChange={this.onChangeHandler}
            />
          </Label>
        </FieldWrapper>

        <Submit type="submit">Add contact</Submit>
      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import Search from 'components/Search';
import Section from 'components/Section';
import { filterList } from 'utils/filterList';
import { MainHeading } from './App.styled';
import { useEffect, useState } from 'react';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';

const STORAGE_KEY = 'contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const onDeleteContactHandler = contactId => {
    setContacts(prevState => [
      ...prevState.filter(({ id }) => id !== contactId),
    ]);
  };

  const filteredContacts = filterList('name', contacts, filter);

  return (
    <div>
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <Section>
          <ContactForm addContact={addContact} />
        </Section>
      </Container>

      <Container>
        <Section title="Contacts">
          {contacts.length !== 0 && (
            <Search
              value={filter}
              handler={e => {
                setFilter(e.target.value);
              }}
            />
          )}

          {contacts.length !== 0 ? (
            <ContactList
              contacts={filteredContacts}
              onDelete={onDeleteContactHandler}
            />
          ) : (
            <Notification message="No contacts" />
          )}
        </Section>
      </Container>
    </div>
  );
};

export default App;

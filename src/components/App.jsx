import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { getContacts, getFilter } from 'redux/contactsSelectors';

const App = () => {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // console.log(contacts.items);
  

  // const filterContacts = () => {
  //   if (filter.query === '') return contacts.items;
  //   return contacts.items.filter(contact => contact.name.toLowerCase().includes(filter.query.toLowerCase()));
  // };

return (
    <>
    <h1>☎️ Phonebook ☎️</h1>
    <ContactForm />
    
    <h2>Contacts</h2>
    <Filter />
    {contacts.isLoading && <p>Loading contacts...</p>}
    {contacts.error && <p>{contacts.error}</p>}
    <ContactList
      // contactsProp={filterContacts()}
     />
    </>
);
};

export default App;
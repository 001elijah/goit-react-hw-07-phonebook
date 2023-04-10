import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
  const contactsRedux = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (contactsRedux.filter === '') return contactsRedux.contacts;
    return contactsRedux.contacts.filter(contact => contact.name.toLowerCase().includes(contactsRedux.filter.toLowerCase()));
  };

  const formSubmitHandler = (action) => {
    const found = contactsRedux.contacts.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase());
            if (found) {
            alert(`${action.payload.name} is already in contacts.`);
            return;
            };
    return dispatch(action);
  };

return (
    <>
    <h1>☎️ Phonebook ☎️</h1>
    <ContactForm onSubmitProp={formSubmitHandler} />
    
    <h2>Contacts</h2>
    <Filter onChangeProp={dispatch}/>
    <ContactList contactsProp={filterContacts()} removeContact={dispatch}/>
    </>
);
};

export default App;
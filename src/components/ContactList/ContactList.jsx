import Contact from "components/Contact/Contact";

import s from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contactsSelectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contactsOperations";

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const filteredContacts = () => {
        if (filter === '') return contacts.items;
        return contacts.items.filter(contact => contact.name.toLowerCase().includes(filter.query.toLowerCase()));
    };
    filteredContacts();
    return (
        <>
            {contacts.items.length !== 0 && <ul className={s.List}>
                {contacts.items.map(contact => <Contact key={contact.id} contactProp={contact}/>)}
            </ul>}
        </>
    );
};

export default ContactList;
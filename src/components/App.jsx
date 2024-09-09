import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import './App.css';
import initialContacts from '../contacts.json';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const savedContacts = JSON.parse(window.localStorage.getItem('contacts')) || [];
        if (savedContacts.length > 0) {
            dispatch(loadContacts(savedContacts));
        } else {
            dispatch(loadContacts(initialContacts));
            window.localStorage.setItem('contacts', JSON.stringify(initialContacts));
        }
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from './Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} deleteContact={handleDelete} />
            ))}
        </ul>
    );
};

export default ContactList;

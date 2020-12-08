import s from './ContactList.module.css';
import ContactItem from '../ContactItem';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.contactItem}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDelete={() => {
                            onDeleteContact(id);
                        }}
                    />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;

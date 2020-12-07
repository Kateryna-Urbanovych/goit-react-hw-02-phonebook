import { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        name: '',
        number: '',
        filter: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.addContact(this.state);
        this.reset();
    };

    addContact = ({ name, number }) => {
        const { contacts } = this.state;
        const contactsNames = contacts.reduce((allNames, contact) => {
            allNames.push(contact.name.toLowerCase());
            return allNames;
        }, []);

        if (contactsNames.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }

        const contact = {
            id: shortid.generate(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const visibleContacts = this.getVisibleContacts();

        return (
            <div className="container">
                <h1>Phonebook</h1>
                {/* <ContactForm ... /> */}
                <form onSubmit={this.handleSubmit} className="form">
                    <label className="label">
                        Name
                        <input
                            type="text"
                            className="input"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                    </label>
                    <label className="label">
                        Number
                        <input
                            type="tel"
                            className="input"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                    </label>
                    <button
                        type="submit"
                        className="button"
                        disabled={
                            this.state.name === '' || this.state.number === ''
                        }
                    >
                        Add contact
                    </button>
                </form>

                <h2>Contacts</h2>
                {/* <Filter ... /> */}
                <label className="label">
                    Find contacts by name
                    <input
                        type="text"
                        className="input"
                        value={this.state.filter}
                        onChange={this.changeFilter}
                        autoComplete="off"
                    />
                </label>
                {/* <ContactList ... /> + <ContactItem .../> */}
                <ul>
                    {visibleContacts.map(({ id, name, number }) => (
                        <li key={id} className="contactItem">
                            {name}: {number}
                            <button
                                type="button"
                                className="btn-delete"
                                onClick={() => {
                                    this.deleteContact(id);
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;

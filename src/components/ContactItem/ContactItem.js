import s from './ContactItem.module.css';

function ContactItem({ name, number, onDelete }) {
    return (
        <>
            {name}: {number}
            <button type="button" className={s.btnDelete} onClick={onDelete}>
                Delete
            </button>
        </>
    );
}

export default ContactItem;

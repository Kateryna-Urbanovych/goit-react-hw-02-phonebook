import s from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type="text"
                className={s.input}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
        </label>
    );
}

export default Filter;

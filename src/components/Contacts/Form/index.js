import { useState, useEffect } from 'react'

const defaultFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {

    const [form, setForm] = useState(defaultFormValues);

    useEffect(() => {
        setForm(defaultFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (form.fullname === '' || form.phone_number === '') {
            return false;
        };

        addContact([ ...contacts, form ]);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <input
                        name="fullname"
                        placeholder='Fullname'
                        value={form.fullname}
                        onChange={onChangeInput}>
                    </input>
                </div>

                <div>
                    <input
                        name="phone_number"
                        placeholder='Phone Number'
                        value={form.phone_number}
                        onChange={onChangeInput}>
                    </input>
                </div>

                <div className='btn'>
                    <button>Add</button>
                </div>
            </div>
        </form>
    )
}

export default Form
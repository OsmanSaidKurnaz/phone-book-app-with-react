import React, { useState, useEffect } from 'react'
import './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Vitalik Buterin",
            phone_number: "0 544 456 87 89"
        },
        {
            fullname: "Warren Buffet",
            phone_number: "0 553 756 84 21"
        },
        {
            fullname: "Satoshi Nakamoto",
            phone_number: "0 505 004 19 75"
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id='container'>
            <h1 className='white-text'>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
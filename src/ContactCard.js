import React from 'react';

function ContactCard(props) {
    return(
        <div>
            <h2>Name: {props.contact.name}</h2>
            <h4>Phone: {props.contact.phone}</h4>
            <h4>Email: {props.contact.email}</h4>
        </div>
    );
}
export default ContactCard;
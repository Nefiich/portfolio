import React from 'react';

function ContactCard(props){
    return(
        <div className="contact-card">
        <div className="contact-icon">
            {props.icon}
        </div>
        <h2>{props.title}</h2>
        <h5>{props.info}</h5>
        </div>
    );
}

export default ContactCard;


import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contact Us</h1>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h3>Inquires</h3>
                    <p><strong>Nashville Convention and Visitors Corp</strong></p>
<p>One Nashville Place</p>
<p>150 4th Avenue North, Suite G-250</p>
<p>Nashville, TN 37219</p>

                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 615-259-4730</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> nashcvc@visitmusiccity.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;


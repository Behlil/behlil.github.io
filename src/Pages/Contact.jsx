import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsValidEmail(validateEmail(event.target.value));
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            // Send email using email and message values
            emailjs.sendForm('service_byflqq9', 'template_zq3yijk', form.current, 'MxU3jMKNfnRVR4VYy')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setIsSubmitted(true);
        } else {
            setIsValidEmail(false);
        }
    };

    const validateEmail = (email) => {
        // Use regular expression to validate email format
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            {isSubmitted ? (
                <p>Thank you for your message!</p>
            ) : (
                <form onSubmit={handleSubmit} ref={form}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={!isValidEmail ? 'invalid-email' : ''}
                        required
                    />
                    {!isValidEmail && <p className="error-message">Please enter a valid email address.</p>}
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
}

import * as React from 'react';
import "./Contact.css";
import emailjs from "emailjs-com";
import {useRef} from "react"


export const Contact = () => {
    const form = useRef();
  function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_c78uc4c', 'template_shw5jq4', e.target, 'user_sxCeUUzTUK9Optq7gZ0Wc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="contact">
            <div className={"background-contact"}>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="formContact">
                    <div className="labelName">
                <label>Name</label>
                    <input type="text" name="name" />
                    </div>
                    <div className="labelEmail">
                <label>Email</label>
                    <input type="email" name="email" />
                    </div>
                    <div className="labelMessage">
                <label>Message</label>
                    <textarea name="message" />
                    </div>
                    <div className="buttonSend">
                <button className="sendButton"> <input type="submit" value="Send" /></button>
                    </div>
                </div>
            </form>
        </div>
    )
}
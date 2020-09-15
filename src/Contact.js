import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <p>Name</p>
            <p>Email</p>
            <p>Subject</p>
            <p>Message</p>
            </div>
            <div className="middle">
                <form>
            <input type="text"></input>
            <input type="email"></input>
            <input type="text"></input>
            <textarea></textarea>
            <button>S U B M I T</button>
            </form>
            </div>
            <div className="right">
                <h2>Address & Contact</h2>
             <p>Akshat Lakshkar</p>
             <p>Ghas Mandi Gwalior-3</p>
             <p>akshat@gmail.com</p>
             <p>9340601762</p>
            </div>

        </div>
    )
}

export default Contact

import React from 'react';

function Form() {
    return (
        <section className="contact-us">
            <h2>Let's Start a Conversation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div className="info-box">
                <div className="working-hours">
                    <h4>Working hours</h4>
                    <p><strong>Monday To Friday</strong><br />9:00 AM to 8:00 PM</p>
                    <p>Our Support Team is available 24/7</p>
                </div>
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p><strong>020 7993 2905</strong></p>
                    <p>hello@finsweet.com</p>
                </div>
            </div>
            
            <form className="contact-form">
                <label htmlFor="fullName">Full Name</label>
                <input 
                    type="text" 
                    id="fullName"
                    name="fullName" 
                    placeholder="Full Name" 
                    disabled
                />

                <label htmlFor="email">Your Email</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Your Email" 
                    disabled
                />

                <label htmlFor="queryType">Query Related</label>
                <select id="queryType" name="queryType" disabled>
                    <option>Select a topic</option>
                    <option>Support</option>
                    <option>Sales</option>
                    <option>Other</option>
                </select>

                <label htmlFor="message">Message</label>
                <textarea 
                    id="message"
                    name="message"
                    placeholder="Message" 
                    disabled
                ></textarea>

                <button type="submit" disabled>Send Message</button>
            </form>
        </section>
    );
}

export default Form;

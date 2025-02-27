import React from 'react';

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonial-container">
                <div className="testimonial-text">
                    <h4>TESTIMONIALS</h4>
                    <h2>What people say about our blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="testimonial-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="testimonial-author">
                        <img src="https://s0.rbk.ru/v6_top_pics/media/img/5/96/755039177971965.jpg" alt="Jonathan Vallem" />
                        <div>
                            <h3>Jonathan Vallem</h3>
                            <p>New York, USA</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-nav">
                    <button>&larr;</button>
                    <button>&rarr;</button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

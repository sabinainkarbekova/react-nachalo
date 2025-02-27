import React from 'react';
import foto from  '../img/Снимок экрана 2025-02-16 172931.png';

function Authors() {
    return (
        <section className="authorss">
            <h2>List of Authors</h2>
            <div className="authorss-container">
                <div className="authors-box">
                    <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="person1"/>
                    <h3>Floyd Miles</h3>
                    <p>Content Writer @Company</p>
                    <div className="social-icons">
                    </div>
                </div>
                <div className="authors-box highlighted">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="person2"/>
                    <h3>Dianne Russell</h3>
                    <p>Content Writer @Company</p>
                    <div className="social-icons">
                    </div>
                </div>
                <div className="authors-box">
                    <img src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="person3"/>
                    <h3>Jenny Wilson</h3>
                    <p>Content Writer @Company</p>
                    <div className="social-icons">
                    </div>
                </div>
                <div className="authors-box">
                    <img src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="person4"/>
                    <h3>Leslie Alexander</h3>
                    <p>Content Writer @Company</p>
                    <div className="social-icons">
                    </div>
                </div>
            </div>

        <div className="foto-logo">
            <img src={foto} alt='Foto'/>
        </div>
        </section>
    );
}

export default Authors;

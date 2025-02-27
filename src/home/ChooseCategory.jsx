import React from 'react';

function ChooseCategory() {
    return (
        <section className="choose-category">
            <h2>Choose A Category</h2>
            <div className="category-container">
                <div className="category-box">
                    <div className="icon">📊</div>
                    <h3>Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="category-box highlighted">
                    <div className="icon">🚀</div>
                    <h3>Startup</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="category-box">
                    <div className="icon">💰</div>
                    <h3>Economy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="category-box">
                    <div className="icon">🔬</div>
                    <h3>Technology</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    );
}

export default ChooseCategory;

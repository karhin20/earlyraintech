import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Careers = () => {
    return (
        <>
        <Header />
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: 'auto', marginTop: '100px', marginBottom: '100px' }}>
            <h2 style={{ color: '#333', textAlign: 'center' }}>Join Our Team!</h2>
            <p style={{ color: '#555', textAlign: 'center' }}>
                Do you have coding skills and a passion for teaching? <br />
                We are looking for talented individuals to join our team.
            </p>
            <p style={{ color: '#555', textAlign: 'center' }}>
                If you are interested, please send your resume and cover letter to: <br />
                <strong>earlyraintech@gmail.com</strong>
            </p>
        </div>
        <Footer />
        </>
    );
};

export default Careers;
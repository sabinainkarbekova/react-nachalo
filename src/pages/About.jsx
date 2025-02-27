import React from 'react';
import Header from '../home/Header';
import Mission from '../about/Mission';
import Blog from '../about/Blog';
import Authorss from '../about/Authorss';
import JoinTeam from '../home/JoinTeam';
import Footer from '../home/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <Mission/>
      <Blog />
      <Authorss />
      <JoinTeam/>
      <Footer />
    </div>
  );
};

export default About;
import React from 'react';
import Header from '../home/Header';

import Hero from '../home/Hero';
import Posts from '../home/Posts';
import AboutMission from '../home/AboutMission';
import Special from '../home/Special';
import ChooseCategory from '../home/ChooseCategory';
import Authors from '../home/Authors';
import Testimonials from '../home/Testimonials';
import JoinTeam from '../home/JoinTeam';
import Footer from '../home/Footer';

// function FullName(user){
//   return user.FirstName + ' ' + user.LastName;
// }

// const user = {
//   FirstName: 'Sabina',
//   LastName: 'Inkarbekova',
//   age: 16,
//   location: 'Astana'
// }

// const Fila = (
//   <h1> Привет, меня зовут {FullName(user)} </h1>
// )


// function Age(user){
//   return user.age
// }

// const Vozrast = (
//   <h1> Мне {Age(user)} лет</h1>
// )


// function Location(user){
//   return user.location
// }

// const Gorod = (
//   <h1> Я родилась в городе {Location(user)}</h1>
// )


function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Posts />
      <AboutMission />
      <Special />
      <ChooseCategory />
      <Authors />
      <Testimonials />
      <JoinTeam />
      <Footer />
    </div>
  );
}

export default Home;

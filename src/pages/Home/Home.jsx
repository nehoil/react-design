import React from 'react';
import BigCards from '../../cmps/BigCards/BigCards';
import FamilyGathering from '../../cmps/FamilyGathering/FamilyGathering';
import Footer from '../../cmps/Footer/Footer';
import Header from '../../cmps/Header/Header';
import Highlights from '../../cmps/Highlights/Highlights';
import Reservation from '../../cmps/Reservation/Reservation';

import './Home.scss';

export default function Home() {
  return (
    <div className="home-container">
     <Header/>
     <BigCards/>
     <Highlights/>
     <FamilyGathering/>
     <Reservation/>
     <Footer/>
    </div>
  )
}

import React, { Component } from 'react';
import './App.css';

import Write from "./components/Write";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./Data";

class App extends Component {
  render() {
    const cards = Data.map(item => (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title} 
        price={item.price}
        openSpots={item.openSpots}
      />
    ));

    return (
      <div className='react-container'>
        <div className='app-container'>
          <Navbar />
          <Hero />
          <Write />
          <section className='cards-list'>
            {cards}
          </section>
        </div>
      </div>
    );
  }
}

export default App;

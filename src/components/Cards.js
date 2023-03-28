import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these AMAZING Sights!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Lion.jpg'
              text='The lion is a large cat of the genus Panthera native to Africa and India.'
              label='Lions'
              path='/animals'
            />
            <CardItem
              src='images/gorilla.jpg'
              text='Gorillas are herbivorous, ground-dwelling great apes that inhabit the tropical forests of equatorial Africa.'
              label='Gorillas'
              path='/animals'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/aqua.jpg'
              text='Meet the aquatic life at the Wildlife zoo'
              label='Mystery'
              path='/animals'
            />
            <CardItem
              src='images/elephant.jpg'
              text='Elephants are the largest existing land animals.'
              label='Elephants'
              path='/animals'
            />
            <CardItem
              src='images/penguin.jpg'
              text='A group of aquatic flightless birds, which have black backs and wings with white fronts that are countershaded for camouflage.'
              label='Penguins'
              path='/animals'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
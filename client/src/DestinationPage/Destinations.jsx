import React from 'react';
import './Destinations.css'; // Adjust the import path if needed

import { MdLocationPin } from 'react-icons/md';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

import img1 from '../Images/1img.avif';
import img2 from '../Images/2img.avif';
import img3 from '../Images/3img.avif';
import img4 from '../Images/4img.avif';
import img5 from '../Images/5img.avif';
import img6 from '../Images/6img.avif';
import img7 from '../Images/ladakh.avif';
import img8 from '../Images/Tajmahal.avif';
import img9 from '../Images/cape.avif';
import img10 from '../Images/barcelona.avif';
import img11 from '../Images/Sydney.avif';
import img12 from '../Images/istanbul.avif';

import Portfolio from '../Portfolio/Portfolio';
import Review from '../Review/Review';
import Question from '../Question/Question';

const destinations = [
  {
    id: 1,
    img: img1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 2,
    img: img2,
    name: 'Bora Bora Island',
    location: 'Polynesia',
    rating: 4.3,
  },
  {
    id: 3,
    img: img3,
    name: 'Maldives Island',
    location: 'Indian Ocean',
    rating: 4.9,
  },
  {
    id: 4,
    img: img4,
    name: 'Santorini Island',
    location: 'Greece',
    rating: 4.5,
  },
  {
    id: 5,
    img: img5,
    name: 'Whitsunday Island',
    location: 'Australia',
    rating: 4.5,
  },
  {
    id: 6,
    img: img6,
    name: 'Maui Hawaii',
    location: 'USA',
    rating: 4.8,
  },
  {
    id: 7,
    img: img7,
    name: 'Ladakh',
    location: 'India',
    rating: 4.4,
  },
  {
    id: 8,
    img: img8,
    name: 'Taj Mahal',
    location: 'Agra,Delhi',
    rating: 4.9,
  },
  {
    id: 9,
    img: img9,
    name: 'Cape Town',
    location: 'South Africa',
    rating: 4.2,
  },
  {
    id: 10,
    img: img10,
    name: 'Barcelona',
    location: 'Spain',
    rating: 4.0,
  },
  {
    id: 11,
    img: img11,
    name: 'Sydney',
    location: 'Australia',
    rating: 4.1,
  },
  {
    id: 12,
    img: img12,
    name: 'Istanbul',
    location: 'Turkey',
    rating: 4.2,
  },
];

const Destinations = () => {
  return (
    <div className='destination'>
      <div className="secContainer">
        <div className="headerText">
          <span className='redText'>EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>Fill in the fields below to find the best spot for your next tour</p>
        </div>
        <div className="searchField">
          <div className="inputField flex">
            <MdLocationPin className='icon' />
            <input type='text' placeholder='Location' />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className='icon' />
            <input type='text' placeholder='Budget' />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className='icon' />
            <input type='text' placeholder='Date' />
          </div>
          <button className='btn flex'>
            <BiSearchAlt className='icon' />Search
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex">
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        <div className='destinationContainer grid'>
          {destinations.map(destination => (
            <div className="singleDestination" key={destination.id}>
              <div className="imgDiv">
                <img src={destination.img} alt='Destination' />
                <div className='descInfo flex'>
                  <div className='text'>
                    <span className='name'>{destination.name}</span>
                    <p className='flex'><TiLocation className='icon' />{destination.location}</p>
                  </div>
                  <span className="rating">{destination.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Portfolio/>
      <Review/>
      <Question/>
    </div>
  );
};

export default Destinations;

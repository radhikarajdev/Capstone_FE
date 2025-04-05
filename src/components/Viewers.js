import React from "react";
import Slider from "react-slick";
import "./Viewers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eventcard from "./Eventcard.js";
import { getAllEvents } from './Eventdata.js';
import { useState, useEffect } from 'react';

const Viewers = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getAllEvents(); // Can be a real API call
      setEvents(allEvents);
    };

    fetchEvents();
  }, []);

  const NextArrow = ({ onClick, currentSlide, slideCount }) => {
    if (currentSlide >= slideCount - 6) return null; 
    return (
      <div className="custom-arrow next" onClick={onClick}>
        ▶
      </div>
    );
  };
  
  const PrevArrow = ({ onClick, currentSlide }) => {
    if (currentSlide === 0) return null;
    return (
      <div className="custom-arrow prev" onClick={onClick}>
        ◀
      </div>
    );
  };
  
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  
  

  return (
    <div className="viewers-container">
      <div className="viewers-header">
        <h2>Latest Releases</h2>
        <a href="#" className="view-all">View All &gt;</a>
      </div>
      <div className="viewers-slider-wrapper">
        {events.length > 0 ? (
          <Slider {...settings}>
            {events.map((event) => (
              <div className="viewers-wrap" key={event.id}>
                <Eventcard event={event} />
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading events...</p>
        )}
      </div>
    </div>
  );
};

export default Viewers;

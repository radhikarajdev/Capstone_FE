import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Eventcard.css';

const Eventcard = ({ event, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const history = useHistory();

    const handleMouseLeave = () => setIsHovered(false);
    const handleMouseEnter = () => setIsHovered(true);

    const handleCardClick = () => history.push(`/events/${event.id}`);

  return (
    <div
      className="event-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className={`event-card ${featured ? 'event-featured' : ''}`}>
        <div className="event-content">
          <div className={`event-image-box ${isHovered ? 'hovered' : ''}`}>
            <img
              src={`/images/${event.image}`}
              alt={event.title}
              className="event-image"
            />
            <span className="event-genre">{event.genre}</span>
          </div>

          <div className="event-info-reveal">
            <h3 className="event-title">{event.title}</h3>
            <p><span>📅</span> {event.date}</p>
            <p><span>🕒</span> {event.time}</p>
            <p><span>📍</span> {event.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;

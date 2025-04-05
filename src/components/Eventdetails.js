import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "./Eventdata";
import "./Eventdetails.css";

const Eventdetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const selectedEvent = await getEventById(id);
      setEvent(selectedEvent);
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return <div className="loading">Loading event...</div>;
  }

  return (
    <div className="event-details">
      <div
        className="event-header"
        style={{
          backgroundImage: `url(/images/${event.image2})`,
        }}
      >
        <div className="event-overlay">
          <div className="event-main">
            <div className="event-left">
              <img src={`/images/${event.image}`} alt={event.title} className="event-poster" />
            </div>

            <div className="event-right">
              <h1>{event.title}</h1>
              <div className="event-details-grid">
                <p><strong>📅 Date:</strong> {event.date}</p>
                <p><strong>🕒 Time:</strong> {event.time}</p>
                <p><strong>📍 Location:</strong> {event.location}</p>
                <p><strong>🏟️ Venue:</strong> {event.venue}</p>
                <p><strong>💸 Price:</strong> {event.price}</p>
                <p><strong>🎶 Genre:</strong> {event.genre}</p>
              </div>
              <button className="book-button">Book tickets</button>
            </div>
          </div>
        </div>
      </div>

      <div className="event-about">
        <h2>About the event</h2>
        <p>{event.about || "No description available for this event."}</p>
      </div>
    </div>
  );
};

export default Eventdetails;

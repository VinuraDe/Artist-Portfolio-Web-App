
// src/components/EventCalendar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCalender.css'; // Import your CSS file

function monthToWord(month) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    return months[month];
}

function addOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
      return day + "th";
  } else {
      switch (day % 10) {
          case 1:
              return day + "st";
          case 2:
              return day + "nd";
          case 3:
              return day + "rd";
          default:
              return day + "th";
      }
  }
}

function EventCalender() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events: ', error));
    }, []);

    return (
        <div className="event-calendar">
            <h2>Upcomming Events</h2>
            <ul className="event-list">
                {events.map(event => {
                    const eventDate = new Date(event.date);
                    const day = eventDate.getDate();
                    const month = eventDate.getMonth();
                    const time = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                    return (
                        <li key={event._id} className="event-item">
                            <h3 className="event-name">{addOrdinalSuffix(day)}</h3>
                            <p className="event-detail"> {monthToWord(month)}</p>
                            <p className="event-detail">Name: {event.name}</p> 
                            <p className="event-detail">Time: {time}</p> {/* Display time as AM or PM */}
                            <p className="event-detail">Location: {event.location}</p>
                            <p className="event-detail">Description: {event.description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default EventCalender;


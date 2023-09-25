// // Homepage.js
// import React, { useEffect, useState } from 'react';
// import './../index.css';
// import React, { useEffect, useState } from 'react';
// import { Calendar } from 'primereact/calendar';


// function Homepage() {
//   const [events, setEvents] = useState([]);

//   // Function to fetch events from the backend
//   async function fetchEvents() {
//     try {
//       const response = await fetch('/events'); // Replace with the actual API endpoint
//       if (!response.ok) {
//         throw new Error('Error fetching events');
//       }
//       const eventData = await response.json();
//       setEvents(eventData);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   }

//   useEffect(() => {
//     // Fetch events when the component mounts
//     fetchEvents();
//   }, []);

//   // Define the artist's portfolio data
//   const artistPortfolio = {
//     artistName: 'Artist Name',
//     artistBio:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam purus at justo sollicitudin, a varius libero aliquam. Suspendisse potenti. Morbi aliquet enim in scelerisque.',
//     artworkGallery: [
//       { id: 1, title: 'Artwork 1', imageUrl: 'artwork1.jpg' },
//       { id: 2, title: 'Artwork 2', imageUrl: 'artwork2.jpg' },
//       // Add more artwork objects as needed
//     ],
//   };

//   return (
//     <div>
//       <h1>Welcome to the Artist's Portfolio</h1>
//       <section>
//         <h2>Upcoming Events</h2>
//         <div className="event-list">
//           {events.map((event) => (
//             <div key={event._id} className="event-card">
//               <h3>{event.name}</h3>
//               <p>
//                 <strong>Date:</strong> {event.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {event.time}
//               </p>
//               <p>
//                 <strong>Location:</strong> {event.location}
//               </p>
//               <p>
//                 <strong>Description:</strong> {event.description}
//               </p>
//               <button>Delete</button>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Artist's Portfolio section */}
//       <section>
//         <h2>Artist's Portfolio</h2>
//         <div className="artist-portfolio">
//           <h3>{artistPortfolio.artistName}</h3>
//           <p>{artistPortfolio.artistBio}</p>
//           <div className="artwork-gallery">
//             {artistPortfolio.artworkGallery.map((artwork) => (
//               <div key={artwork.id} className="artwork-item">
//                 <img
//                   src={artwork.imageUrl}
//                   alt={artwork.title}
//                   width="200"
//                   height="200"
//                 />
//                 <p>{artwork.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Homepage;

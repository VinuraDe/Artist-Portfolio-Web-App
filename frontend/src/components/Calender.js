// import React from 'react';
// import { Calendar } from 'primereact/calendar';

// function Calender() {
//     const events = [
//         {
//             name: 'Event 1',
//             date: '2022-01-01',
//             location: 'Location 1',
//             description: 'Description 1',
//         },
//         {
//             name: 'Event 2',
//             date: '2022-02-01',
//             location: 'Location 2',
//             description: 'Description 2',
//         },
//     ];

//     const calendarEvents = events.map((event) => ({
//         title: event.name,
//         start: new Date(event.date), // Start date of the event
//         end: new Date(event.date), // End date of the event (modify as needed)
//         location: event.location,
//         description: event.description,
//     }));

//     return (
//         <div>
//             <h1>Welcome to the Artist's Portfolio</h1>
//             <section>
//                 <h2>Upcoming Events</h2>
//                 <div className="event-list">
//                     <Calendar
//                         events={calendarEvents}
//                         eventTemplate={(event) => (
//                             <div className="p-d-flex p-ai-center">
//                                 <i className="pi pi-calendar" style={{ marginRight: '0.25rem' }}></i>
//                                 <span>{event.title}</span>
//                             </div>
//                         )}
//                         onEventClick={(e) => {
//                             // Handle event click (e.event is the selected event object)
//                             console.log('Event clicked:', e.event);
//                         }}
//                     />
//                 </div>
//             </section>
//             {/* ... (rest of the component) ... */}
//         </div>
//     );
// }

// export default Calender;

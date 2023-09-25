// event-details.js
document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('eventList');

    // Function to fetch and display all events
    async function displayAllEvents() {
        try {
            const response = await fetch('/events');
            const events = await response.json();

            // Display each event in the list
            events.forEach((event) => {
                const eventItem = document.createElement('div');
                eventItem.classList.add('event-item');
                eventItem.innerHTML = `
                    <h3>${event.name}</h3>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Time:</strong> ${event.time}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Description:</strong> ${event.description}</p>
                `;
                eventList.appendChild(eventItem);
            });
        } catch (error) {
            console.error('Error fetching events:', error);
            alert('Error fetching events. Please try again.');
        }
    }

    // Initial display of events when the page loads
    displayAllEvents();
});
// event-details.js
document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('eventList');
    const goToAddEventButton = document.getElementById('goToAddEvent'); // Get the button element

    // Function to fetch and display all events
    async function displayAllEvents() {
        // ... (existing code remains the same) ...
    }

    // Initial display of events when the page loads
    displayAllEvents();

    // Add an event listener to the "Add Event" button for navigation
    goToAddEventButton.addEventListener('click', () => {
        // Navigate to the "Add Event" page when the button is clicked
        window.location.href = 'AddEvent.html'; // Replace with the actual URL of your "Add Event" page
    });
});

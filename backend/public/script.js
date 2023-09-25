document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');


    eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(eventForm);
        const eventData = {};

        formData.forEach((value, key) => {
            eventData[key] = value;
        });

        try {
            await fetch('/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
                
            });

            alert('Event Added Successfully');
            // Clear the form after adding an event
            eventForm.reset();
            

            // Fetch and display all events after adding a new one
            
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Error adding event. Please try again.');
        }
    })
    
});
document.addEventListener('DOMContentLoaded', () => {

    const goToAddEventButton = document.getElementById('goToAddEvent'); // Get the button element

    // Add an event listener to the "Add Event" button for navigation
    goToAddEventButton.addEventListener('click', () => {
        // Navigate to the "Add Event" page when the button is clicked
        window.location.href = 'index.html'; // Replace with the actual URL of your "Add Event" page
    });
});

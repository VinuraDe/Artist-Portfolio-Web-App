document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("id");

  const updateEventForm = document.getElementById("updateEventForm");
  updateEventForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Retrieve updated event data from the form
    const formData = new FormData(updateEventForm);
    const updatedEventData = {};

    formData.forEach((value, key) => {
      updatedEventData[key] = value;
    });

    // Send a PUT request to update the event
    try {
      const response = await fetch(`/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEventData),
      });

      if (!response.ok) {
        throw new Error("Error updating event");
      }

      // Redirect to the event details page after updating
      window.location.href = `/index.html?id=${eventId}`;
    } catch (error) {
      console.error("Error updating event:", error);
    }
  });

  // Fetch event details and prepopulate form fields
  async function fetchEventDetails() {
    try {
      const response = await fetch(`/events/${eventId}`);
      if (!response.ok) {
        throw new Error("Error fetching event details");
      }
      const eventDetails = await response.json();

      // Prepopulate form fields
      document.getElementById("eventName").value = eventDetails.name;
      document.getElementById("eventDate").value = eventDetails.date; // Prepopulate the date field
      document.getElementById("eventTime").value = eventDetails.time;
      document.getElementById("eventLocation").value = eventDetails.location;
      document.getElementById("eventDescription").value = eventDetails.description;
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  }

  fetchEventDetails();
});

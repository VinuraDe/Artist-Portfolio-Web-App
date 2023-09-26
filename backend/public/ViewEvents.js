document.addEventListener("DOMContentLoaded", () => {
  const eventList = document.getElementById("eventList");
  const goToAddEventButton = document.getElementById("goToAddEvent");

  async function displayAllEvents() {
    try {
      const response = await fetch("/events");
      const events = await response.json();

      events.forEach((event) => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event-item");
        eventItem.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Description:</strong> ${event.description}</p>
            <button class="delete-button" data-event-id="${event._id}">Delete</button>
            <button class="update-button" data-event-id="${event._id}">Update</button>
          `;

        const deleteButton = eventItem.querySelector(".delete-button");
        const updateButton = eventItem.querySelector(".update-button");

        deleteButton.addEventListener("click", async () => {
          const eventId = deleteButton.getAttribute("data-event-id");
          const userConfirmed = window.confirm(
            "Are you sure you want to delete this event?"
          );

          if (userConfirmed) {
            try {
              const response = await fetch(`/events/${eventId}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });

              if (!response.ok) {
                throw new Error("Error deleting event");
              }

              eventItem.remove();
            } catch (error) {
              console.error("Error deleting event:", error);
              alert("Error deleting event. Please try again.");
            }
          }
        });

        updateButton.addEventListener("click", () => {
          const eventId = updateButton.getAttribute("data-event-id");
          window.location.href = `updateevent.html?id=${eventId}`;
        });

        eventList.appendChild(eventItem);
      });
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Error fetching events. Please try again.");
    }
  }

  displayAllEvents();

  goToAddEventButton.addEventListener("click", () => {
    window.location.href = "AddEvent.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("eventForm");

  eventForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(eventForm);
    const eventData = {};

    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    try {
      await fetch("/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      alert("Event Added Successfully");
      eventForm.reset();
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Error adding event. Please try again.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const goToAddEventButton = document.getElementById("goToAddEvent");

  goToAddEventButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

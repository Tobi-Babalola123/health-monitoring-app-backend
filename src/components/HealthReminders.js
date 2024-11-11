import React, { useState, useEffect } from "react";
import { store } from "react-notifications-component"; // Import for notifications
import "react-notifications-component/dist/theme.css"; // Import default theme
import "animate.css"; // Import animations

const HealthReminders = () => {
  const [task, setTask] = useState(""); // State for the task
  const [time, setTime] = useState(""); // State for the time
  const [reminders, setReminders] = useState([]); // State for the list of reminders

  // Function to show notifications
  const showNotification = (title, message) => {
    store.addNotification({
      title: title,
      message: message,
      type: "info", // Notification type ('info', 'success', 'danger', etc.)
      insert: "top",
      container: "top-center", // Where to display the notification
      animationIn: ["animate__animated", "animate__fadeIn"], // Animation in
      animationOut: ["animate__animated", "animate__fadeOut"], // Animation out
      dismiss: {
        duration: 5000, // Duration before it dismisses
        onScreen: true, // Keep it on screen until dismissed
      },
    });
  };

  // Add a new reminder
  const addReminder = () => {
    if (task && time) {
      setReminders((prevReminders) => [...prevReminders, { task, time }]);
      setTask(""); // Reset task after adding
      setTime(""); // Reset time after adding
      showNotification("Reminder Added", `${task} at ${time}`); // Show notification
    } else {
      showNotification("Error", "Please provide both task and time."); // Show error if task or time is missing
    }
  };

  // useEffect to check reminders every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      console.log("Current Time: ", currentTime); // Log current time
      console.log("Reminders: ", reminders); // Log reminders array

      // Loop through reminders and check if the current time matches any reminder
      reminders.forEach((reminder) => {
        if (reminder.time === currentTime) {
          showNotification("Reminder", `Time to: ${reminder.task}`); // Trigger notification if time matches
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup interval when the component is unmounted
  }, [reminders]); // Re-run when reminders state changes

  return (
    <div>
      <h3>Health Reminders</h3>
      {/* Input fields for task and time */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Set task value
        placeholder="Task"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)} // Set time value
      />
      <button onClick={addReminder}>Add Reminder</button>

      {/* List of reminders */}
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.task} at {reminder.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthReminders;

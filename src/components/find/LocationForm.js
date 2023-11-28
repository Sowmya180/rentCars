import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./Location.css";

const LocationForm = ({ selectedCar, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/carregistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add this line
        },
        body: JSON.stringify({
          car_type: selectedCar.make,
          user_name: name,
          location: location, // Corrected line
          pickup_date: pickupDate,
          pickup_time: pickupTime,
          drop_date: dropDate,
          drop_time: dropTime,
        }),
      });

      if (response.ok) {
        console.log("Car Registered Successfully");
        onSubmit({
          car: selectedCar.make,
          name,
          location,
          pickupDate,
          pickupTime,
          dropDate,
          dropTime,
          capacity: selectedCar.capacity,
          bagCapacity: selectedCar.bagCapacity,
          mileage: selectedCar.mileage,
          transmission: selectedCar.transmission,
          price: selectedCar.price,
        });
      } else {
        console.error("Failed to register car");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Popup
      trigger={() => <button className="pop">OPEN FORM</button>}
      modal
      nested
      closeOnDocumentClick={false}
    >
      {(close) => (
        <div className="form-grid-container">
          <div className="car-details">
            <h3>Car Details</h3>
            <img src={selectedCar.image} alt={selectedCar.make} />
            <p>Make: {selectedCar.make}</p>
            <p>Capacity: {selectedCar.capacity}</p>
            <p>Bag Capacity: {selectedCar.bagCapacity}</p>
            <p>Mileage: {selectedCar.mileage}</p>
            <p>Transmission: {selectedCar.transmission}</p>
            <p>Price per Day: ${selectedCar.price}</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              close();
            }}
            className="form-content"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <label htmlFor="pickupDate">PickUp Date:</label>
            <input
              type="date"
              id="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            />

            <label htmlFor="pickupTime">PickUp Time:</label>
            <input
              type="time"
              id="pickupTime"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            />

            <label htmlFor="dropDate">Drop Date:</label>
            <input
              type="date"
              id="dropDate"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
              required
            />

            <label htmlFor="dropTime">Drop Time:</label>
            <input
              type="time"
              id="dropTime"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
              required
            />

            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => {
                handleCancel();
                close();
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </Popup>
  );
};

export default LocationForm;

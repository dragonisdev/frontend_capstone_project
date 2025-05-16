import React from 'react'
import '../App.css';

const Booking = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Reservation Submitted:');


    alert(`Reservation submitted for ${data.name} on ${data.date} at ${data.time}`);
};

  return (
    <div>
        <div className="form-container">
          <h2>Book a Table</h2>
          <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="res-name">Name</label>
            <input type="text" id="res-name"  name="name" required/>

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" required/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
              
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" placeholder="1" min="1" max="50" required/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" />
          </form>
        </div>
    </div>
  )
}

export default Booking
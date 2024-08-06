import React, { useState, useEffect } from 'react';

const Time = () => {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [submittedData, setSubmittedData] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', age: '' }); // Reset form fields
  };

  // Periodically update table
  useEffect(() => {
    const intervalId = setInterval(() => {
      // This is where you might fetch new data from an API
      // For this example, we're simply updating state with the same data
      setSubmittedData([...submittedData]);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [submittedData]);

  return (
    <div>
      <h1>Submit Form and Display in Real-Time Table</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Time;
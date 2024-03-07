import axios from 'axios';
import React, { useState } from 'react';
import '/src/Styles/form.css';
import Navbar from '/src/components/Navbar.jsx';
function Form() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [availability, setAvailability] = useState(''); // Initialize availability state
  const [preference, setPreference] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make HTTP POST request to your backend API endpoint
      const response = await axios.post('http://localhost:8000/api/submit_form ', {
        name,
        domain,
        availability, // Include availability in the form data
        preference
      });
      console.log('Form submitted successfully:', response.data);
      // Reset form fields after successful submission
      setName('');
      setDomain('');
      setAvailability('');
      setPreference('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="domain">Domain:</label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            >
              <option value="">Select Domain</option>
              <option value="blockchain">Blockchain</option>
              <option value="ai_ml">AI/ML</option>
              <option value="webdev">Web Development</option>
            </select>
          </div>
          <div>
            <label htmlFor="availability">Availability:</label>
            <input
              type="text"
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="preference">Preference:</label>
            <select
              id="preference"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              required
            >
              <option value="">Select Preference</option>
              <option value="remote">Remote Job</option>
              <option value="fulltime">Full Time</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;

import React, { useState } from 'react';
import Navbar from '/src/components/Navbar.jsx'

function CompanyForm() {
  // State variables to store form data
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [domain, setDomain] = useState('');
  const [interviewDate, setInterviewDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to server
    console.log({ companyName, description, numberOfPeople, domain, interviewDate });
  };

  return (<>
  <Navbar></Navbar>
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="numberOfPeople">Number of People Needed:</label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="domain">Domain Needed:</label>
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
        <label htmlFor="interviewDate">Interview Date:</label>
        <input
          type="date"
          id="interviewDate"
          value={interviewDate}
          onChange={(e) => setInterviewDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}

export default CompanyForm;

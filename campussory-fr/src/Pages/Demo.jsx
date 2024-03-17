import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Demo() {
  const [clients, setClients] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientsResponse, companiesResponse] = await Promise.all([
          axios.get('http://localhost:8000/api/posts'),
          axios.get('http://127.0.0.1:8000/api/companyposts/')
        ]);

        console.log('Clients Response:', clientsResponse);
        console.log('Companies Response:', companiesResponse);

        // Check if response.data is an array for clients
        if (Array.isArray(clientsResponse.data)) {
          setClients(clientsResponse.data);
        } else {
          console.error('Clients Response data is not an array:', clientsResponse.data);
        }

        // Check if response.data is an array for companies
        if (Array.isArray(companiesResponse.data)) {
          setCompanies(companiesResponse.data);
        } else {
          console.error('Companies Response data is not an array:', companiesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Clients List</h1>
        <ul>
          {clients.map(client => (
            <li key={client.client_id}>
              Name: {client.name}, Variable 1: {client.variable1}, Variable 2: {client.variable2}, Variable 3: {client.variable3}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Company List</h1>
        <ul>
          {companies.map(company => (
            <li key={company.company_id}>
              Name: {company.name}, Variable 1: {company.variable1}, Variable 2: {company.variable2}, Variable 3: {company.variable3}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Demo;

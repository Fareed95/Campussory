import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Demo() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts'); // Replace with your backend API URL
        console.log('Response:', response);
        console.log('Response data:', response.data);

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          setClients(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
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
  );
}

export default Demo;

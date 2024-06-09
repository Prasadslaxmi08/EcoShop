import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserLocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get('/user-locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <h1>User Locations</h1>
      <ul>
        {locations.map((location) => (
          <li key={location._id}>{location.city} - {location.area}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserLocationList;

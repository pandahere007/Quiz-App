import React, { useState, useEffect } from 'react';
import api from '../services/api'; 

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      api.getUser(userId)
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user:', error));
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-5 fw-bold text-center my-4">User Profile</h1>
      <div className="row">
        <div className="col-lg-4">
        
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
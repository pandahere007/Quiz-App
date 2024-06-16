import React, { useState, useEffect } from 'react';
import api from '../services/api'; 

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getLeaderboard()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching leader board:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="display-5 fw-bold text-center my-4">Leader board</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
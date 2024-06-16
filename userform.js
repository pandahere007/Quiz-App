import React, { useState } from 'react';
import api from '../services/api'; 

function UserForm({ type, onSubmit, initialData }) {
  const [username, setUsername] = useState(initialData?.username || '');
  const [password, setPassword] = useState(initialData?.password || '');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.createUser({ username, password });
      onSubmit(response);
    } catch (error) {
      console.error('Error during', type, ':', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">{type === 'register' ? 'Register' : 'Login'}</button>
    </form>
  );
}

export default UserForm;
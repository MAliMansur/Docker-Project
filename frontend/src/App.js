import React, { useState, useEffect } from 'react';
import { getApiStatus, getEmployees } from './api';
import './App.css';

function App() {
  const [status, setStatus] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getApiStatus().then(data => setStatus(data.message));
    getEmployees().then(data => setEmployees(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Docker Master Project</h1>
        <p>Two-Tier Architecture (React + Node.js)</p>
        
        <div className="card">
          <h3>Backend Status:</h3>
          <span className="status-badge">{status || 'Loading...'}</span>
        </div>

        <div className="card">
          <h3>Employee Directory (Fetched from Backend API):</h3>
          <ul>
            {employees.length > 0 ? (
              employees.map(emp => (
                <li key={emp.id}>
                  <strong>{emp.name}</strong> - {emp.department} Department
                </li>
              ))
            ) : (
              <p>Loading employees or backend offline...</p>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;


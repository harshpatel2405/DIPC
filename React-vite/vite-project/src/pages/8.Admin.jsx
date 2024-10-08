import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Admin() {
  const location = useLocation();
  const navigate = useNavigate();
  const request = location.state?.request; // Get the request from the state

  const handleApprove = () => {
    alert('Verification request approved!'); // Show approval message
    navigate('/'); // Navigate back to User page
  };

  return (
    <div>
      <h2>Admin Page</h2>
      {request ? (
        <div>
          <p>Received Request: {request}</p>
          <button onClick={handleApprove}>Approve Request</button>
        </div>
      ) : (
        <p>No verification requests.</p>
      )}
    </div>
  );
}

export default Admin;

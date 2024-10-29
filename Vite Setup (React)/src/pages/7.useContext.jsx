import React from 'react';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();

  const handleVerify = () => {
    // Navigate to admin page when the user clicks the button
    navigate('/admin', { state: { request: 'New Verification Request' } });
  };

  return (
    <div>
      <h2>User Page</h2>
      <button onClick={handleVerify}>Click to Verify</button>
    </div>
  );
}

export default User;

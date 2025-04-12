import React from 'react';

const Step3Confirmation = ({ personalInfo, addressInfo }) => {
  return (
    <div className="form-step">
      <h2>Confirmation</h2>
      <div className="confirmation-section">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {personalInfo.name}</p>
        <p><strong>Email:</strong> {personalInfo.email}</p>
        <p><strong>Phone:</strong> {personalInfo.phone}</p>
      </div>
      
      <div className="confirmation-section">
        <h3>Address Information</h3>
        <p><strong>Address Line 1:</strong> {addressInfo.address1}</p>
        <p><strong>Address Line 2:</strong> {addressInfo.address2 || 'N/A'}</p>
        <p><strong>City:</strong> {addressInfo.city}</p>
        <p><strong>State:</strong> {addressInfo.state}</p>
        <p><strong>Zip Code:</strong> {addressInfo.zip}</p>
      </div>
    </div>
  );
};

export default Step3Confirmation;
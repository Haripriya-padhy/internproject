import React from 'react';
import FormField from './FormField';

const Step1PersonalInfo = ({ data, onChange, errors }) => {
  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <FormField 
        label="Name"
        name="name"
        value={data.name}
        onChange={(e) => onChange('name', e.target.value)}
        error={errors.name}
        required
      />
      <FormField 
        label="Email"
        name="email"
        type="email"
        value={data.email}
        onChange={(e) => onChange('email', e.target.value)}
        error={errors.email}
        required
      />
      <FormField 
        label="Phone"
        name="phone"
        type="tel"
        value={data.phone}
        onChange={(e) => onChange('phone', e.target.value)}
        error={errors.phone}
        required
      />
    </div>
  );
};

export default Step1PersonalInfo;
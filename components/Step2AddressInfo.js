import React from 'react';
import FormField from './FormField';

const Step2AddressInfo = ({ data, onChange, errors }) => {
  return (
    <div className="form-step">
      <h2>Address Information</h2>
      <FormField 
        label="Address Line 1"
        name="address1"
        value={data.address1}
        onChange={(e) => onChange('address1', e.target.value)}
        error={errors.address1}
        required
      />
      <FormField 
        label="Address Line 2"
        name="address2"
        value={data.address2}
        onChange={(e) => onChange('address2', e.target.value)}
        error={errors.address2}
      />
      <FormField 
        label="City"
        name="city"
        value={data.city}
        onChange={(e) => onChange('city', e.target.value)}
        error={errors.city}
        required
      />
      <FormField 
        label="State"
        name="state"
        value={data.state}
        onChange={(e) => onChange('state', e.target.value)}
        error={errors.state}
        required
      />
      <FormField 
        label="Zip Code"
        name="zip"
        value={data.zip}
        onChange={(e) => onChange('zip', e.target.value)}
        error={errors.zip}
        required
      />
    </div>
  );
};

export default Step2AddressInfo;
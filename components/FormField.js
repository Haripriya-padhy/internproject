import React from 'react';

const FormField = ({ label, name, type = 'text', value, onChange, error, required = false }) => {
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormField;
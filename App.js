import React, { useState, useEffect } from 'react';
import Step1PersonalInfo from './components/Step1PersonalInfo';
import Step2AddressInfo from './components/Step2AddressInfo';
import Step3Confirmation from './components/Step3Confirmation';
import FormNavigation from './components/FormNavigation';
import useLocalStorage from './hooks/useLocalStorage';
import './styles.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('formData', {
    personalInfo: { name: '', email: '', phone: '' },
    addressInfo: { address1: '', address2: '', city: '', state: '', zip: '' }
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (stepName, field, value) => {
    setFormData(prev => ({
      ...prev,
      [stepName]: {
        ...prev[stepName],
        [field]: value
      }
    }));
  };

  const validateCurrentStep = () => {
    let valid = true;
    let newErrors = {};

    if (step === 1) {
      if (!formData.personalInfo.name.trim()) {
        newErrors.name = 'Name is required';
        valid = false;
      }
      if (!formData.personalInfo.email.trim()) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalInfo.email)) {
        newErrors.email = 'Invalid email format';
        valid = false;
      }
      if (!formData.personalInfo.phone.trim()) {
        newErrors.phone = 'Phone is required';
        valid = false;
      }
    } else if (step === 2) {
      if (!formData.addressInfo.address1.trim()) {
        newErrors.address1 = 'Address Line 1 is required';
        valid = false;
      }
      if (!formData.addressInfo.city.trim()) {
        newErrors.city = 'City is required';
        valid = false;
      }
      if (!formData.addressInfo.state.trim()) {
        newErrors.state = 'State is required';
        valid = false;
      }
      if (!formData.addressInfo.zip.trim()) {
        newErrors.zip = 'Zip Code is required';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        localStorage.removeItem('formData');
        resolve();
      }, 1500);
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Multi-Step Form</h1>
        <div className="step-indicator">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`step-circle ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div className="form-content">
        {step === 1 && (
          <Step1PersonalInfo 
            data={formData.personalInfo} 
            onChange={(field, value) => handleChange('personalInfo', field, value)}
            errors={errors}
          />
        )}
        {step === 2 && (
          <Step2AddressInfo 
            data={formData.addressInfo} 
            onChange={(field, value) => handleChange('addressInfo', field, value)}
            errors={errors}
          />
        )}
        {step === 3 && (
          <Step3Confirmation 
            personalInfo={formData.personalInfo} 
            addressInfo={formData.addressInfo} 
          />
        )}
      </div>

      <FormNavigation 
        currentStep={step} 
        onNext={nextStep} 
        onPrev={prevStep} 
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
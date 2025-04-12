import React from 'react';

const FormNavigation = ({ currentStep, onNext, onPrev, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onSubmit();
    setIsSubmitting(false);
  };

  return (
    <div className="form-navigation">
      {currentStep > 1 && (
        <button 
          type="button" 
          onClick={onPrev}
          className="btn btn-secondary"
        >
          Back
        </button>
      )}
      
      {currentStep < 3 ? (
        <button 
          type="button" 
          onClick={onNext}
          className="btn btn-primary"
        >
          Next
        </button>
      ) : (
        <button 
          type="button" 
          onClick={handleSubmit}
          className="btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
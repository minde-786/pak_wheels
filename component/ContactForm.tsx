import React, { useState } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {submitted ? (
        <div className="bg-green-100 p-4 rounded">
          <h2>Thank you!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
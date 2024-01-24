import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 border rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <p className="text-lg mb-4">
          Feel free to reach out to us for any inquiries or feedback.
        </p>

        <div className="contact-info">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p>
            <strong>Email:</strong> example@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, Cityville
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

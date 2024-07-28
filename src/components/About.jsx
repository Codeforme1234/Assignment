import React from "react";

const About = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>
      <p>
        <strong>Libraries Used:</strong>
      </p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>React</li>
        <li>React Router DOM</li>
        <li>Redux</li>
        <li>Tailwind CSS</li>
        <li>Validator</li>
      </ul>
      <p>
        <strong>Reason for using these libraries:</strong>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>React:</strong> To build the user interface.
          </li>
          <li>
            <strong>React Router DOM:</strong> For routing and navigation
            between pages.
          </li>
          <li>
            <strong>Redux:</strong> For state management.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> For styling the components.
          </li>
          <li>
            <strong>Validator:</strong> To validate user input such as email
            addresses.
          </li>
        </ul>
      </p>
      <p>
        <strong>Data Storage:</strong>
        User data is stored in the browser's localStorage for simplicity. In a
        production app, you'd typically use a database.
      </p>
      <p className="mt-4">
        <strong>Validation:</strong>
        Email validation is done using the Validator library to ensure correct
        email format.
      </p>
      <p className="mt-4">
        <strong>Redux:</strong>
        Redux is used to manage the application's state, including handling user
        authentication status.
      </p>
      <p className="mt-4">
        <strong>Token and Session:</strong>
        On login, a token is generated and stored in the Redux store. This token
        is used to manage the user session and is valid for 5 minutes.
      </p>
    </div>
  );
};

export default About;

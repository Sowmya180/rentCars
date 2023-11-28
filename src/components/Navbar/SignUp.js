// import React, { useState } from 'react';
// import './signup.css';
// import axios from 'axios'
// const SignUpForm = ({ onClose }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !number || !password || !confirmPassword) {
//       console.error('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       console.error('Passwords do not match');
//       return;
//     }

//     console.log('New user details submitted:', { name, email, number, password });

//     setName('');
//     setEmail('');
//     setNumber('');
//     setPassword('');
//     setConfirmPassword('');

//     onClose();
//   };

//   return (<div className="signup-form-container">
//   <h2>Sign Up</h2>
//   <form onSubmit={handleSubmit}>
//     <label htmlFor="name">Name:</label>
//     <input
//       type="text"
//       id="name"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       required
//     />

//     <label htmlFor="email">Email:</label>
//     <input
//       type="email"
//       id="email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       required
//     />

//     <label htmlFor="Phone-number">Mobile Number:</label>
//     <input
//       type="text"
//       id="number"
//       value={number}
//       onChange={(e) => setNumber(e.target.value)}
//       required
//     />

//     <label htmlFor="password">Password:</label>
//     <input
//       type="password"
//       id="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//     />

//     <label htmlFor="confirmPassword">Confirm Password:</label>
//     <input
//       type="password"
//       id="confirmPassword"
//       value={confirmPassword}
//       onChange={(e) => setConfirmPassword(e.target.value)}
//       required
//     />

//     <div className="form-buttons">
//       <button type="submit" className="submit-button">
//         Submit
//       </button>
//       <button type="button" onClick={onClose} className="close-button btn-close">
//         Close
//       </button>
//     </div>
//   </form>
// </div>

//   );
// };

// export default SignUpForm;



import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';

const SignUpForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !password || !confirmPassword) {
      console.error('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/useradd', {
        name,
        email,
        number,
        password,
      });

      console.log(response.status);

      if (response.status === 200) {
        console.log('User created successfully!');
          onClose();
      } else {
        console.error('Error creating user');
          }
    } catch (error) {
      console.error('Error creating user:', error);
         }

    // Clear form fields
    setName('');
    setEmail('');
    setNumber('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="Phone-number">Mobile Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" onClick={onClose} className="close-button btn-close">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

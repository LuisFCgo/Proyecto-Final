import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    country: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User has been registered successfully');
        // Reset form data after successful registration
        setFormData({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          country: '',
          state: '',
          zip: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error registering the user:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div id="container-reg" className="container">
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Valid first name is required.</div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="username" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="confirmPassword" className="form-label">Confirmed Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="1234 Main St"
              required
            />
            <div className="invalid-feedback">Please enter your shipping address.</div>
          </div>

          <div className="col-md-5">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              className="form-select"
              id="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">Please select a valid country.</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <select
              className="form-select"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">Please provide a valid state.</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;

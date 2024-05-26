import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    paymentMethod: 'credit',
    nameOnCard: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Payment submitted successfully');
        // Reset form data after successful submission
        setFormData({
          paymentMethod: 'credit',
          nameOnCard: '',
          cardNumber: '',
          expiration: '',
          cvv: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Payment submission failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting payment:', error);
      alert('Please login first');
    }
  };

  return (
    <div id='container-reg' className="container">
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <hr className="my-4" />
        <h4 className="mb-3">Payment</h4>
        <div className="my-3">
          <div className="form-check">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              value="credit"
              checked={formData.paymentMethod === 'credit'}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="credit">Credit card</label>
          </div>
          <div className="form-check">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              value="debit"
              checked={formData.paymentMethod === 'debit'}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="debit">Debit card</label>
          </div>
          <div className="form-check">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="form-check-input"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="paypal">PayPal</label>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-md-6">
            <label htmlFor="cc-name" className="form-label">Name on card</label>
            <input
              type="text"
              className="form-control"
              id="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              required
            />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">Name on card is required</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="cc-number" className="form-label">Credit card number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Credit card number is required</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-expiration" className="form-label">Expiration</label>
            <input
              type="text"
              className="form-control"
              id="expiration"
              value={formData.expiration}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-cvv" className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Security code required</div>
          </div>
        </div>

        <hr className="my-4" />
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;

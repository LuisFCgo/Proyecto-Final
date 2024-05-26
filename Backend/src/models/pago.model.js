// models/Payment.js
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    required: true,
  },
  nameOnCard: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiration: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;

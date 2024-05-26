// controllers/paymentController.js
import Payment from '../models/Payment.js';

// Función para guardar un nuevo pago en la base de datos
const createPayment = async (req, res) => {
  try {
    const {
      paymentMethod,
      nameOnCard,
      cardNumber,
      expiration,
      cvv,
    } = req.body;

    // Crear una nueva instancia del modelo Payment con los datos recibidos
    const newPayment = new Payment({
      paymentMethod,
      nameOnCard,
      cardNumber,
      expiration,
      cvv,
    });

    // Guardar el nuevo pago en la base de datos
    const savedPayment = await newPayment.save();

    // Enviar una respuesta con el pago guardado
    res.status(201).json(savedPayment);
  } catch (error) {
    // Manejar errores
    console.error('Error saving payment:', error);
    res.status(500).json({ message: 'Error saving payment' });
  }
};

export { createPayment };

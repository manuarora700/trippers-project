/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51GugM2JJQ3V4II3vZQCLdi2rT2Qd6tEyZfE5BpLIs5eAzMcBl1JAcN6dADgFGWo40PnwDwdLZxRKFYSCH43xur3z00o04chBjB'
);

export const bookTour = async tourId => {
  try {
    // 1. Get the session from the endpoint of API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);
    // 2. Create checkout form + charge the credit card
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

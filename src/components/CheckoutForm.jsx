import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider'
import useAxiosPublic from '../hooks/useAxiosPublic'

const CheckoutForm = ({totalPrice=500, paymentEnable=true}) => {
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useContext(AuthContext)
  const [clientSecret, setClientSecret] = useState('')
  const [formError, setFormError] = useState('')
  const [transactionId, setTransactionId] = useState('')

  const axiosPublic = useAxiosPublic()

  // const totalPrice = 500 // This should be passed as a prop or calculated based on the cart items

  useEffect(() => {
    const paymentIntent = async () => {
      const response = await axiosPublic.post('/create-payment-intent', {
        price: totalPrice
      })
      console.log(response.data.clientSecret)
      setClientSecret(response.data.clientSecret)
    }
    paymentIntent()
    console.log(totalPrice)
  }, [totalPrice])

  // handleSubmit function
  const handleSubmit = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      // stripe.js has not loaded yet. make sure to disable
      //form submission until stripe.js has loaded
      return
    }

    const card = elements.getElement(CardElement)
    if (!card) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log(error)
      setFormError(error.message)
    } else {
      console.log('Payment Method: ', paymentMethod)
      setFormError('')
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'Anonymous',
            email: user?.email || 'Anonymous'
          }
        }
      })
    if (confirmError) {
      console.log('Confirm error: ', confirmError)
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Payment Operation Failed.',
        showConfirmButton: false,
        footer: 'See you later.',
        timer: 2000
      })
    } else {
      console.log('paymentIntent: ', paymentIntent)
      setTransactionId(paymentIntent.id)
      if (paymentIntent.status === 'succeeded') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payment Successful.',
          showConfirmButton: false,
          footer: 'See you later.',
          timer: 2000
        })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      <p className="mb-2 text-lg font-semibold">
        Pay: <span className="font-bold">${totalPrice}</span>
      </p>
      <CardElement
        className="max-w-2xl border border-black p-5 w-full rounded-lg mt-5 bg-white"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: 'black'
              }
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
      <p className="text-sm text-red-600 my-2">{formError}</p>
      {transactionId && (
        <p className="text-sm text-green-800 my-2">{transactionId}</p>
      )}
      <button
        className={`btn btn-wide mt-5 bg-[#E38580] text-white font-bold py-2 px-5 rounded transition-colors duration-200 ${
          !stripe || !clientSecret || !user || !paymentEnable
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-[#d16c67] cursor-pointer'
        }`}
        type="submit"
        disabled={!stripe || !clientSecret || !user || !paymentEnable}
      >
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm
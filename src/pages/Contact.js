import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const [isSending, setIsSending] = useState(false); // Track loading state
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = async (data) => {
    setIsSending(true); // Start loading animation
    setStatusMessage(null); // Reset status message

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log("Success:", result.text);
      setStatusMessage({ type: 'success', text: 'Message sent successfully!'})
      reset();
    } catch (error) {
      console.error("Error", error.text);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.'})
    } finally {
      setIsSending(false); // Stop loading animation
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    className='min-h-screen py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'
    >
      <div className='mx-3'>
        <h2 className='text-3xl text-black dark:text-white font-bold mb-6 text-center'>
          Contact Me
        </h2>
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className='max-w-md mx-auto'>
          <div className='mb-4'>
            <label className='block text-gray-700 dark:text-gray-300 text-sm md:text-lg font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
            {...register('name', { required: 'Name is required' })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Your Name'
            autoComplete='name'
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>

          {/*Email Section */}
          <div className="mb-4">
            <label className='block text-gray-700 dark:text-gray-300 text-sm md:text-lg font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id='email'
              type='email'
              placeholder='Your Email'
              autoComplete='email'
            />
            {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
          </div>

          {/* Message section */}
          <div className='mb-6'>
            <label className='block text-gray-700 dark:text-gray-300 text-sm md:text-lg font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required '})}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              placeholder='Your Message'
              rows='5'
            />
            {errors.message && <p className='text-red-500 text-xs italic'>{errors.message.message}</p>}
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p
              className={`text center text-sm font-medium mb-4 ${
                statusMessage.type === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {statusMessage.text}
            </p>
          )}
          
          {/*Send message div*/}
          <div className='flex items-center justify-between'>
            <button
              className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2'
              type='submit'
              disabled={isSending} // Disable button while sending
            >
                {isSending ? (
                  <>
                    <svg
                      className='animate-spin h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v8H4z'
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                  ) : 'Send Message'}
              </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact;
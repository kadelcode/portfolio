import React, { useRef } from 'react';
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

  const sendEmail = (data) => {
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      (result) => {
        console.log(result.text);
        reset(); // Reset the form after successful submission
      },
      (error) => {
        console.log(error.text);
      }
    );
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
            <label className='block text-gray-700 dark:text-gray-300 text-sm md:text-lg font-bold mb-2'>
              Name
            </label>
            <input
            {...register('name', { required: 'Name is required' })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Your Name'
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact;
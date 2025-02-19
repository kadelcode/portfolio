import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const form = useRef();

  const sendEmail = (formData) => {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        reset();
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <form ref={form} onSubmit={handleSubmit(sendEmail)} className="max-w-md w-full">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input {...register('name', { required: true })} className="w-full border rounded p-2" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        {/* ... other form fields (email, message) */}
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Send Message</button>
      </form>
    </motion.div>
  );
};

export default Contact;
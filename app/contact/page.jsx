'use client';

import { useState } from 'react';

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Message sent!');
  };

  return (
    <div className="mt-40 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="text-lg text-gray-700">
            Whether you have a project in mind or just want to say hello, we'd
            love to hear from you.
          </p>
          <div className="space-y-2 text-gray-600 text-base">
            <p className="font-semibold">CNLA Architects</p>
            <p>123 Design Street</p>
            <p>1213 AB Westlaren</p>
            <p>The Netherlands</p>
            <p className="pt-2">
              Email:{' '}
              <a
                href="mailto:info@cnla.com"
                className="text-black hover:underline"
              >
                info@cnla.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+31201234567" className="text-black hover:underline">
                +31 50 123 1234
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Contact Form
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

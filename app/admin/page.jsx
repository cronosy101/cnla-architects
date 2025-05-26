'use client';
import { useState, useEffect } from 'react';
import { getUser } from '@/lib/actions';
import Dashboard from '@/components/Dashboard';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState({});

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setShowLogin(false);
    }
  }, []);

  // On successful login
  useEffect(() => {
    if (user && email === user.email && password === user.password) {
      console.log('access granted');
      localStorage.setItem('user', JSON.stringify(user));
      setShowLogin(false);
    }
  }, [user, email, password]);

  async function handleSubmit(e) {
    e.preventDefault();
    const fetchedUser = await getUser(email);
    setUser(fetchedUser);
  }

  return showLogin ? (
    <form onSubmit={handleSubmit} className="mt-52 space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full px-3 py-2 rounded"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full px-3 py-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="ml-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </form>
  ) : (
    <div className="mt-18 text-lg">
      <Dashboard />
    </div>
  );
}

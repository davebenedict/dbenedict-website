'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import GlowCard from '@/components/GlowCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <MatrixBackground />
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" style={{ zIndex: 1 }} />
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-950/50 via-blue-950/50 to-black pointer-events-none" style={{ zIndex: 2 }} />
      
      <div className="relative" style={{ zIndex: 3 }}>
      <nav className="bg-black/50 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/personal">
                <h1 className="text-2xl font-bold text-cyan-400 text-glow animate-glow-pulse">DAVID BENEDICT</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <Link href="/personal" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Home
                </Link>
                <Link href="/personal/about" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  About
                </Link>
                <Link href="/personal/blog" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Blog
                </Link>
                <Link href="/personal/contact" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-3 py-2 rounded-md text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <GlowCard glowColor="purple">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-bold text-cyan-400 mb-6 font-mono">
              [ ESTABLISH CONNECTION ]
            </h1>
            
            <p className="text-lg text-gray-300 mb-8">
              Initiate communication protocol. Fill out the form below to transmit your message.
            </p>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded-md font-mono">
                ✓ TRANSMISSION SUCCESSFUL - Message received. Response incoming.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-md font-mono">
                ✗ TRANSMISSION FAILED - {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  IDENTITY
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                  placeholder="Enter designation"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  TRANSMISSION ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                  placeholder="user@domain.net"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  SUBJECT CODE
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                  placeholder="Message classification"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                  MESSAGE PAYLOAD
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500"
                  placeholder="Enter transmission data..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex justify-center py-3 px-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                >
                  {status === 'loading' ? '[ TRANSMITTING... ]' : '[ TRANSMIT MESSAGE ]'}
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 font-mono">
                [ ALTERNATE CHANNELS ]
              </h2>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <span className="font-medium text-cyan-400">Direct Link:</span>{' '}
                  <a 
                    href="mailto:dave@dbenedict.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    dave@dbenedict.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-cyan-400">Network:</span>{' '}
                  <a 
                    href="https://www.linkedin.com/in/dave-benedict/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/dave-benedict
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-cyan-400">Social:</span>{' '}
                  <a 
                    href="https://facebook.com/davben72" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    facebook.com/davben72
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-cyan-400">Visual Feed:</span>{' '}
                  <a 
                    href="https://instagram.com/dave_benedict" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    instagram.com/dave_benedict
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="font-medium text-cyan-400">Repository:</span>{' '}
                  <a 
                    href="https://github.com/davebenedict" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    github.com/davebenedict
                  </a>
                </p>
              </div>
            </div>
          </div>
        </GlowCard>
      </main>

      <footer className="bg-black/50 backdrop-blur-md border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; 2026 <span className="text-cyan-400">David Benedict</span>. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2lRZLzJ4_Rc38tF06bP6tu9DD8jE6mtxCmqx7ARYXPP0_SA/formResponse';
      const formParams = new URLSearchParams();
      formParams.append('entry.73153043', formData.name);        // Name Last Name
      formParams.append('entry.800932274', formData.email);      // Email
      formParams.append('entry.1776974724', formData.subject);   // Subject
      formParams.append('entry.1067904850', formData.message);   // Message

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString()
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="iletisim"
      className="py-16 min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl font-bold text-white">📩 İletişim</h2>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl shadow-2xl p-8 border border-gray-700 backdrop-blur-sm" style={{ backgroundColor: '#00000066' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-200 mb-3">
                  <svg className="w-4 h-4 mr-2 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Tam Adınız
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4285f4] focus:border-[#4285f4] transition-all duration-200 text-white placeholder-gray-400"
                  style={{ backgroundColor: '#191B1C' }}
                  placeholder="Adınızı ve soyadınızı yazın"
                />
              </div>
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-200 mb-3">
                  <svg className="w-4 h-4 mr-2 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  E-Posta Adresiniz
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4285f4] focus:border-[#4285f4] transition-all duration-200 text-white placeholder-gray-400"
                  style={{ backgroundColor: '#191B1C' }}
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="flex items-center text-sm font-medium text-gray-200 mb-3">
                  <svg className="w-4 h-4 mr-2 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Konu
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4285f4] focus:border-[#4285f4] transition-all duration-200 text-white placeholder-gray-400"
                  style={{ backgroundColor: '#191B1C' }}
                  placeholder="Mesajınızın konusunu yazın"
                />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-200 mb-3">
                  <svg className="w-4 h-4 mr-2 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Mesajınız
                  <span className="text-red-400 ml-1">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#4285f4] focus:border-[#4285f4] transition-all duration-200 text-white placeholder-gray-400 resize-none"
                    style={{ backgroundColor: '#191B1C' }}
                    placeholder="Mesajınızı buraya yazın..."
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                    {formData.message.length} / 400
                  </div>
                </div>
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-300 font-medium">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-300 font-medium">Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</p>
                  </div>
                </div>
              )}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Gönderiliyor...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Mesajı Gönder
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              Bu form tamamen güvenlidir ve bilgileriniz gizli tutulur.
              <br />
              Genellikle 24 saat içinde yanıt veriyoruz.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <svg className="w-4 h-4 text-[#4285f4]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 11.215c-.3-.5-.8-.9-1.4-.9-.6 0-1.1.4-1.4.9-.3.5-.3 1.1 0 1.6.3.5.8.9 1.4.9.6 0 1.1-.4 1.4-.9.3-.5.3-1.1 0-1.6z" />
                <path d="M21.147 9.639c-.347-.9-1.035-1.677-1.97-2.23-.934-.553-2.017-.834-3.1-.806l-.015-.036c-.31-.76-.749-1.448-1.31-2.04-.563-.593-1.248-1.066-2.04-1.404-.792-.339-1.66-.535-2.555-.576-.894-.041-1.787.087-2.633.378-.845.29-1.625.735-2.308 1.313-.683.579-1.264 1.283-1.718 2.074-.454.792-.774 1.662-.946 2.56-.172.899-.194 1.813-.065 2.716.129.903.416 1.777.847 2.598.431.82 1.003 1.578 1.69 2.237.686.66 1.479 1.206 2.345 1.615.866.408 1.797.675 2.748.787.951.112 1.91.068 2.835-.129.925-.197 1.807-.55 2.609-1.043.802-.494 1.515-1.121 2.107-1.852.592-.731 1.058-1.549 1.378-2.418.32-.868.491-1.781.506-2.698.015-.917-.128-1.835-.421-2.694z" />
              </svg>
              <span className="text-xs text-gray-500">Google Forms ile güçlendirilmiştir • SSL Korumalı</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

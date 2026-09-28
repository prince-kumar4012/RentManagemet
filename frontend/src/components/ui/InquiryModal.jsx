'use client';

import { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function InquiryModal({ isOpen, onClose, initialService = 'Rent' }) {
  const [service, setService] = useState(initialService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Chander Vihar');
  const [bhk, setBhk] = useState('2 BHK');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hi CVP Exchange! My name is ${name}. I am looking to ${service.toUpperCase()} a property in ${locality} (${bhk}). Phone: ${phone}. Please get in touch.`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=${encoded}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-dpxNavy to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-dpxTeal text-xs font-black uppercase tracking-widest mb-1">
            <Building2 className="w-4 h-4" />
            Quick Property Inquiry
          </div>
          <h3 className="text-xl font-black text-white">Apni Zaroorat Batao</h3>
          <p className="text-slate-400 text-xs mt-1">
            Chander Vihar &amp; Nilothi — Seedha Connect Karo
          </p>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-dpxNavy mb-2">Inquiry Submitted!</h4>
            <p className="text-slate-600 text-sm mb-6">
              Opening WhatsApp to instantly send your details to <strong>{SITE_CONFIG.shortName}</strong>.
            </p>
            <button
              onClick={handleReset}
              className="btn-dpx-primary w-full py-3.5 rounded-2xl font-black text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Service Toggle */}
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                I want to:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Buy', 'Sell', 'Rent', 'Godown', 'Shop', 'Help'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setService(item)}
                    className={`py-2.5 rounded-xl text-xs font-black transition border ${
                      service === item
                        ? 'bg-dpxTeal text-white border-dpxTeal shadow-md'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* BHK & Locality Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                  Locality
                </label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm font-semibold focus:outline-none focus:border-dpxTeal bg-slate-50"
                >
                  <option value="Chander Vihar">Chander Vihar</option>
                  <option value="Nilothi">Nilothi</option>
                  <option value="Teacher Vihar">Teacher Vihar</option>
                  <option value="Uday Vihar">Uday Vihar</option>
                  <option value="Mundka">Mundka</option>
                  <option value="Nilothi Extn">Nilothi Extn</option>
                  <option value="Paschim Vihar">Paschim Vihar</option>
                  <option value="Uttam Nagar">Uttam Nagar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                  Property Size
                </label>
                <select
                  value={bhk}
                  onChange={(e) => setBhk(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm font-semibold focus:outline-none focus:border-dpxTeal bg-slate-50"
                >
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="Plot / Commercial">Plot / Commercial</option>
                  <option value="Godown/Shed">Godown/Shed</option>
                  <option value="Shop/Office">Shop/Office</option>
                </select>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:border-dpxTeal bg-slate-50"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-1">
                10-Digit Mobile Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder={`e.g. ${SITE_CONFIG.rawPhone}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:border-dpxTeal bg-slate-50"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageCircle className="w-5 h-5" />
                Connect via WhatsApp
              </button>
              <p className="text-[11px] text-center text-slate-400 font-semibold">
                Instant connection. No spam, no registration needed.
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}

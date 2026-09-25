'use client';

import {
  Phone, MessageCircle, Mail, MapPin,
  Instagram, Facebook, Youtube, ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export default function ContactDetailsSection({ content, isHi }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="border-l-4 border-dpxTeal pl-4 mb-8">
            <p className="text-dpxTeal font-black text-xs tracking-widest uppercase">
              {content.reach_label}
            </p>
          </div>
          <div className="space-y-5 mb-10">
            {content.contacts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-5 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:shadow-md transition-all">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-dpxTealLight text-dpxTeal"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-dpxNavy font-black text-lg hover:text-dpxTeal transition block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dpxNavy font-black text-lg">{item.value}</p>
                    )}
                    <p className="text-slate-400 text-xs mt-1 font-normal">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-8 text-dpxNavy shadow-xs">
            <h3 className="text-xl font-black mb-5">{content.start_title}</h3>
            <div className="space-y-4 mb-5">
              {content.start_steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-dpxTealLight text-dpxTeal font-black text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-600 text-sm leading-snug font-normal">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs italic pt-4 border-t border-slate-200 font-normal">
              {content.start_note}
            </p>
          </div>
        </div>

        <div>
          <div className="border-l-4 border-dpxTeal pl-4 mb-8">
            <p className="text-dpxTeal font-black text-xs tracking-widest uppercase">
              {isHi ? 'अभी शुरू करें' : 'Start Right Now'}
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="flex items-center gap-4 bg-dpxOrange hover:bg-dpxOrangeDark text-white rounded-2xl px-7 py-5 font-black text-lg transition shadow-lg shadow-orange-500/20 hover:-translate-y-0.5"
            >
              <Phone className="w-7 h-7 shrink-0" />
              <div>
                <p>{content.cta_call}</p>
                <p className="text-white/70 text-sm font-bold">{SITE_CONFIG.rawPhone}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl px-7 py-5 font-black text-lg transition shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-7 h-7 shrink-0" />
              <div>
                <p>{content.cta_whatsapp}</p>
                <p className="text-white/70 text-sm font-bold">{SITE_CONFIG.rawWhatsapp}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-4 bg-dpxTeal hover:bg-dpxTealDark text-white rounded-2xl px-7 py-5 font-black text-lg transition shadow-lg shadow-teal-500/20 hover:-translate-y-0.5"
            >
              <Mail className="w-7 h-7 shrink-0" />
              <div>
                <p>{content.cta_email}</p>
                <p className="text-white/70 text-sm font-bold">{SITE_CONFIG.email}</p>
              </div>
            </a>
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80">
            <p className="font-black text-dpxNavy mb-1">{content.social_title}</p>
            <p className="text-slate-500 text-sm mb-6 font-normal">{content.social_body}</p>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-dpxTeal hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shrink-0 text-white">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-dpxNavy text-sm">{SITE_CONFIG.socials.instagram.handle}</p>
                  <p className="text-slate-400 text-xs font-normal">Instagram</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 ml-auto" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-dpxTeal hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 text-white">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-dpxNavy text-sm">{SITE_CONFIG.socials.facebook.handle}</p>
                  <p className="text-slate-400 text-xs font-normal">Facebook</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 ml-auto" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4 hover:border-dpxTeal hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0 text-white">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-dpxNavy text-sm">{SITE_CONFIG.socials.youtube.handle}</p>
                  <p className="text-slate-400 text-xs font-normal">YouTube</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

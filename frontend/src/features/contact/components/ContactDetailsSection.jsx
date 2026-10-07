'use client';

import { ArrowRight } from 'lucide-react';
import {
  PhoneIcon, WhatsAppIcon, EmailIcon, InstagramIcon, FacebookIcon, YouTubeIcon
} from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export default function ContactDetailsSection({ content, isHi }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {content.reach_label}
          </p>

          <div className="space-y-4 mb-10">
            {content.contacts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-[24px] bg-slate-50/70 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 bg-cyan-100/90 text-[#00A3AD] border border-cyan-200/60 shadow-2xs mt-0.5"
                  >
                    <Icon className="w-5.5 h-5.5 fill-current" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-[#0F172A] font-extrabold text-base sm:text-lg hover:text-[#00A3AD] transition block truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#0F172A] font-extrabold text-base sm:text-lg truncate">{item.value}</p>
                    )}
                    <p className="text-slate-500 text-xs mt-0.5 font-normal">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-100 text-[#0F172A]">
            <h3 className="text-xl font-extrabold mb-5 tracking-tight">{content.start_title}</h3>
            <div className="space-y-3.5 mb-5">
              {content.start_steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-7 h-7 rounded-xl bg-[#00A3AD] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    0{i + 1}
                  </div>
                  <span className="text-slate-700 text-sm leading-snug font-semibold mt-0.5">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs italic pt-2 font-normal">
              {content.start_note}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#00A3AD] text-xs font-black uppercase tracking-widest mb-3">
            {isHi ? 'अभी शुरू करें' : 'Start Right Now'}
          </p>

          <div className="space-y-4 mb-10">
            <a
              href={`tel:${SITE_CONFIG.rawPhone}`}
              className="flex items-center gap-4 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full px-7 py-4 font-extrabold text-base sm:text-lg transition-all shadow-md hover:shadow-lg text-left"
            >
              <PhoneIcon className="w-6 h-6 shrink-0 fill-current text-white" />
              <div>
                <p>{content.cta_call}</p>
                <p className="text-slate-300 text-xs sm:text-sm font-semibold">{SITE_CONFIG.rawPhone}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-7 py-4 font-extrabold text-base sm:text-lg transition-all shadow-md hover:shadow-lg text-left"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0 fill-current text-white" />
              <div>
                <p>{content.cta_whatsapp}</p>
                <p className="text-white/90 text-xs sm:text-sm font-semibold">{SITE_CONFIG.rawWhatsapp}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-4 bg-[#00A3AD] hover:bg-[#008A93] text-white rounded-full px-7 py-4 font-extrabold text-base sm:text-lg transition-all shadow-md hover:shadow-lg text-left"
            >
              <EmailIcon className="w-6 h-6 shrink-0 fill-current text-white" />
              <div>
                <p>{content.cta_email}</p>
                <p className="text-cyan-100 text-xs sm:text-sm font-semibold">{SITE_CONFIG.email}</p>
              </div>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="font-extrabold text-[#0F172A] text-lg mb-1 tracking-tight">{content.social_title}</p>
            <p className="text-slate-500 text-xs sm:text-sm mb-6 font-normal">{content.social_body}</p>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-50/80 rounded-[20px] p-4 border border-slate-200/80 hover:border-pink-300 hover:shadow-md transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center shrink-0 text-white shadow-2xs">
                  <InstagramIcon className="w-5 h-5 fill-current text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-[#0F172A] text-sm">{SITE_CONFIG.socials.instagram.handle}</p>
                  <p className="text-slate-400 text-xs font-normal">Instagram</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-50/80 rounded-[20px] p-4 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center shrink-0 text-white shadow-2xs">
                  <FacebookIcon className="w-5 h-5 fill-current text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-[#0F172A] text-sm">{SITE_CONFIG.socials.facebook.handle}</p>
                  <p className="text-slate-400 text-xs font-normal">Facebook Page</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-50/80 rounded-[20px] p-4 border border-slate-200/80 hover:border-red-300 hover:shadow-md transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0 text-white shadow-2xs">
                  <YouTubeIcon className="w-5 h-5 fill-current text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-[#0F172A] text-sm">{SITE_CONFIG.socials.youtube.handle}</p>
                  <p className="text-slate-400 text-xs font-normal">YouTube Channel</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCtaSection({ content }) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-dpxNavy mb-4 tracking-tight">{content.cta_title}</h2>
        <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">{content.cta_body}</p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-dpxTeal hover:bg-dpxTealDark text-white px-8 py-3.5 rounded-xl text-sm font-bold transition"
          >
            <span>{content.cta_btn1}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

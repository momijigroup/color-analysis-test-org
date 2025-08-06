"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What is AI color analysis?",
    answer:
      "AI color analysis utilizes advanced algorithms to evaluate your unique features and determine optimal color selections. Our system analyzes skin tone, eye color, and hair color to generate a personalized color palette tailored to your specific characteristics.",
  },
  {
    question: "How does the color palette quiz work?",
    answer:
      "The assessment process involves responding to comprehensive questions about your features and preferences, or uploading a photograph. Our AI technology processes this information to generate a customized color palette suitable for clothing, makeup, and styling applications.",
  },
  {
    question: "Why should I use an AI stylist for color analysis?",
    answer:
      "Our AI system has been trained on extensive datasets from professional color consultants and can identify subtle details about your coloring with high precision. This provides you with professional-grade color analysis results available instantly.",
  },
  {
    question: "What is a personal color palette?",
    answer:
      "A personal color palette is a curated collection of colors specifically selected to complement your natural features. These colors are determined based on your unique skin tone, hair color, and eye color to enhance your overall appearance.",
  },
  {
    question: "Can I trust online color analysis results?",
    answer:
      "Our AI system has been validated through analysis of over 355,000 users and demonstrates high accuracy rates. The system has been refined to provide reliable color recommendations that you can confidently implement in your styling choices.",
  },
  {
    question: "Do I need to upload a photo for color analysis?",
    answer:
      "Photo upload is optional for the analysis process. While comprehensive results can be obtained through questionnaire responses alone, uploading a photograph allows for more precise analysis of your unique features and undertones.",
  },
  {
    question: "How can knowing my best colors improve my style?",
    answer:
      "Understanding your optimal color palette streamlines the selection process for clothing and accessories, resulting in a more cohesive wardrobe. This knowledge enables more confident styling choices and ensures consistent enhancement of your natural features.",
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#f8fafc] py-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
          }))
        }) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        {/* Left: Heading */}
        <div className="md:w-1/3 flex-shrink-0 flex items-start justify-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight md:leading-none">
            <span className="block">Frequently</span>
            <span className="block">Asked</span>
            <span className="block">Questions</span>
          </h2>
        </div>
        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full bg-white rounded-2xl shadow-sm p-0 divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center text-lg font-medium text-gray-900 hover:bg-gray-50 transition"
                onClick={() => setOpen(open === idx ? -1 : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <span className={`ml-4 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-5 text-gray-600 text-base transition-all duration-300 ease-in-out ${open === idx ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
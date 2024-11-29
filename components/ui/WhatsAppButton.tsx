import React from 'react';
import Link from 'next/link';
import WhatsApp from '../icons/WhatsApp';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/85265016890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA56] transition-all duration-300 rounded-full p-3 shadow-lg hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp className="w-8 h-8 text-white" />
    </Link>
  );
};

export default WhatsAppButton;

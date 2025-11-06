"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function TermsBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó los términos
    const termsAccepted = typeof window !== 'undefined' ? localStorage.getItem('termsAccepted') : null;
    if (termsAccepted !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Guardar en localStorage que el usuario aceptó los términos
    if (typeof window !== 'undefined') {
      localStorage.setItem('termsAccepted', 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Al usar este sitio web, aceptas nuestros{' '}
          <Link 
            href="/terms-conditions" 
            className="text-blue-600 hover:underline font-medium"
            target="_blank"
          >
            Términos y Condiciones
          </Link>
          .
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/terms-conditions" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Ver más
          </Link>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-green-300 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Aceptar
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
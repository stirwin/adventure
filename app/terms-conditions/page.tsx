import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Términos y Condiciones
          </h1>
          
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="prose prose-green max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Política de Privacidad y Términos de Uso
            </h2>
            
            <p className="text-gray-700 mb-6">
              Esta Política de Privacidad (o Política de Tratamiento de la Información) y Términos de Uso aplica a www.adventurebycolombia.com
            </p>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introducción</h3>
                <p className="text-gray-700 mb-4">
                  Bienvenido a Adventure by Colombia. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso, así como con nuestra política de privacidad.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Uso del Sitio Web</h3>
                <p className="text-gray-700 mb-4">
                  El contenido de este sitio web es solo para fines informativos. Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento sin previo aviso.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Privacidad</h3>
                <p className="text-gray-700 mb-4">
                  Respetamos su privacidad y nos comprometemos a proteger su información personal. Solo recopilamos información que usted nos proporciona voluntariamente a través de formularios de contacto o suscripción.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Propiedad Intelectual</h3>
                <p className="text-gray-700 mb-4">
                  Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseño, es propiedad de Adventure by Colombia y está protegido por las leyes de propiedad intelectual.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Limitación de Responsabilidad</h3>
                <p className="text-gray-700 mb-4">
                  No nos hacemos responsables por daños directos, indirectos, incidentales o consecuentes que puedan surgir del uso o la imposibilidad de uso de este sitio web.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Enlaces a Terceros</h3>
                <p className="text-gray-700 mb-4">
                  Nuestro sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido de estos sitios y no asumimos responsabilidad por ellos.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Modificaciones</h3>
                <p className="text-gray-700 mb-4">
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Contacto</h3>
                <p className="text-gray-700">
                  Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos a través de nuestro formulario de contacto o en la siguiente dirección de correo electrónico:
                </p>
                <a 
                  href="mailto:adventurebycolombia@gmail.com" 
                  className="text-green-500 hover:underline"
                >
                  adventurebycolombia@gmail.com
                </a>
              </section>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Al utilizar nuestro sitio web, usted acepta nuestra política de privacidad y términos de uso.
              </p>
              <div className="mt-4">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  ← Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
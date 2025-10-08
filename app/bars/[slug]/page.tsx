import { notFound } from 'next/navigation';
import Image from 'next/image';
import {  MapPin, Music, Tag } from 'lucide-react';
import { bars } from '@/data/bars';

interface BarPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateStaticParams() {
  return bars.map((bar) => ({
    slug: bar.slug,
  }));
}

export default async function BarPage({ params }: BarPageProps) {
  const { slug } = await params;
  const bar = bars.find((b) => b.slug === slug);
  if (!bar) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
        {/* Hero section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={bar.image}
            alt={bar.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{bar.name}</h1>
            <div className="flex items-center space-x-4 text-sm">
              {bar.neighborhood && (
                <span className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4 text-amber-500" />
                  {bar.neighborhood}
                </span>
              )}
              {bar.priceRange && (
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                  {bar.priceRange}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {bar.description || bar.shortDescription}
              </p>
              
              <div className="space-y-4">
                {bar.music && bar.music.length > 0 && (
                  <div>
                    <div className="flex items-center mb-2">
                      <Music className="mr-2 h-5 w-5 text-amber-500" />
                      <h3 className="text-lg font-semibold">Music</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {bar.music.map((genre) => (
                        <span 
                          key={genre} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {bar.tags && bar.tags.length > 0 && (
                  <div>
                    <div className="flex items-center mb-2">
                      <Tag className="mr-2 h-5 w-5 text-amber-500" />
                      <h3 className="text-lg font-semibold">Features</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {bar.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm border border-amber-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Gallery section - Placeholder for when you add gallery images */}
            {bar.gallery && bar.gallery.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {bar.gallery.map((img, idx) => (
                    <div key={idx} className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${bar.name} - Photo ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-500 w-24 flex-shrink-0">Type</span>
                  <span className="capitalize">{bar.type}</span>
                </li>
                {bar.neighborhood && (
                  <li className="flex items-start">
                    <span className="text-gray-500 w-24 flex-shrink-0">Area</span>
                    <span>{bar.neighborhood}</span>
                  </li>
                )}
                {bar.priceRange && (
                  <li className="flex items-start">
                    <span className="text-gray-500 w-24 flex-shrink-0">Price</span>
                    <span>{bar.priceRange}</span>
                  </li>
                )}
                
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-2">Good to know</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Reservations recommended on weekends</li>
                <li>• Dress code: {bar.tags?.includes('dressy') ? 'Smart casual' : 'Casual'}</li>
                <li>• Best time to visit: {bar.type === 'club' ? 'After 11 PM' : 'Evenings'}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export async function generateMetadata({ params }: BarPageProps) {
  const { slug } = await params; // 👈 también aquí
  const bar = bars.find((b) => b.slug === slug);

  if (!bar) {
    return {
      title: 'Bar not found',
    };
  }

  return {
    title: `${bar.name} | Nightlife in Cartagena`,
    description: bar.shortDescription,
    openGraph: {
      images: [bar.image],
    },
  };
}

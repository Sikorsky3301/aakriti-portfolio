import React, { useState, useEffect } from 'react';
import { Camera, Mail, MapPin, Instagram, Twitter } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "Koi Fish Art",
    image: "https://i.ibb.co/nNkRhrJn/Whats-App-Image-2025-02-22-at-16-17-05-05f76eab.jpg",
    category: "Nature"
  },
  {
    id: 2,
    title: "Van Gogh Painting",
    image: "https://i.ibb.co/JRy5Grv6/Whats-App-Image-2025-02-22-at-16-17-05-fa219411.jpg",
    category: "Nature"
  },
  {
    id: 3,
    title: "Abstract Thoughts",
    image: "https://i.ibb.co/849DvnPm/Whats-App-Image-2025-02-22-at-16-17-04-2e9d7f45.jpg",
    category: "Life"
  },
  {
    id: 4,
    title: "God",
    image: "https://i.ibb.co/N2sTsLRF/Whats-App-Image-2025-02-22-at-16-19-20-12a419e3.jpg",
    category: "Nature"
  },
  {
    id: 5,
    title: "Van Gogh T-Shirt",
    image: "https://i.ibb.co/spsGyCJj/Whats-App-Image-2025-02-22-at-16-17-04-0d536b2f.jpg",
    category: "Nature"
  },
  {
    id: 6,
    title: "Wilderness",
    image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&q=80&w=800",
    category: "Photography"
  }
];

const backgroundImages = [
  'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  'https://images.unsplash.com/photo-1588097268475-525cdc0602b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function App() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] md:h-[500px] transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center md:justify-start">
          <div className="w-full max-w-3xl flex flex-col md:flex-row md:items-center gap-8 items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl backdrop-blur-sm">
              <img
                src="https://i.ibb.co/hRTPcSL7/Whats-App-Image-2025-02-22-at-16-17-08-dfd55ccc.jpg"
                alt="Artist profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tight"><a href="https://www.instagram.com/aak_ima?igsh=MWlsdDgycmNicHV1cA==">Aakriti Kumari</a></h1>
              <p className="text-xl md:text-2xl opacity-90 mb-4 md:mb-6 font-light">Creative Artist and Designer</p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full w-full sm:w-auto justify-center">
                  <Camera size={20} />
                  <span>Artist</span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full w-full sm:w-auto justify-center">
                  <MapPin size={20} />
                  <span>Greater Noida, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center md:justify-start gap-8">
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition-colors">
              <Mail size={20} />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <a href="https://www.instagram.com/aak_ima?igsh=MWlsdDgycmNicHV1cA==" className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition-colors">
              <Instagram size={20} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-500 transition-colors">
              <Twitter size={20} />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 md:mb-2">{artwork.title}</h3>
                  <p className="text-xs md:text-sm text-gray-200 font-light tracking-wider uppercase">{artwork.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base font-light tracking-wider">© 2025 Aakriti Kumari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
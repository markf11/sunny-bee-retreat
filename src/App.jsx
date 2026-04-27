import React, { useState } from 'react';
import { 
  Utensils, 
  Flame, 
  Bath, 
  Car, 
  MapPin, 
  Gamepad2, 
  Info,
  Menu,
  X,
  ChevronRight,
  Calendar,
  Users,
  Mail
} from 'lucide-react';

// Refined, minimalist logo for a premium look
const MinimalBeeLogo = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className="stroke-amber-600 fill-amber-50" />
    <ellipse cx="12" cy="12" rx="3" ry="4" className="fill-amber-400 stroke-amber-600" />
    <path d="M9.5 11.5h5" className="stroke-amber-600" />
    <path d="M9.5 13.5h5" className="stroke-amber-600" />
    <path d="M11 9c-2-2-4-1-4 1s1 2 4 2" className="fill-white stroke-amber-600" />
    <path d="M13 9c2-2 4-1 4 1s-1 2-4 2" className="fill-white stroke-amber-600" />
    <path d="M12 16v1" className="stroke-amber-600" />
  </svg>
);

// Image fallback component to handle broken paths in the preview environment
const SafeImage = ({ src, alt, className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-stone-200 text-stone-500 text-center p-4 ${className}`}>
        <span className="text-sm font-bold block mb-1">Image: {src}</span>
        <span className="text-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('All');

  // Complete portfolio array with all 34 provided images categorized
  const portfolioItems = [
    // Exterior
    { src: '18571.jpg', category: 'Exterior', alt: 'Sunny Bee Retreat Exterior' },
    { src: '18566.jpg', category: 'Exterior', alt: 'Caravan entrance and steps' },
    { src: '18562.jpg', category: 'Exterior', alt: 'Caravan side and outdoor seating' },
    
    // Interior - Living Space
    { src: '18569.jpg', category: 'Interior', alt: 'Cosy living room and diner' },
    { src: '18572.jpg', category: 'Interior', alt: 'Cosy living room' },
    { src: '18563.jpg', category: 'Interior', alt: 'Cosy fireplace view' },
    { src: '18560.jpg', category: 'Interior', alt: 'Living room view' },
    { src: '18565.jpg', category: 'Interior', alt: 'Hallway' },
    { src: '18557.jpg', category: 'Interior', alt: 'Kitchen and hallway view' },
    
    // Interior - Kitchen
    { src: '18576.jpg', category: 'Interior', alt: 'Open plan kitchen and diner' },
    { src: '18570.jpg', category: 'Interior', alt: 'Kitchen area and cooker' },
    { src: '18556.jpg', category: 'Interior', alt: 'Kitchen sink and counter' },
    
    // Interior - Bedrooms
    { src: '18567.jpg', category: 'Interior', alt: 'Double bedroom' },
    { src: '18555.jpg', category: 'Interior', alt: 'Double bedroom with window' },
    { src: '18586.jpg', category: 'Interior', alt: 'Twin bedroom' },
    { src: '18573.jpg', category: 'Interior', alt: 'Twin bedroom' },
    { src: '18578.jpg', category: 'Interior', alt: 'Bedroom with TV' },
    { src: '18577.jpg', category: 'Interior', alt: 'Bedroom layout' },
    
    // Interior - Bathrooms
    { src: '18588.jpg', category: 'Interior', alt: 'Shower and sink' },
    { src: '18584.jpg', category: 'Interior', alt: 'Inside shower' },
    { src: '18587.jpg', category: 'Interior', alt: 'Separate toilet' },
    { src: '18581.jpg', category: 'Interior', alt: 'Separate toilet facility' },
    { src: '18583.jpg', category: 'Interior', alt: 'Separate toilet' },
    
    // Park & Amenities
    { src: '18582.jpg', category: 'Park', alt: 'Swimming pool' },
    { src: '18580.jpg', category: 'Park', alt: 'Climbing walls' },
    { src: '18568.jpg', category: 'Park', alt: 'Outdoor park and slide' },
    { src: '18585.jpg', category: 'Park', alt: 'Outdoor sitting area' },
    { src: '18574.jpg', category: 'Park', alt: 'Outdoor seating area' },
    { src: '18564.jpg', category: 'Park', alt: 'Pirate Crazy Golf' },
    { src: '18561.jpg', category: 'Park', alt: 'Thunderbird Fried Chicken stand' },
    { src: '18559.jpg', category: 'Park', alt: 'Scoops Ice Cream stand' },
    { src: '18558.jpg', category: 'Park', alt: 'Pizza Box stand' },
    { src: '18575.jpg', category: 'Park', alt: 'Southview Park map' },
  ];

  const filteredItems = portfolioFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === portfolioFilter);

  const parkImages = [
    { src: '18582.jpg', alt: 'Swimming pool' },
    { src: '18580.jpg', alt: 'Climbing walls' },
  ];

  const heroExteriorImage = '18571.jpg';

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800">
      
      {/* Premium Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <MinimalBeeLogo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight leading-none">
                  Sunny Bee
                </span>
                <span className="text-sm font-medium text-amber-600 tracking-widest uppercase">
                  Retreat
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center">
              <a href="#about" className="text-slate-600 hover:text-amber-600 text-sm font-semibold tracking-wide transition-colors">THE CARAVAN</a>
              <a href="#features" className="text-slate-600 hover:text-amber-600 text-sm font-semibold tracking-wide transition-colors">AMENITIES</a>
              <a href="#portfolio" className="text-slate-600 hover:text-amber-600 text-sm font-semibold tracking-wide transition-colors">PORTFOLIO</a>
              <a href="#park" className="text-slate-600 hover:text-amber-600 text-sm font-semibold tracking-wide transition-colors">SOUTHVIEW PARK</a>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-sm font-semibold tracking-wide transition-all">
                BOOK NOW
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-4 py-6 space-y-6 shadow-xl absolute w-full">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 font-semibold tracking-wide">THE CARAVAN</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 font-semibold tracking-wide">AMENITIES</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 font-semibold tracking-wide">PORTFOLIO</a>
            <a href="#park" onClick={() => setIsMenuOpen(false)} className="block text-slate-900 font-semibold tracking-wide">SOUTHVIEW PARK</a>
            <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-sm font-semibold tracking-wide mt-4">
              BOOK NOW
            </button>
          </div>
        )}
      </nav>

      {/* Immersive Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <SafeImage 
            src={heroExteriorImage} 
            alt="Sunny Bee Retreat Exterior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-amber-400 font-semibold tracking-[0.2em] uppercase mb-4 text-sm drop-shadow-md">
            Southview Caravan Park, Skegness
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Sunny Bee Retreat
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl drop-shadow font-light">
            An 8-berth cosy caravan in a beautiful, sunny spot that is nice and quiet.
          </p>
        </div>

        {/* Floating Contact Bar (Desktop) */}
        <div className="hidden md:flex absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-sm shadow-2xl w-[90%] max-w-4xl items-center justify-between border border-stone-100 z-20">
          <div className="flex flex-col text-left px-4">
            <h3 className="text-xl font-serif font-bold text-slate-900">Ready to Book Your Stay?</h3>
            <p className="text-slate-500 mt-1">Get in touch directly with the owner to check availability and secure the best rates.</p>
          </div>
          <a href="mailto:Bailey.1984@live.co.uk,nyron89@outlook.com?subject=Booking Inquiry for Sunny Bee Retreat" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-semibold tracking-wide transition-colors whitespace-nowrap ml-4 flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            EMAIL OWNER
          </a>
        </div>
      </section>

      {/* Intro & Location (Mobile Booking Bar alternative) */}
      <section id="about" className="py-20 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Ten Minutes Drive from the Seafront
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Sunny Bee Retreat. Located in a beautiful sunny spot that is nice and quiet with a dedicated park space. A bus is available on site to all local attractions.
          </p>
          
          {/* Mobile Booking Button */}
          <a href="mailto:Bailey.1984@live.co.uk,nyron89@outlook.com?subject=Booking Inquiry for Sunny Bee Retreat" className="md:hidden mt-10 flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-sm font-semibold tracking-wide w-full shadow-lg">
            <Mail className="w-5 h-5 mr-3" />
            EMAIL OWNER TO BOOK
          </a>
        </div>
      </section>

      {/* Premium Amenities Grid */}
      <section id="features" className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Premium Comfort</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Exceptional Amenities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Utensils className="w-6 h-6"/>, title: "Open Plan Kitchen Diner", desc: "Includes all essentials: cooker, microwave, fridge, and hair dryer." },
              { icon: <Gamepad2 className="w-6 h-6"/>, title: "Entertainment", desc: "Smart TVs, PlayStation for kids and games, plus free WiFi." },
              { icon: <Flame className="w-6 h-6"/>, title: "Cosy Living Room", desc: "A cosy living room featuring a fire." },
              { icon: <Bath className="w-6 h-6"/>, title: "Two Bathrooms", desc: "Shower with toilet, plus a separate toilet." },
              { icon: <Car className="w-6 h-6"/>, title: "Park Space", desc: "Dedicated park space available right at the caravan." },
              { icon: <Users className="w-6 h-6"/>, title: "8 Berth & 3 Bedrooms", desc: "Comfortably sleeps up to 8 people across 3 bedrooms." },
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 bg-stone-50 rounded-sm hover:bg-slate-900 hover:text-white transition-all duration-300 border border-stone-100">
                <div className="w-12 h-12 bg-white text-amber-600 rounded-sm flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-white text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 group-hover:text-stone-300 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Portfolio */}
      <section id="portfolio" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Visual Tour</span>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Our Portfolio</h2>
            </div>
            
            {/* Filters */}
            <div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
              {['All', 'Exterior', 'Interior', 'Park'].map(category => (
                <button 
                  key={category}
                  onClick={() => setPortfolioFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                    portfolioFilter === category 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white text-slate-600 hover:bg-amber-100 hover:text-amber-700 shadow-sm border border-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((img, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-sm group cursor-pointer aspect-[4/3] shadow-sm bg-white"
              >
                <SafeImage 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/60 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-1 block drop-shadow-md">{img.category}</span>
                  <p className="text-white font-serif font-medium text-lg drop-shadow-md">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Southview Park Info - Editorial Layout */}
      <section id="park" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Resort Facilities</span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Southview Caravan Park</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                The site has all amenities you could need. A bus is available on site to all local attractions, and it is just a ten minute drive from the seafront.
              </p>
              
              <div className="bg-stone-50 p-6 border-l-4 border-amber-600 mb-10">
                <div className="flex items-start gap-4">
                  <Info className="text-amber-600 w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 font-serif">Extra Cost</h4>
                    <p className="text-slate-600 text-sm">
                      Passes from reception are required to access site amenities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4">
                {[
                  "Swimming", "Fishing", "Climbing walls",
                  "Outdoor sitting area", "Take aways", "Restaurant",
                  "Entertainment area", "Bars", "Arcade", "Shop"
                ].map((amenity, idx) => (                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Images layout */}
            <div className="lg:w-1/2 w-full flex gap-4">
               {parkImages.map((img, idx) => (
                <div key={idx} className={`relative rounded-sm overflow-hidden w-1/2 ${idx === 0 ? 'mt-12' : 'mb-12'} aspect-[3/4] shadow-xl`}>
                  <SafeImage 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <p className="absolute bottom-6 left-6 pr-6 text-white font-serif font-bold text-lg leading-tight">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-slate-900 text-stone-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 items-start border-b border-slate-800 pb-12 mb-8">
            
            <div className="md:col-span-2 flex flex-col items-start">
               <div className="flex items-center space-x-3 mb-6">
                <MinimalBeeLogo className="w-8 h-8 text-white opacity-90" />
                <span className="text-2xl font-serif font-bold text-white">Sunny Bee Retreat</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6 font-light">
                An 8-berth cosy caravan at Southview Caravan Park, Skegness.
              </p>
              <div className="flex items-center gap-2 text-amber-500">
                <MapPin className="w-5 h-5"/> 
                <span className="font-medium text-white">Southview Caravan Park, Skegness</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-serif font-bold mb-6 text-lg">Explore</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">The Caravan</a></li>
                <li><a href="#features" className="hover:text-amber-500 transition-colors">Amenities</a></li>
                <li><a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a></li>
                <li><a href="#park" className="hover:text-amber-500 transition-colors">Southview Park</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <h4 className="text-white font-serif font-bold mb-6 text-lg hidden md:block">Reservations</h4>
              <a href="mailto:Bailey.1984@live.co.uk,nyron89@outlook.com?subject=Booking Inquiry for Sunny Bee Retreat" className="flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-semibold tracking-wide transition-colors w-full shadow-lg">
                <Mail className="w-5 h-5 mr-3" />
                EMAIL OWNER TO BOOK
              </a>
            </div>

          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Sunny Bee Retreat. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Cosy Caravan Rentals</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

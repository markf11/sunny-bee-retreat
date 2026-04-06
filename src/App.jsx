import React, { useState, useEffect } from 'react';
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
  Calendar,
  Users,
  ArrowUpRight,
  Sun
} from 'lucide-react';

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
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" className="stroke-slate-800" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" className="fill-amber-500 stroke-amber-500" />
    <path d="M12 10c-1.5-3-4-4-6-2s-1 5 1 6" className="stroke-amber-500" />
    <path d="M12 10c1.5-3 4-4 6-2s1 5-1 6" className="stroke-amber-500" />
    <path d="M8 14h8" className="stroke-slate-800" />
    <path d="M9 18h6" className="stroke-slate-800" />
  </svg>
);

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
  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} loading="lazy" />;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    { src: '18585.jpg', category: 'Exterior', alt: 'Sunny Bee Retreat Exterior' },
    { src: '18566.jpg', category: 'Exterior', alt: 'Caravan entrance and steps' },
    { src: '18562.jpg', category: 'Exterior', alt: 'Caravan side and outdoor seating' },
    { src: '18569.jpg', category: 'Interior', alt: 'Cosy living room and diner' },
    { src: '18572.jpg', category: 'Interior', alt: 'Cosy living room' },
    { src: '18579.jpg', category: 'Interior', alt: 'Living room with fire and TV' },
    { src: '18563.jpg', category: 'Interior', alt: 'Cosy fireplace view' },
    { src: '18560.jpg', category: 'Interior', alt: 'Living room view' },
    { src: '18565.jpg', category: 'Interior', alt: 'Hallway' },
    { src: '18557.jpg', category: 'Interior', alt: 'Kitchen and hallway view' },
    { src: '18583.jpg', category: 'Interior', alt: 'Open plan kitchen and diner' },
    { src: '18570.jpg', category: 'Interior', alt: 'Kitchen area and cooker' },
    { src: '18556.jpg', category: 'Interior', alt: 'Kitchen sink and counter' },
    { src: '18567.jpg', category: 'Interior', alt: 'Double bedroom' },
    { src: '18555.jpg', category: 'Interior', alt: 'Double bedroom with window' },
    { src: '18586.jpg', category: 'Interior', alt: 'Twin bedroom' },
    { src: '18573.jpg', category: 'Interior', alt: 'Twin bedroom' },
    { src: '18578.jpg', category: 'Interior', alt: 'Bedroom with TV' },
    { src: '18577.jpg', category: 'Interior', alt: 'Bedroom layout' },
    { src: '18588.jpg', category: 'Interior', alt: 'Shower with toilet' },
    { src: '18584.jpg', category: 'Interior', alt: 'Inside shower' },
    { src: '18587.jpg', category: 'Interior', alt: 'Separate toilet' },
    { src: '18581.jpg', category: 'Interior', alt: 'Separate toilet facility' },
    { src: '18576.jpg', category: 'Interior', alt: 'Separate toilet' },
    { src: '18582.jpg', category: 'Park', alt: 'Swimming pool' },
    { src: '18580.jpg', category: 'Park', alt: 'Climbing walls' },
    { src: '18568.jpg', category: 'Park', alt: 'Outdoor park and slide' },
    { src: '18571.jpg', category: 'Park', alt: 'Play area (park)' },
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

  const heroExteriorImage = '18585.jpg';

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800 selection:bg-amber-400 selection:text-slate-900">
      
      {/* 2026 Floating Glass Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-700 ease-in-out rounded-full border ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-2xl shadow-2xl shadow-black/5 border-white/50 px-6 py-3' 
              : 'bg-transparent border-transparent px-2 py-0'
          }`}>
            
            {/* Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="bg-amber-400 p-2.5 rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                <MinimalBeeLogo className="w-5 h-5 text-slate-900" />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`text-xl font-serif font-semibold tracking-tight leading-none transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  Sunny Bee
                </span>
                <span className={`text-[0.65rem] font-bold tracking-[0.25em] uppercase mt-0.5 transition-colors duration-500 ${scrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                  Retreat
                </span>
              </div>
            </div>

            {/* Desktop Nav - Pill shaped container */}
            <div className={`hidden md:flex space-x-1 items-center rounded-full px-2 py-1.5 transition-all duration-700 ${scrolled ? 'bg-slate-100/50' : 'bg-slate-900/40 backdrop-blur-xl border border-white/10'}`}>
              {['ABOUT', 'AMENITIES', 'PORTFOLIO', 'PARK'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`px-5 py-2 rounded-full text-[0.7rem] font-bold tracking-widest transition-all duration-300 ${
                    scrolled 
                      ? 'text-slate-500 hover:text-slate-900 hover:bg-white shadow-sm hover:shadow-md' 
                      : 'text-stone-300 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
               <button className="bg-slate-900 hover:bg-amber-400 text-white hover:text-slate-900 px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] transition-all duration-500 shadow-xl hover:shadow-amber-400/20 hover:-translate-y-1">
                RESERVE
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-slate-900/40 text-white border border-white/10'}`}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-4 bg-white/90 backdrop-blur-3xl border border-white/50 rounded-3xl p-6 shadow-2xl animate-fade-up">
            {['ABOUT', 'AMENITIES', 'PORTFOLIO', 'PARK'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-slate-900 font-bold tracking-widest text-sm py-4 border-b border-stone-100 last:border-0"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold tracking-widest text-sm mt-6 shadow-xl">
              RESERVE NOW
            </button>
          </div>
        )}
      </nav>

      {/* Cinematic Parallax Hero */}
      <section className="relative h-[100svh] min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Fixed background for parallax feel */}
        <div className="absolute inset-0 w-full h-full">
          <div className="fixed inset-0 w-full h-full -z-10">
            <SafeImage 
              src={heroExteriorImage} 
              alt="Sunny Bee Retreat Exterior" 
              className="w-full h-full object-cover object-center scale-110"
            />
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/30 to-slate-950/95 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-md mb-8">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </div>
            <span className="text-amber-400 font-bold tracking-[0.25em] uppercase text-[0.65rem]">
              Southview Caravan Park, Skegness
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[9rem] lg:text-[12rem] font-serif font-medium text-white mb-6 leading-[0.8] tracking-tighter drop-shadow-2xl">
            Sunny<br/>Bee.
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 max-w-2xl font-light leading-relaxed mb-12 drop-shadow-lg opacity-90 px-4">
            A sanctuary of calm. An 8-berth luxury escape where modern comfort meets nature's tranquility.
          </p>

          <button className="md:hidden bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold tracking-widest text-xs transition-transform active:scale-95 shadow-xl shadow-amber-400/20">
            EXPLORE AVAILABILITY
          </button>
        </div>

        {/* 2026 Floating Glass Booking Bar (Desktop) */}
        <div className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 backdrop-blur-2xl bg-white/10 border border-white/20 p-2.5 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] w-[90%] max-w-4xl items-center justify-between z-20 group hover:bg-white/15 transition-all duration-500">
          <div className="flex items-center space-x-4 px-8 py-3 border-r border-white/10 flex-1 hover:bg-white/5 rounded-full transition-colors cursor-pointer">
            <Calendar className="text-amber-400 w-6 h-6" />
            <div className="flex flex-col text-left">
              <span className="text-[0.65rem] font-bold text-stone-400 tracking-widest uppercase">Check in</span>
              <span className="text-white font-medium text-sm">Select Date</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 px-8 py-3 border-r border-white/10 flex-1 hover:bg-white/5 rounded-full transition-colors cursor-pointer">
            <Calendar className="text-amber-400 w-6 h-6" />
            <div className="flex flex-col text-left">
              <span className="text-[0.65rem] font-bold text-stone-400 tracking-widest uppercase">Check out</span>
              <span className="text-white font-medium text-sm">Select Date</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 px-8 py-3 flex-1 hover:bg-white/5 rounded-full transition-colors cursor-pointer">
            <Users className="text-amber-400 w-6 h-6" />
            <div className="flex flex-col text-left">
              <span className="text-[0.65rem] font-bold text-stone-400 tracking-widest uppercase">Guests</span>
              <span className="text-white font-medium text-sm">Up to 8</span>
            </div>
          </div>
          <button className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-full font-bold tracking-widest text-xs transition-all duration-300 whitespace-nowrap ml-2 shadow-lg hover:shadow-amber-400/30 hover:scale-105">
            CHECK DATES
          </button>
        </div>
      </section>

      {/* Intro - High contrast, editorial */}
      <section id="about" className="py-32 md:py-48 bg-slate-950 text-white relative z-20 rounded-t-[3rem] -mt-10 overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sun className="w-12 h-12 text-amber-400 mx-auto mb-12 opacity-80" strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tighter mb-10 leading-[1.1]">
            Ten Minutes Drive <br className="hidden md:block"/> From The Seafront.
          </h2>
          <div className="w-px h-32 bg-gradient-to-b from-amber-400/50 to-transparent mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to Sunny Bee Retreat. Located in a beautifully serene spot with a dedicated park space. Enjoy the quiet, or hop on the on-site bus to explore all local attractions. <span className="text-white font-medium">The perfect duality.</span>
          </p>
        </div>
      </section>

      {/* Bento Box Amenities */}
      <section id="amenities" className="py-32 bg-stone-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Premium Comfort</span>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-slate-900 tracking-tight">Exceptional <br/>Amenities.</h2>
            </div>
            <p className="text-slate-500 max-w-md font-light text-lg leading-relaxed">
              Every detail is designed for your comfort, ensuring a seamless stay from the moment you arrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Large Feature 1 */}
            <div className="md:col-span-2 md:row-span-2 group relative p-10 bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 group-hover:rotate-12 transition-all duration-1000">
                <Utensils className="w-48 h-48 text-amber-600" />
              </div>
              <div className="w-16 h-16 bg-stone-100 text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-amber-400 group-hover:text-white transition-colors duration-500 z-10">
                <Utensils className="w-8 h-8"/>
              </div>
              <div className="z-10">
                <h3 className="text-3xl font-serif font-medium mb-4 text-slate-900">Open Plan Kitchen</h3>
                <p className="text-slate-500 leading-relaxed text-lg max-w-sm">
                  Includes all essentials: a premium cooker, microwave, fridge, and everything you need to feel at home.
                </p>
              </div>
            </div>

            {/* Standard Feature 1 */}
            <div className="md:col-span-1 md:row-span-1 group p-8 bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <Gamepad2 className="w-8 h-8 text-amber-400 mb-6"/>
              <div>
                <h3 className="text-xl font-serif font-medium mb-2 text-white">Entertainment</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Smart TVs, PlayStation, & free WiFi.</p>
              </div>
            </div>

            {/* Standard Feature 2 */}
            <div className="md:col-span-1 md:row-span-1 group p-8 bg-amber-400 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <Flame className="w-8 h-8 text-slate-900 mb-6"/>
              <div>
                <h3 className="text-xl font-serif font-medium mb-2 text-slate-900">Cosy Living</h3>
                <p className="text-slate-800 text-sm leading-relaxed font-medium">A warm living room featuring a stunning fire.</p>
              </div>
            </div>

            {/* Wide Feature */}
            <div className="md:col-span-2 md:row-span-1 group relative p-8 bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-between">
              <div>
                <div className="w-12 h-12 bg-stone-100 text-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-white transition-colors duration-500">
                  <Users className="w-6 h-6"/>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-2 text-slate-900">8 Berth Space</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Sleeps up to 8 people across 3 bedrooms.</p>
              </div>
              <div className="hidden sm:block text-slate-200 group-hover:text-amber-100 transition-colors duration-500">
                <ArrowUpRight className="w-24 h-24 stroke-1" />
              </div>
            </div>

            {/* Stacked Small Features */}
            <div className="md:col-span-1 md:row-span-1 group p-8 bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <Bath className="w-8 h-8 text-slate-400 group-hover:text-amber-500 transition-colors duration-500 mb-4"/>
              <div>
                <h3 className="text-lg font-serif font-medium mb-1 text-slate-900">Two Baths</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Shower room plus separate toilet.</p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 group p-8 bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
              <Car className="w-8 h-8 text-slate-400 group-hover:text-amber-500 transition-colors duration-500 mb-4"/>
              <div>
                <h3 className="text-lg font-serif font-medium mb-1 text-slate-900">Park Space</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Dedicated parking right at the caravan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Masonry Portfolio */}
      <section id="portfolio" className="py-32 bg-white relative z-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Visual Tour</span>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-slate-900 tracking-tight">The Space.</h2>
            </div>
            
            {/* Minimal Filters */}
            <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              {['All', 'Exterior', 'Interior', 'Park'].map(category => (
                <button 
                  key={category}
                  onClick={() => setPortfolioFilter(category)}
                  className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest whitespace-nowrap transition-all duration-300 ${
                    portfolioFilter === category 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-stone-100 text-slate-500 hover:bg-stone-200 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredItems.map((img, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid bg-stone-100"
              >
                <SafeImage 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-[0.6rem] mb-2 block drop-shadow-md">{img.category}</span>
                  <p className="text-white font-serif font-medium text-xl drop-shadow-md leading-tight">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Park Info */}
      <section id="park" className="py-32 bg-slate-950 text-white relative z-20 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Resort Facilities</span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tighter mb-8 leading-[1.1]">Southview<br/>Caravan Park.</h2>
              <p className="text-xl text-stone-400 mb-12 leading-relaxed font-light">
                The site has all amenities you could need. A bus is available on site to all local attractions, blending convenience with natural beauty.
              </p>
              
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 mb-12 flex items-start gap-6">
                <div className="bg-amber-400/20 p-3 rounded-full shrink-0">
                  <Info className="text-amber-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg tracking-wide">Facility Passes</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Passes from reception are required to access site amenities. An extra cost applies for limitless entertainment.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Swimming", "Fishing", "Climbing walls", 
                  "Play area (park)", "Take aways", "Restaurant", 
                  "Entertainment area", "Bars", "Arcade", "Shop"
                ].map((amenity, idx) => (
                  <div key={idx} className="flex items-center space-x-4 group">
                    <div className="w-1.5 h-1.5 bg-stone-700 group-hover:bg-amber-400 transition-colors rounded-full"></div>
                    <span className="text-stone-300 group-hover:text-white transition-colors text-sm font-medium tracking-wide">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Asymmetric Image Layout */}
            <div className="order-1 lg:order-2 relative h-[600px] w-full">
               {parkImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`absolute rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 ${
                    idx === 0 
                      ? 'w-[70%] h-[70%] top-0 right-0 z-10' 
                      : 'w-[60%] h-[60%] bottom-0 left-0 z-20 -translate-y-12 translate-x-12 hover:-translate-y-16 hover:translate-x-8 transition-transform duration-700'
                  }`}
                >
                  <SafeImage 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
                  <p className="absolute bottom-8 left-8 text-white font-serif font-medium text-2xl leading-tight drop-shadow-lg">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Minimal Footer */}
      <footer className="bg-stone-50 text-slate-900 py-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-200 pb-16 mb-8 gap-12">
            
            <div className="flex flex-col items-start">
               <div className="flex items-center space-x-3 mb-8">
                <div className="bg-slate-900 p-2 rounded-full">
                  <MinimalBeeLogo className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-3xl font-serif font-bold tracking-tight">Sunny Bee</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-8 font-light text-lg">
                An 8-berth luxury escape at Southview Caravan Park, Skegness.
              </p>
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-stone-200 shadow-sm">
                <MapPin className="w-4 h-4 text-amber-500"/> 
                <span className="font-bold text-xs tracking-widest uppercase text-slate-700">Skegness, UK</span>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              <h4 className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 hidden md:block">Ready to escape?</h4>
              <button className="bg-slate-900 hover:bg-amber-400 hover:text-slate-900 text-white px-10 py-5 rounded-full font-bold tracking-[0.2em] text-sm transition-all duration-300 w-full shadow-xl hover:shadow-amber-400/20 hover:-translate-y-1">
                BOOK YOUR STAY
              </button>
            </div>

          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase text-slate-400">
            <p>&copy; {new Date().getFullYear()} Sunny Bee Retreat.</p>
            <p className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

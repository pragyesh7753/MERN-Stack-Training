import { useEffect, useState } from 'react';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-on-scroll visible">
            Welcome to Gusto
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-on-scroll visible" style={{ animationDelay: '0.2s' }}>
            Experience the finest Italian cuisine in an elegant atmosphere
          </p>
          <a
            href="#menu"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-105 animate-on-scroll visible"
            style={{ animationDelay: '0.4s' }}
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
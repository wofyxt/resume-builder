import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`container ${isScrolled ? 'scrolled' : ''}`}>
      {/* SVG блок */}
      <svg className="block-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c5d7e2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a8c4d6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path 
          d="
            M 20,0                       
            H 980                       
            Q 1000,0 1000,20              
            V 380                          
            Q 1000,400 980,400             
            H 335                         
            Q 315,400 315,380            
            V 275                        
            Q 315,255 285,255            
            H 20                           
            Q 0,255 0,235              
            V 20                         
            Q 0,0 20,0                    
            Z
          " 
          fill="url(#gradient)"
        />
      </svg>

      <Header />

      <img 
        id="picture-left" 
        src="картинки для диплома/бизнес.jpg" 
        alt="Профессионалы за работой"
      />
      
      <div className="button-container">
        <Button variant="primary">Зарегистрироваться</Button>
        <Button variant="secondary">Войти</Button>
      </div>
      
      <img 
        id="picture-right" 
        src="картинки для диплома/документ на планшете.jpg" 
        alt="Резюме на планшете"
      />
    </div>
  );
};

export default Home;
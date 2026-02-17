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
      <div className="welcome-block">
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
      <div className='about-us'>
        <div className='left-block'>
      <svg width="788" height="720" viewBox="0 0 788 720" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 693.931C9.84472e-05 708.29 11.6407 719.931 26 719.931H320.509C321.139 719.976 321.775 720 322.417 720L761.394 720C775.753 720 787.394 708.359 787.394 694L787.394 384.817C787.393 370.458 775.753 358.817 761.394 358.817H605.101C590.741 358.817 579.101 347.177 579.101 332.817V26C579.101 11.6406 567.46 0 553.101 0L26 0C11.6406 0 0 11.6406 0 26L0 693.931Z" fill="#B6C7D2"/>
</svg>
  <img className="left-block-picture" width='220' src='public/картинки для диплома/идея.jpg'></img>
  

      </div>
      <div className="right-block">
 <svg width="802" height="735" viewBox="0 0 806 743" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M805.999 26.0605C805.999 11.7015 794.359 0.0608108 780 0.0605469H498.137C497.552 0.0212298 496.962 1.09301e-05 496.367 0L26 0C11.6406 2.87627e-05 0 11.6406 0 26V295.3C0 309.659 11.6406 321.3 26 321.3H168.929C183.288 321.3 194.929 332.94 194.929 347.3V716.231C194.929 730.591 206.57 742.231 220.929 742.231H779.999C794.358 742.231 805.999 730.591 805.999 716.231V26.0605Z" fill="#B6C7D2"/>
</svg>

      </div>
   

      </div>
    </div>
  );
};

export default Home;
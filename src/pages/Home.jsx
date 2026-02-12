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
         <svg width="700" height="690" viewBox="0 0 900 888" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 861C6.09787e-05 875.359 11.6406 887 26 887L362.695 887C363.392 887.056 364.097 887.086 364.809 887.086L874 887.086C888.359 887.086 900 875.445 900 861.086L900 468.086C900 453.727 888.359 442.086 874 442.086L687.919 442.086C673.56 442.086 661.919 430.445 661.919 416.086V26C661.919 11.6407 650.278 0.000164769 635.919 0L26 0C11.6406 2.38186e-05 0 11.6406 0 26L0 861Z" fill="#B6C7D2"/>
</svg>
      </div>
      <div className="right-block">
      <svg width="721" height="693" viewBox="0 0 923 888" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M923 26.0732C923 11.7138 911.359 0.0732422 897 0.0732422L574.149 0.0732422C573.504 0.0252664 572.852 0 572.194 0L26 0C11.6407 7.58589e-05 0 11.6406 0 26V358C2.88624e-05 372.359 11.6407 384 26 384H197.226C211.585 384 223.226 395.641 223.226 410L223.226 861.073C223.226 875.433 234.866 887.073 249.226 887.073L897 887.073C911.359 887.073 923 875.433 923 861.073L923 26.0732Z" fill="#B6C7D2"/>
</svg>
      </div>
   

      </div>
    </div>
  );
};

export default Home;
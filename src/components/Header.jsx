import React, { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Главная');

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
    console.log(`Переход на страницу: ${linkText}`);
  };

  return (
    <div className="header">
      <div className="logo">ResumeBuilder</div>
      <nav className="menu">
        {['Главная', 'Шаблоны', 'О нас', 'Контакты'].map((link) => (
          <a
            key={link}
            href="#"
            className={activeLink === link ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link);
            }}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
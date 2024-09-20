import React from 'react';

interface FooterProps {
  links: string[];
}

const Footer = (prop: FooterProps) => {
  return (
    <footer>
      <nav>
        <ul>
          {prop.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

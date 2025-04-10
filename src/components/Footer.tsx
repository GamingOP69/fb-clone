
import React from 'react';
import LanguageSelector from './LanguageSelector';

const footerLinks = [
  "Sign Up", "Log In", "Messenger", "Facebook Lite", "Watch", "Places", 
  "Games", "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Instagram", 
  "Threads", "Fundraisers", "Services", "Voting Information Center", "Privacy Policy", 
  "Privacy Center", "Groups", "About", "Create Ad", "Create Page", "Developers", 
  "Careers", "Cookies", "Ad choices", "Terms", "Help", "Contact Uploading & Non-Users"
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[980px] mx-auto py-8 px-4 text-xs text-gray-500">
      <div className="flex flex-wrap gap-x-4 pb-2">
        <LanguageSelector />
      </div>
      
      <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-gray-300 pt-2">
        {footerLinks.map((link, index) => (
          <a 
            key={index} 
            href="#" 
            className="hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
      
      <div className="mt-4">
        <p>Meta © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

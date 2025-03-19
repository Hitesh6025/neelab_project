'use client';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-800 text-white py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            <p>&copy; 2024 Neelabh Studio. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="/contact" className="text-sm hover:text-gray-300 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
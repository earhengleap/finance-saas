import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center text-sm text-muted-foreground absolute bottom-0 left-0 right-0 h-16">
      <p className="text-gray-600">
        &copy; {currentYear} InFinance. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

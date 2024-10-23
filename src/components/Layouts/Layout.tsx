import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
interface LayoutProps {
  children: ReactNode;  // Typing the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 px-[10vw]">
      <main className="flex-grow">{children}</main>
      {/* Optional Footer */}
    </div>
  );
};

export default Layout;

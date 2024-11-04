import { FC, ReactNode, useEffect } from "react";

import Navbar from "components/navbar/Navbar";
import SpinningEarth from "components/background/SpinningEarth";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SpinningEarth />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;

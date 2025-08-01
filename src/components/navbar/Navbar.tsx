import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="flex justify-between px-[4%] py-2 text-white">
      <div></div>
      <div className="flex w-1/2 lg:w-1/3 justify-between">
        {navItems.map((item, index) => (
          <div key={item.path} className="flex items-center">
            <Link
              to={item.path}
              className={`transition-colors hover:text-blue-400 ${
                location.pathname === item.path ? 'text-blue-400' : 'text-white/70'
              }`}
            >
              {item.label}
            </Link>
            {index < navItems.length - 1 && (
              <span className="mx-2 text-white/30">/</span>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full   z-50  animate-fade-in ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 mt-7">
            <div className="md:w-25 md:h-25 w-15 h-15">
              <img src={logo} className="bg-transparent rounded-full" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 backdrop-blur-lg px-12 py-4  rounded-4xl bg-blur-2xl bg-blue-500">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black  hover:text-blue-100  transition-colors duration-300 font-poppins text-xl "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-300 p-4 rounded-b-full font-poppins">
              <Link to={"/resume"}>Get Start</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="ghost"
                // size="sm"
                onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t rounded-md border-border/50 animate-slide-down">
            <div className="py-4 space-y-4 ">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex justify-center px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium "
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

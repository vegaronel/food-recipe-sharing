import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Utility function from shadcn/ui
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import links from "./links.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="fixed top-0 w-full bg-white border-b shadow-sm z-50 ">
        <div className="lg:px-0 md-px-4 px-4 flex items-center justify-between h-16 mx-auto max-w-screen-xl">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-lg font-bold text-gray-800">
              MyLogo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((item, index) => (
              <Link
              key={index}
                to={item.href}
                className={cn(
                  "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",
                  { "font-semibold": location.pathname === "/" }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {links.map((item, index) => (
                <Link key={index}
                  to={item.href}
                  className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;


import { Bold, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-2 py-4">

        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            {/* <span className="tracking-wider">Rohit Chawla Photography </span> */}
           <h2>ROHIT CHAWLA PHOTOGRAPHY </h2>
            {/* <h2>Best Cinematographer</h2> */}
            {/* <img src="public/LOg.png"></img> */}

     {/* <img src="public/LOg.png" alt="Lens & Light Logo" className="h-20 w-auto object-contain"/> */}
{/* 
     <img
  src="public/LOg.png"
  alt="Lens & Light Logo"
  className="logo-image"
/> */}

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:opacity-70 transition-opacity"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left hover:opacity-70 transition-opacity"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

// import { Bold, Menu, X } from "lucide-react";
// import { Button } from "./ui/button";
// import { useState } from "react";

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
    //   <div className="container mx-auto px-2 py-4">

        // {/* <div className="flex items-center justify-between">
          // <div className="cursor-pointer" onClick={() => scrollToSection("hero")}> */}
            // {/* <span className="tracking-wider">Rohit Chawla Photography </span> */}
          //  {/* <h2>ROHIT CHAWLA PHOTOGRAPHY </h2> */}
            // {/* <h2>Best Cinematographer</h2> */}
            // {/* <img src="public/LOg.png"></img> */}

    //  {/* <img src="public/LOg.png" alt="Lens & Light Logo" className="h-20 w-auto object-contain"/> */}
// {/* 
//      <img
//   src="public/LOg.png"
//   alt="Lens & Light Logo"
//   className="logo-image"
// /> */}

          // </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:opacity-70 transition-opacity" */}
            {/* > */}
              {/* Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-70 transition-opacity" */}
          {/* //   > */}
          //     About
          //   </button>
          //   <button
          //     onClick={() => scrollToSection("contact")}
          //     className="hover:opacity-70 transition-opacity"
          //   >
          //     Contact
          //   </button>
          // </nav>

          {/* Mobile Menu Button */}
          {/* <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div> */}

        {/* Mobile Navigation */}
        {/* {isMenuOpen && (
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
            > */}
              {/* Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
} */}



import { Menu, X } from "lucide-react";
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
    <header className="relative z-50 w-full bg-[#f7f3ed]">

      {/* LOGO */}
      <div
        className="flex justify-center items-center pt-8 pb-18 cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        <img
          src="/R_logo.png"
          alt="Rohit Chawla Photography"
          className="h-16 w-auto object-contain scale-125"
        />
      </div>

      {/* NAVIGATION */}
      {/* <nav className="hidden md:flex justify-center items-center gap-16 pt-2 pb-5"> */}
     {/* <nav className="hidden md:flex items-center justify-center gap-12"> */}
       <nav
  className="hidden md:flex items-center justify-center pt-2 pb-16"
  style={{ columnGap: "85px",   paddingBottom: "75px", paddingTop: "25px" }}
>
      
        <button
  onClick={() => scrollToSection("hero")}
  className="font-['Cormorant_Garamond'] text-[15px] font-normal tracking-[0.18em] uppercase whitespace-nowrap hover:opacity-60 transition-opacity"
>
  HOME
</button>

<button onClick={() => scrollToSection("featured work")}>
          FEATURED WORK 
        </button>

        <button onClick={() => scrollToSection("portfolio")}  
           className="text-[14px] tracking-[0.12em] whitespace-nowrap"
            >
          PORTFOLIO
        </button>

        {/* <button onClick={() => scrollToSection("stories")}>
          STORIES
        </button> */}

        {/* <button onClick={() => scrollToSection("testimonials")}>
          TESTIMONIALS
        </button> */}

        <button onClick={() => scrollToSection("about")}
                className="text-[14px] tracking-[0.12em] whitespace-nowrap"
                >
          ABOUT
        </button>

        <button onClick={() => scrollToSection("contact")}
          >
          ENQUIRE
        </button>

      </nav>

      {/* MOBILE */}
      <div className="md:hidden flex justify-end px-4 pb-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-5 pb-6">

          <button onClick={() => scrollToSection("home")}
              className="text-[14px] tracking-[0.12em] whitespace-nowrap">
            HOME
          </button>

          <button onClick={() => scrollToSection("featured work")}
             className="text-[14px] tracking-[0.12em] whitespace-nowrap">
          
          FEATURED WORK 
        </button>

          <button onClick={() => scrollToSection("portfolio")}
              className="text-[14px] tracking-[0.12em] whitespace-nowrap">
            GALLERIES
          </button>

          {/* <button onClick={() => scrollToSection("stories")}>
            STORIES
          </button>

          <button onClick={() => scrollToSection("testimonials")}>
            TESTIMONIALS
          </button> */}

          <button onClick={() => scrollToSection("about")}
              className="text-[14px] tracking-[0.12em] whitespace-nowrap">
            ABOUT
          </button>

          <button onClick={() => scrollToSection("contact")}
              className="text-[14px] tracking-[0.12em] whitespace-nowrap">
            ENQUIRE
          </button>

        </nav>
      )}
    </header>
  );
}
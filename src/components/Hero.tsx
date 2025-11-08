// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Button } from "./ui/button";

// interface HeroProps {
//   onContactClick: () => void;
// }

// export function Hero({ onContactClick }: HeroProps) {
//   return (
//     <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 bg-black">
//         <ImageWithFallback
//           src="public/IMAGE3.JPG"
//           className="w-full h-full object-cover opacity-60"
//         />
//       </div>

      {/* <div className="relative z-10 text-center text-white px-4 mt-20"> */}
        {/* <div className="relative z-10 text-center text-white px-4 translate-y-10">

       <h1 className="mb-6 tracking-wider text-6xl md:text-6xl">
  Capturing moments that last a lifetime
</h1> */}

        {/* <p className="mb-8 max-w-2xl mx-auto opacity-90">
          Professional photography services for weddings, portraits, events, and commercial projects.
          Let's bring your vision to life through the art of photography.
        </p> */}
        {/* <Button
          size="lg"
          variant="outline"
          className="bg-white/10 border-white text-white hover:bg-white hover:text-black transition-all"
          onClick={onContactClick}
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
} */}




import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    // <section id="hero" className="relative h-screen overflow-hidden">

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <ImageWithFallback
          src="public/IMAGE3.JPG"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* ✅ Logo in top-left corner (moved closer to edge) */}
      {/* <div className="absolute top--5 left-4 z-20"> */}
        {/* <img
          src="/LOg.png"
          alt="Lens & Light Logo"
          className="h-20 w-auto object-contain"
        /> */}
      {/* </div> */}

      {/* ✅ Text + Button (slightly higher now) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 -translate-y-10">
        <h1 className="mb-6 text-5xl md:text-6xl font-semibold tracking-wide">
          Capturing moments that last a lifetime
        </h1>

        <Button
          size="lg"
          variant="outline"
          className="bg-white/10 border-white text-white hover:bg-white hover:text-black transition-all"
          onClick={onContactClick}
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}


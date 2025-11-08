import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const featuredWorks = [
  {
    id: 1,
    image: "public/wed.JPG",

    // title: "Summer Garden Wedding",
    category: "Wedding Photography",
    description: "A celebration of love — captured through our lens.",
  },
  {
    id: 2,    
    image: "public/IMG_5116.JPG",
    // title: "Romantic Couple Portrait",
    category: "Portrait Photography",
    description: "Capturing elegance and emotion through the art of natural portraiture",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MTA3OTYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Corporate Event Coverage",
    category: "Event Photography",
    description: "Dynamic and engaging coverage of professional gatherings",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzYxMDMwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Fashion Editorial",
    category: "Fashion Photography",
    description: "Bold and creative studio photography for fashion brands",
  },
];

export function FeaturedWork() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          {/* <h2>ROHIT CHAWLA PHOTOGRAPHY </h2> */}
          {/* <h2>BEST CINEMATOGRAPGER</h2> */}
          <h2 className="mb-4 tracking-wider">FEATURED WORK</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            A showcase of recent projects that highlight my passion and expertise in photography.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {featuredWorks.map((work) => (
              <CarouselItem key={work.id}>
                <div className="relative h-[500px] md:h-[600px]">

                  
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                    <div className="p-8 md:p-12 max-w-3xl">
                      <p className="opacity-70 mb-2 tracking-wider">{work.category}</p>
                      <h3 className="mb-3">{work.title}</h3>
                      <p className="opacity-80">{work.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/90 hover:bg-white text-black border-none" />
          <CarouselNext className="right-4 bg-white/90 hover:bg-white text-black border-none" />
        </Carousel>
      </div>
    </section>
  );
}

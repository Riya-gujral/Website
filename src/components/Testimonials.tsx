import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1595956935400-eced8114c8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW1vbmlhbCUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTEyOTY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Absolutely stunning work! The photographer captured every precious moment of our wedding day perfectly. The photos are beyond our expectations and we'll treasure them forever.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEwNjMzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Professional, creative, and incredibly talented. Our corporate event photos exceeded all expectations. Highly recommend for any commercial photography needs!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Portrait Client",
    image: "https://images.unsplash.com/photo-1703759354715-17fcbeea4b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNsaWVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTA3MjM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Working with this photographer was an absolute joy! They made our family feel so comfortable, and the resulting portraits are breathtaking. True artistry!",
  },
];

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 tracking-wider">CLIENT TESTIMONIALS</h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Don't just take my word for it - hear what my clients have to say about their experience.
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
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-gray-50 p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 mx-auto mb-6 opacity-20" />
                  <p className="mb-8 italic opacity-80">{testimonial.text}</p>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1">{testimonial.name}</h3>
                    <p className="opacity-60">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-0" />
          <CarouselNext className="hidden md:flex right-0" />
        </Carousel>
      </div>
    </section>
  );
}

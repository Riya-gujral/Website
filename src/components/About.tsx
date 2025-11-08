import { Camera, Award, Users, Heart } from "lucide-react";

const stats = [
  { icon: Camera, label: "Years Experience", value: "10+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Heart, label: "Projects Completed", value: "400+" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4"> 
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 tracking-wider">ABOUT ME</h2>
           
           <p> Rohit Chawla – Capturing Love, Crafting Memories</p>
            <p className="mb-4 opacity-90">
             Based in the vibrant city of Chandigarh, Rohit Chawla is a visionary photographer known for transforming 
    fleeting moments into timeless works of art. With a perfect blend of creativity, emotion, and precision,
     his lens captures stories that words often fail to express. Whether it’s the glow of a wedding, the elegance 
    of a portrait, or the beauty of everyday life, Rohit’s photography reflects authenticity and soul. Each frame 
     he creates carries a touch of warmth, artistry, and aesthetic finesse — making ordinary scenes look extraordinary.
            </p>
            <p className="mb-4 opacity-90">
              Every love story is unique, and Rohit Chawla captures it with elegance and heart. From intimate candid moments to
     grand celebrations, each wedding and pre-wedding shoot is crafted to reflect the couple’s personality, emotions,
      and the magic of their journey together. His lens doesn’t just document events—it immortalizes the laughter,
       the tears, and the unspoken moments that make every wedding unforgettable
            </p>
            <p className=" mb-4 opacity-90">
              Rohit’s photography is more than just pictures—it’s poetry in motion. With a fine balance of creativity and authenticity,
        he captures the soul of each moment. Soft glows, candid laughter, heartfelt gestures, and carefully curated frames
         come together to form a collection of memories that feel personal, warm, and eternal..
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 text-center hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 opacity-70" />
                  <div className="mb-1">{stat.value}</div>
                  <p className="opacity-60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

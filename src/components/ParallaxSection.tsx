import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ParallaxSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1729857001644-ade54ca81f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjEwNDg1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
        <div className="text-center max-w-3xl">
          <h2 className="mb-6 tracking-wider">PASSION MEETS PRECISION</h2>
          <p className="mb-4 opacity-90">
            Every photograph tells a story. With state-of-the-art equipment and years of experience,
            I transform fleeting moments into timeless art that you'll cherish forever.
          </p>
          <p className="opacity-90">
            From intimate portraits to grand celebrations, my commitment to excellence ensures
            that every shot is nothing short of perfection.
          </p>
        </div>
      </div>
    </section>
  );
}

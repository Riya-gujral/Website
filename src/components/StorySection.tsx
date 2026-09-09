export function StorySection() {
  return (
    <section className="bg-[#f7f3ed] text-[#222] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Decorative line + Big Text */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <span className="w-16 h-px bg-[#222]/30"></span>

          <span className="font-['Cormorant_Garamond'] italic text-2xl md:text-4xl tracking-[0.18em]">
           <h1> LOVE • MOMENTS • STORIES</h1>
          </span>

          <span className="w-16 h-px bg-[#222]/30"></span>
        </div>

        {/* Heading */}
        <h2 className="font-['Cormorant_Garamond'] italic text-3xl md:text-5xl font-normal mb-10">
          Where Moments Become Memories.
        </h2>

        {/* Story Text */}
        <div className="font-['Cormorant_Garamond'] italic text-base md:text-lg leading-8 text-[#666]">

          <p className="mb-4">
            Some moments are loud.
          </p>

          <p className="mb-4">
            Some happen quietly, almost unnoticed.
          </p>

          <p className="text-xl md:text-2xl text-[#333] mb-5">
            A smile. A touch. A tear.
          </p>

          <p className="mb-7">
            A glance that says everything without a word.
          </p>

          {/* Divider */}
          <div className="flex justify-center mb-7">
            <span className="w-14 h-px bg-[#222]/25"></span>
          </div>

          <p className="mb-5">
            We look for those moments —
            <br />
            the ones that make your story uniquely yours.
          </p>

          {/* Closing */}
          <h1 className="text-xl md:text-2xl text-[#222] mt-8">
            Real moments. Honest emotions. Timeless frames.
          </h1>

        </div>

      </div>
    </section>
  );
}
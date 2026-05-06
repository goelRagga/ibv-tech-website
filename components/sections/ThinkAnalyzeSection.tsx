"use client";

// components/sections/ThinkAnalyzeSection.tsx

export function ThinkAnalyzeSection() {
  return (
    <section className="bg-[#111112] px-2 py-6 md:py-8">
      <div className="mx-4 md:mx-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2.5fr] gap-6 md:gap-12 items-center">

          {/* Left: image */}
          <div className="rounded-2xl overflow-hidden h-[280px] md:h-[420px] lg:h-[660px]">
            <img
              src="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1777664375/Rectangle_39_zqryfx.png"
              alt="Handshake"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col justify-between h-full gap-8 md:gap-12 lg:gap-20 py-4">

            {/* Top text */}
            <p className="font-inter text-[14px] md:text-[15px] leading-relaxed text-[#aaa] max-w-[340px]">
              Bring together expertise, technology, and data-driven thinking to
              build solutions that are effective today and sustainable for the
              future.
            </p>

            {/* Middle: tagline */}
            <div>
              <h2 className="font-hanken text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-tight ml-0 md:ml-12 lg:ml-20">
                <span className="text-[#555]">Think.</span>{" "}
                <span className="text-white">Analyze.</span>
              </h2>
              <h2 className="font-hanken text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-tight text-[#cc1f1f] ml-0 md:ml-12 lg:ml-20">
                Deliver.
              </h2>
            </div>

            {/* Bottom text */}
            <p className="font-inter text-[14px] md:text-[15px] leading-relaxed text-[#aaa] max-w-[300px] self-start md:self-end text-left md:text-right">
              We create intelligent, outcome-driven solutions that help
              businesses grow, compete, and move forward with confidence.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
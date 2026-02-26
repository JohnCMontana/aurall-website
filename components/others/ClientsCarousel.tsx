"use client";

interface LogoCarouselProps {
  clients: string[];
}

const LogoCarousel = ({ clients }: LogoCarouselProps) => {
  return (
    <div className="w-full py-5">
      <div className="mx-auto max-w-7xl w-[90%] overflow-hidden relative logo-fade-container">
        <div className="scroll-track items-center">
          {[...clients, ...clients].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Client ${i}`}
              className="
                h-[50px] w-auto px-10 flex-shrink-0 object-contain
                opacity-80 hover:opacity-100
                grayscale hover:grayscale-0
                transition-all duration-300
                dark:invert dark:brightness-110
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  className?: string;
  imageSrc?: string;
};

export default function BentoCard({
  title,
  description,
  className = "",
  imageSrc,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-4xl border border-foreground/20 bg-background/20 backdrop-blur-md p-6 sm:p-8 ${className}`}
    >
      <h3
        className="text-4xl font-normal text-foreground/70"
        style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.7)" }}
      >
        {title}
      </h3>

      <p className="mt-2 text-normal text-foreground/60">{description}</p>

      {imageSrc && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-80 flex items-end justify-center pointer-events-none">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={500}
            className="
              object-contain
              [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
            "
          />
        </div>
      )}
    </div>
  );
}

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonGradient = ({ href, children, className = "" }: ButtonProps) => (
  <Link href={href} className={`inline-block ${className}`}>
    <span
      className="relative inline-block font-semibold transition-transform duration-200 hover:scale-105"
      style={{
        border: "1px solid transparent",
        borderImage:
          "linear-gradient(to right, rgb(233,76,78), rgb(74,120,235)) 1",
        boxShadow:
          "0 0 15px rgba(233,76,78,0.35), 0 0 15px rgba(74,120,235,0.35)",
      }}
    >
      <span className="block rounded-md backdrop-blur-sm px-5 py-2">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(233,76,78), rgb(74,120,235))",
          }}
        >
          {children}
        </span>
      </span>
    </span>
  </Link>
);

export default ButtonGradient;

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonGradient = ({ href, children, className = "" }: ButtonProps) => (
  <Link href={href} className={`inline-flex items-center justify-center ${className}`}>
    <span
      className="relative inline-block p-[1px] font-semibold transition-transform duration-200 hover:scale-105 align-middle"
      style={{
        border: "1px solid transparent",
        borderImage:
          "linear-gradient(to right, rgb(233,76,78), rgb(74,120,235)) 1",
        boxShadow:
          "0 0 15px rgba(233,76,78,0.35), 0 0 15px rgba(74,120,235,0.35)",
        borderRadius: "9999px",
      }}
    >
      <span className="block backdrop-blur-sm px-6 py-3 leading-none">
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

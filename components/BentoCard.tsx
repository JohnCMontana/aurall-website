type Props = {
  title: string;
  description: string;
  className?: string;
};

export default function BentoCard({ title, description, className = "" }: Props) {
  return (
    <div className={`rounded-4xl border border-white/10 bg-white/10 backdrop-blur-md p-4 sm:p-6 ${className}`}>
      <h3 className="text-4xl font-normal text-white" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.7)' }}>{title}</h3>
      <p className="mt-2 text-normal text-white/80">{description}</p>
    </div>
  );
}
